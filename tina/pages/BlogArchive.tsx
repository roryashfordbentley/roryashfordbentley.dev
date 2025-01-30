import { tinaField, useTina } from "tinacms/dist/react";
import type { HomepageQuery, HomepageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Blocks } from "@blocks/_BlocksLoader";

type Props = {
	variables: HomepageQueryVariables;
	data: HomepageQuery;
	query: string;
};

const HomePage = (props: Props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	const homepage = data.homepage;

	return <Blocks {...homepage} />;
};

export default HomePage;
