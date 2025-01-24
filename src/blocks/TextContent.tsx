import { TinaMarkdown } from "tinacms/dist/rich-text";
const TextContent = ({ data, parentField = "" }) => {
	console.log(data);
	return <TinaMarkdown content={data.text} />;
};

export default TextContent;
