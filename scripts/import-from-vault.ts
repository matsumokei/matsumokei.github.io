import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VAULT_DIR = path.resolve(process.env.HOME || "~", "");
const VAULT_BLOG_DIR = path.join(VAULT_DIR, "src/05-Blogs");
const VAULT_IMAGES_DIR = path.join(VAULT_DIR, "src/images");

const BLOG_CONTENT_DIR = path.resolve(__dirname, "../src/content/blog");
const BLOG_IMAGES_DIR = path.resolve(__dirname, "../public/images/vault");

interface ParsedFrontmatter {
  rawFrontmatter: string;
  shouldPublish: boolean;
  body: string;
}

function parseFrontmatter(content: string): ParsedFrontmatter {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { rawFrontmatter: "", shouldPublish: false, body: content };
  }

  const yamlContent = match[1];
  const body = match[2];
  const shouldPublish = /^publish:\s*true\s*$/m.test(yamlContent);

  const cleanedYaml = yamlContent
    .split("\n")
    .filter((line) => !/^publish:\s*/.test(line))
    .join("\n");

  return { rawFrontmatter: cleanedYaml, shouldPublish, body };
}

function convertWikiLinks(content: string): string {
  // [[link|display]] -> display
  content = content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2");
  // [[link]] -> link
  content = content.replace(/\[\[([^\]]+)\]\]/g, "$1");
  return content;
}

function extractAndConvertImages(content: string, copiedImages: Set<string>): string {
  const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"];

  // ![[image.png]] -> ![image](/images/vault/image.png)
  return content.replace(/!\[\[([^\]]+)\]\]/g, (_match, filename: string) => {
    const ext = path.extname(filename).toLowerCase();
    if (!imageExtensions.includes(ext)) return "";
    copiedImages.add(filename);
    const name = path.basename(filename, ext);
    return `![${name}](/images/vault/${filename})`;
  });
}

function copyImages(images: Set<string>): void {
  if (images.size === 0) return;
  fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });

  for (const image of images) {
    const srcPath = path.join(VAULT_IMAGES_DIR, image);
    const destPath = path.join(BLOG_IMAGES_DIR, image);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`  Copied image: ${image}`);
    } else {
      console.warn(`  Warning: image not found in vault: ${image}`);
    }
  }
}

function generateSlug(filename: string): string {
  return path.basename(filename, ".md").trim().replace(/\s+/g, "-").toLowerCase();
}

function importFile(filePath: string, { force = false }: { force?: boolean } = {}): boolean {
  const file = path.basename(filePath);
  const content = fs.readFileSync(filePath, "utf-8");
  const { rawFrontmatter, shouldPublish, body } = parseFrontmatter(content);

  if (!shouldPublish && !force) {
    console.log(`  Skipped (publish: true が無い): ${file}`);
    return false;
  }

  fs.mkdirSync(BLOG_CONTENT_DIR, { recursive: true });

  const copiedImages = new Set<string>();
  let processedBody = extractAndConvertImages(body, copiedImages);
  processedBody = convertWikiLinks(processedBody);

  const slug = generateSlug(file);
  const newContent = `---\n${rawFrontmatter}\n---\n${processedBody}`;
  const destPath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);

  fs.writeFileSync(destPath, newContent);
  console.log(`  Imported: ${file} -> src/content/blog/${slug}.md`);
  copyImages(copiedImages);
  return true;
}

function resolveVaultFilePath(target: string): string | undefined {
  const withExt = target.endsWith(".md") ? target : `${target}.md`;
  const candidates = [
    path.resolve(withExt),
    path.join(VAULT_BLOG_DIR, withExt),
    path.join(VAULT_BLOG_DIR, path.basename(withExt)),
  ];
  return candidates.find((p) => fs.existsSync(p));
}

function importSingleFile(target: string, { force }: { force: boolean }): void {
  const filePath = resolveVaultFilePath(target);
  if (!filePath) {
    console.error(`File not found: ${target}`);
    console.error(`  (looked in ${VAULT_BLOG_DIR})`);
    process.exitCode = 1;
    return;
  }

  console.log("Importing single file from Obsidian Vault...");
  console.log(`  Source: ${filePath}`);
  const imported = importFile(filePath, { force });
  console.log(`\nDone. imported=${imported ? 1 : 0} skipped=${imported ? 0 : 1}`);
}

function importAll(): void {
  console.log("Importing from Obsidian Vault...");
  console.log(`  Source: ${VAULT_BLOG_DIR}`);

  if (!fs.existsSync(VAULT_BLOG_DIR)) {
    console.log(`  Directory not found: ${VAULT_BLOG_DIR}`);
    return;
  }

  const files = fs.readdirSync(VAULT_BLOG_DIR).filter((f) => f.endsWith(".md"));
  let imported = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(VAULT_BLOG_DIR, file);
    if (importFile(filePath, {})) {
      imported++;
    } else {
      skipped++;
    }
  }

  console.log(`\nDone. imported=${imported} skipped=${skipped}`);
}

function main(): void {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const target = args.find((a) => !a.startsWith("--"));

  if (target) {
    importSingleFile(target, { force });
  } else {
    importAll();
  }
}

main();
