import {SimpleGrid,  Table, Container, Burger,Box,Title, Center,Timeline ,Image, Card, Avatar, Text, Group, Button,ActionIcon, rem, CardSection  } from '@mantine/core';
import classes from './UserCardImage.module.css';
import { useState,useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {  IconBrandTwitter, IconBrandGithub, IconBrandLinkedin, IconBrandMastodon, IconBrandGmail } from '@tabler/icons-react';
import { title } from 'process';

export default function Index() {
	const [showPersonalInfo, setShowPersonalInfo] = useState(1);
  return (
    <>
    <HeaderSimple setShowPersonalInfo={setShowPersonalInfo} />
    {showPersonalInfo==1 && <PersonalInfo/>}
    {showPersonalInfo==2 && <PubsTalks/>}
    {showPersonalInfo==3 && <Blogs/>}
    {/* {showPersonalInfo==3 && <QR/>} */}
    <FooterSocial/>
    </>
  );
}

function QR(){
  return (
    <Center>
    <Box ta="center" w={{ base: 400, sm: 800, lg: 1200 }}>
    <Title td="underline" order={1} my="xl">QR code for this site</Title>
    <Title order={2} my="xl">📷Scan to visit my portfolio</Title>
      <Image src="qr.png" fit="contain" height={250} width={250} alt="qr code"/>
    </Box>
    </Center>
  )
}

//Blogs
function Blogs(){
  return (
    <>
    {/* <Center>
    <Title td="underline" order={2} my="xl">Future Tech Blog</Title>
    </Center>
    <FutureBlogs/> */}
    <Center>
    <Title td="underline" order={2} my="xl">Zenn</Title>
    </Center>
    <ZennBlogs/>
    <Center>
    <Title td="underline" order={2} my="xl">Qiita</Title>
    </Center>
    <QiitaBlogs/>
    </>
  )
}

interface OgpCardProps {
  title: string;
  image?: string;
  url: string;
}


interface ZenFeedItem {
  title: string;
  link: string;
  enclosure?: {
    link: string;
  };
}

interface QiitaFeedItem {
  title: string;
  link: string;
}
const OgpCard: React.FC<OgpCardProps> = ({ title, image, url }) => {
  return (
      <>
      <Card shadow="lg" padding="lg" radius="md" style={{ cursor: 'pointer'}} component='a' href={url} target="_blank">
        <Card.Section inheritPadding>
          <Image fit="contain" radius="md" src={image} alt={title} h={160}/>
        </Card.Section>
        <Text>{title}</Text>
      </Card>
    </>
  );
};

const ZENN_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/matsumo162/feed";
const QIITA_URL="https://api.rss2json.com/v1/api.json?rss_url=https://qiita.com/ichijouji/feed";

export const QiitaBlogs = () => {
  const [articles, setArticles] = useState<QiitaFeedItem[]>([]);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const res = await fetch(QIITA_URL);
        const data = await res.json();
        setArticles(data.items);
      } catch (error) {
        console.error('Failed to fetch RSS:', error);
      }
    };

    fetchRSS();
  }, []);

  return (
    <Center>
     <Box ta="center" w={{ base: 400, sm: 800, lg: 1200 }}>
    <SimpleGrid cols={2}>
      {articles.map((article, index) => (
        <OgpCard
          key={index}
          title={article.title}
          image="qiita.png"
          url={article.link}
        />
      ))}
    </SimpleGrid>
    </Box>
    </Center>
  );
};

export const ZennBlogs = () => {
  const [articles, setArticles] = useState<ZenFeedItem[]>([]);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const res = await fetch(ZENN_URL);
        const data = await res.json();
        setArticles(data.items);
      } catch (error) {
        console.error('Failed to fetch RSS:', error);
      }
    };

    fetchRSS();
  }, []);

  return (
    <Center>
     <Box ta="center" w={{ base: 400, sm: 800, lg: 1200 }}>
    <SimpleGrid cols={2}>
      {articles.map((article, index) => (
        <OgpCard
          key={index}
          title={article.title}
          image={article.enclosure?.link}
          url={article.link}
        />
      ))}
    </SimpleGrid>
    </Box>
    </Center>
  );
};

//Publications/Talks
function PubsTalks(){
  return (
    <Center>
    <Box ta="center" w={{ base: 400, sm: 800, lg: 1200 }}>
    <Card withBorder shadow="sm" padding="sm" radius="md">
			<Publication/>
      <Talks_English/>
      <Talks_Japanese/>
			{/* <OSS/> */}
    </Card>
    </Box>
  </Center>
  )
}

//About
function PersonalInfo(){
	return (
	<Center>
    <Box ta="center" w={{ base: 400, sm: 800, lg: 1200 }}>
    <Card withBorder shadow="sm" padding="sm" radius="md">
      <Card.Section>
      <Image src="back.jpg" alt={"a"} h="auto"  />
      </Card.Section>
      <Avatar
        src="profile.jpg"
        size={150}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Keisuke Matsumoto
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Software Developer and Researcher
      </Text>
			<Group gap={0} className={classes.links} justify="center" wrap="nowrap">
      <IconSet/>
      </Group>
			<Sentence/>
      <Career/>
			<Publication/>
      <Talks_English/>
      <Talks_Japanese/>
			{/* <OSS/> */}
    </Card>
    </Box>
  </Center>
		)
}

function IconSet(){
  return(
    <>
    <ActionIcon component="a" href="" size="lg" color="gray" variant="subtle">
      <IconBrandTwitter style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    </ActionIcon>
    <ActionIcon size="xl" component="a" href ="https://github.com/matsumokei" color="gray" variant="subtle">
      <IconBrandGithub style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    </ActionIcon>
		<ActionIcon size="xl" component="a" href ="https://www.linkedin.com/in/keisuke-matsumoto-8a939a271/" color="gray" variant="subtle">
      <IconBrandLinkedin style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    </ActionIcon>
    {/* <ActionIcon size="xl" component="a" href ="https://elk.zone/mstdn.jp/@orangekame3" color="gray" variant="subtle">
      <IconBrandMastodon style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    </ActionIcon> */}
    <ActionIcon size="xl" component="a" href ="mailto:matsumo162570@gmail.com" color="gray" variant="subtle">
      <IconBrandGmail style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    </ActionIcon>
    <ActionIcon size="xl" component="a" href ="https://qiita.com/ichijouji" color="gray" variant="subtle">
    <img src="./public/profile.jpg" alt="Qiita Icon" style={{ width: 24, height: 24 }} />
    </ActionIcon>
</>
  )
}

function Sentence(){
	return(
		<Center>
		<Box my="xl" mx="xl" w="800">
      <Text>I am a software developer and an researcher. </Text>
			<Text>I have a keen interest in the societal implementation of quantum computing and am actively working on designing architectures that integrate it with cloud solutions.</Text>
			<Text>My preferred programming language is Go.</Text>
		</Box>
		</Center>
	)
}

const elements = [
	{ title: "【Spectroscopic estimation of the photon number for superconducting Kerr parametric oscillators", year: 2023,link:"https://iopscience.iop.org/article/10.35848/1347-4065/acc3a8/meta"},
	{ title: "Calculation of Gibbs partition function with imaginary time evolution on near-term quantum computers", year: 2022, link: "https://iopscience.iop.org/article/10.35848/1347-4065/ac5152/meta"},
];

function Publication(){
	const rows = elements.map((element) => (
    <Table.Tr key={element.title}>
			<Table.Td><a href={element.link}>{element.title}</a></Table.Td>
      <Table.Td>{element.year}</Table.Td>
    </Table.Tr>
  ));
	return (
		<Box mx="auto">
		<Title td="underline" my="xl" order={2}>Publication</Title>
		<Table ta="left" striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Title</Table.Th>
          <Table.Th>Year</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
		</Box>
	)
	}


  const pres_eng_elements = [
    { title: "Beyond Guidelines - Designing and Implementing Robust Build Pipelines", conference: "Open Source Summit Japan 2023@Ariake, Tokyo, Japan", year: 2023,link:"https://youtu.be/aLk83mxz8OM"},
    { title: "Spectroscopic method for measuring the number of photons in superconducting Kerr parametric oscillators", year: 2023, conference: "APS March Meeting 2023@Las Vegas", link: "https://ui.adsabs.harvard.edu/abs/2023APS..MARB73012M/abstract"},
    { title: "Spectroscopic method for measuring the number of photons in superconducting Kerr parametric oscillators", year: 2023, conference: "SSDM(Solid State Devices and Materials)2023@Makuhari", link: "https://ssdm.jp/2023/committees.html"},
  ];
  
  function Talks_English(){
    const rows = pres_eng_elements.map((element) => (
      <Table.Tr key={element.title}>
        <Table.Td><a href={element.link}>{element.title}</a></Table.Td>
        <Table.Td>{element.conference}</Table.Td>
        <Table.Td>{element.year}</Table.Td>
      </Table.Tr>
    ));
    return (
      <Box mx="auto">
      <Title td="underline" my="xl" order={2}>Presentation in English</Title>
      <Table ta="left" striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Conference</Table.Th>
            <Table.Th>Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      </Box>
    )
    }

    const pres_jap_elements = [
      { title: "SLSAワークショップ TA", conference: "SLSAワークショップ By OpenSSF", year: 2024, link:"https://www.linuxfoundation.jp/events/2024/10/join-us-at-the-slsa-workshop-on-november-1/"},
      { title: "OSSの依存関係に注目した脆弱性評価・対策への適用提案", conference: "ネットワーク科学研究会@同志社大学（今出川キャンパス）", year: 2023, link: "https://www.network-science-seminar.com/activities/2023/poster"},
      { title: "NISQ デバイスを用いた分配関数の計算",conference: "第 4 回量子ソフトウェア研究会@オンライン", year: 2021},
      { title: "NISQ デバイスを用いた分配関数の計算 II@オンライン", conference: "日本物理学会 2021 年秋季大会", year: 2021,},
      { title: "NISQ デバイスを用いた分配関数の計算@オンライン", conference: "『日本物理学会 第 76 回年次大会 (2021 年)", year: 2021,},
    ];
    
    function Talks_Japanese(){
      const rows = pres_jap_elements.map((element) => (
        <Table.Tr key={element.title}>
          <Table.Td><a href={element.link}>{element.title}</a></Table.Td>
          <Table.Td>{element.conference}</Table.Td>
          <Table.Td>{element.year}</Table.Td>
        </Table.Tr>
      ));
      return (
        <Box mx="auto">
        <Title td="underline" my="xl" order={2}>Presentation in Japanese</Title>
        <Table ta="left" striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Title</Table.Th>
              <Table.Th>Conference</Table.Th>
              <Table.Th>Year</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        </Box>
      )
      }
	// const osslist = [
	// 	{ title: "tftarget", description: "🎯tftarget is a CLI tool for Terraform ( plan | apply | destroy ) with target option. You can interactivity select resource to ( plan | apply | destroy ) with target option.",link:"https://github.com/future-architect/tftarget",star:231},
	// 	{ title: "paclear", description: "👾paclear is a clear command with PAC-MAN animation👾",link:"https://github.com/orangekame3/paclear",star:208},
	// 	{ title: "stree", description: "📁Directory trees of AWS S3 Bucket",link:"https://github.com/orangekame3/stree",star:118},
	// 	{ title: "ghfetch", description: "ghfetch is a CLI tool to fetch GitHub user information and show like neofetch.",link:"https://github.com/orangekame3/ghfetch",star:40},
	// ];

	// function OSS(){
	// 	const rows = osslist.map((oss) => (
	// 		<Table.Tr key={oss.title}>
	// 			<Table.Td><a href={oss.link}>{oss.title}</a></Table.Td>
	// 			<Table.Td>{oss.description}</Table.Td>
	// 			<Table.Td>{oss.star}</Table.Td>
	// 		</Table.Tr>
	// 	));
	// 	return (
	// 		<Box mx="auto">
	// 		<Title td="underline" my="xl" order={2}>OSS</Title>
	// 		<Table ta="left" striped highlightOnHover withTableBorder withColumnBorders>
	// 			<Table.Thead>
	// 				<Table.Tr>
	// 					<Table.Th>Title</Table.Th>
	// 					<Table.Th>Description</Table.Th>
	// 					<Table.Th>Star</Table.Th>
	// 				</Table.Tr>
	// 			</Table.Thead>
	// 			<Table.Tbody>{rows}</Table.Tbody>
	// 		</Table>
	// 		</Box>
	// 	)
	// 	}

function Career() {
  return (
    <>
    <Title td="underline" my="xl" order={2}>Career</Title>
    <Center my="sm">
    <Timeline active={0}>
    <Timeline.Item title="Hitachi, Ltd. R&D">
				<Text c="dimmed" size="sm">
          Researcher @Yokohama Totsuka
        </Text>
        <Text c="dimmed" size="sm">
          2023.04.01~now
        </Text>
      </Timeline.Item>
      <Timeline.Item title="National Institute of Advanced Industrial Science and Technology (AIST)">
        <Text c="dimmed" size="sm">
         Quantum Computing Researcher @Matsuzaki Team of Kawabata
        </Text>
        <Text c="dimmed" size="sm">
          2021.04.01~2023.03.31
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Tokyo University of Science">
				<Text c="dimmed" size="sm">
          Master degree Physics @Nikuni laboratory
        </Text>
        <Text c="dimmed" size="sm">
          2021.04.01~2023.03.31
        </Text>
      </Timeline.Item>
			<Timeline.Item title="Tokyo University of Science">
				<Text c="dimmed" size="sm">
          Bachelor degree @Physics
        </Text>
        <Text c="dimmed" size="sm">
          2017.04.01~2021.03.31
        </Text>
      </Timeline.Item>
    </Timeline>
    </Center>
    </>
  );
}

type HeaderSimpleProps = {
  setShowPersonalInfo: React.Dispatch<React.SetStateAction<number>>;
};

const links = [
  { link: '/', label: 'About' },
  { link: '/pubstalks', label: 'Publications/Talks' },
  { link: '/blogs', label: 'Blogs' },
  // {link:'/qr', label:'QR'},
];
export function HeaderSimple({ setShowPersonalInfo }: HeaderSimpleProps) {
	const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState('/');

  const items = links.map((link) => (
    <Button
      key={link.label}
      className={classes.link}
			style={{
				backgroundColor: active === link.link ? "#1D72FE" : "white",
				color: active === link.link ? "white" : "#1D72FE"
			}}
      onClick={() => {
        if (link.label === "About") {
          setShowPersonalInfo(1);  
					setActive(link.link);
				} else if (link.label === "Publications/Talks") {
          setShowPersonalInfo(2);  
					setActive(link.link);
        }else{
          setShowPersonalInfo(3);
          setActive(link.link)
        }
      }}
    >
      {link.label}
    </Button>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
				{opened && (
        <div className={classes.menu}>
					<Box my="15"></Box>
          {items}
        </div>
      )}
      </Container>
    </header>
  );
}

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c="dimmed" size="sm">
          Keisuke Matsumoto(@)
        </Text>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
        <IconSet/>
       </Group>
      </Container>
    </div>
  );
}

export const FutureBlogs = () => {
  return (
    <Center>
     <Box ta="center" w={{ base: 400, sm: 800, lg: 1200 }}>
    <SimpleGrid cols={2}>
      <OgpCard
      key="hoge"
      title="stree:S3バケットをtreeするCLIコマンド | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20230926a/stree-display.png"
      url="https://future-architect.github.io/articles/20230926a/"
      />
      <OgpCard
      key="hoge"
      title="Go1.21:slicesパッケージのチートシート | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20230816a/eyecatch-20230814.png"
      url="https://future-architect.github.io/articles/20230816a/"
      />
      <OgpCard
      key="hoge"
      title="tftarget:Terraformターゲットを選択的に実行するためのGo製CLIツール | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20230329a/tftarget-eyecatch.jpg"
      url="https://future-architect.github.io/articles/20230329a/"
      />
     <OgpCard
      key="hoge"
      title="CircleCIでPullRequest作成時の負荷を軽減する | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20230307a/theme.png"
      url="https://future-architect.github.io/articles/20230307a/"
      />
     <OgpCard
      key="hoge"
      title="Go 1.20 timeパッケージのアップデート | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20230127a/top.png"
      url="https://future-architect.github.io/articles/20230127a/"
      />
     <OgpCard
      key="hoge"
      title="GoでADコンバータ読み出し～観葉植物監視bot構築～ | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20220905a/eyecatch.png"
      url="https://future-architect.github.io/articles/20220905a/"
      />
      <OgpCard
      key="hoge"
      title="Go1.19で追加されたAppend系メソッド | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20220803a/eyecatch.png"
      url="https://future-architect.github.io/articles/20220803a/"
      />
     <OgpCard
      key="hoge"
      title="TinkerBoard 2S:AWS Greengrass v1をインストールする | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20220407a/tinker.png"
      url="https://future-architect.github.io/articles/20220407a/"
      />
      <OgpCard
      key="hoge"
      title="Go1.18集中連載:新たに追加されたnet/netipとは | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20220215a/netip.png"
      url="https://future-architect.github.io/articles/20220215a/"
      />
     <OgpCard
      key="hoge"
      title="Step Functionsの動的並列処理をローカルで実行する | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20220204a/eyecatch_stepfunctions.png"
      url="https://future-architect.github.io/articles/20220204a/"
      />
     <OgpCard
      key="hoge"
      title="Pipenv+LocalStackで作るLambda開発環境 | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20220202a/eyecatch.png"
      url="https://future-architect.github.io/articles/20220202a/"
      />
     <OgpCard
      key="hoge"
      title="DatoCMSでポートフォリオをサクッとつくる | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20220119a/color_full_logo.png"
      url="https://future-architect.github.io/articles/20220119a/"
      />
     <OgpCard
      key="hoge"
      title="Qiita Advent Calendar 2021 に参加します | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20211129a/pexels-torsten-dettlaff-195030.jpg"
      url="https://future-architect.github.io/articles/20211129a/"
      />
      <OgpCard
      key="hoge"
      title="IBM Quantum Challenge Fall 2021参加レポート | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20211115b/ibm-quantum-challenge-fall-2021-advanced.png"
      url="https://future-architect.github.io/articles/20211115b/"
      />
      <OgpCard
      key="hoge"
      title="PythonでMQTT!! ～Alexaでコマンドを送信する～ | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20211001a/volodymyr-hryshchenko-V5vqWC9gyEU-unsplash.jpg"
      url="https://future-architect.github.io/articles/20211001a/"
      />
      <OgpCard
      key="hoge"
      title="GoでMQTT!!:～温湿度マイスターbotの作成～(後編) | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20210930a/サムネイル2.png"
      url="https://future-architect.github.io/articles/20210930a/"
      />
      <OgpCard
      key="hoge"
      title="GoでMQTT!!:～温湿度マイスターbotの作成～(前編) | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20210929a/サムネイル1.png"
      url="https://future-architect.github.io/articles/20210929a/"
      />
      <OgpCard
      key="hoge"
      title="Sesame3にICカード施錠/解錠機能を実装してみた with Go & Python | フューチャー技術ブログ"
      image="https://future-architect.github.io/images/20210824a/サムネ.png"
      url="https://future-architect.github.io/articles/20210824a/"
      />
    </SimpleGrid>
    </Box>
    </Center>
  );
};
