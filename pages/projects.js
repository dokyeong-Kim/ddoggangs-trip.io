import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "./config";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>또갱의 몽골여행</title>
          <meta name="description" content="몽골에서 살아남기..." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          원래 이 부분이 노션에서 불러온 저의 생생한 후기들이 표시되어야하는 페이지인데...<br></br><br></br>
          오류 해결 실패로 일단 텍스트로 대체합니다...<br></br><br></br>
          제출은 해야하니깐...
          죄송합니다ㅜㅜ
        </h1>

      </div>
    </Layout>
  );
}

/*export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0].plain_text
  );

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects: projects || null },
  };
}*/
