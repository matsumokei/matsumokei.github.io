export function getCategory(id: string): string | null {
  const slashIndex = id.indexOf('/');
  return slashIndex === -1 ? null : id.slice(0, slashIndex);
}
