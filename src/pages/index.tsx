import Head from "next/head";
import config from "@content/config/config.json";
import PageLayout from "@layouts/PageLayout";
import client from "@tina/__generated__/client";
import { BlocksLoader } from "@blocks/_BlocksLoader";

const data = await client.queries.homepage({ relativePath: "home.mdx" });

const HomePage = () => {
	return (
		<PageLayout>
			<Head>
				<title>{`Blog - ${config.siteTitle}`}</title>
			</Head>
			<BlocksLoader {...data} />
		</PageLayout>
	);
};

export default HomePage;
