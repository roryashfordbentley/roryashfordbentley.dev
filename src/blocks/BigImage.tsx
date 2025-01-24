const BigImage = ({ data, parentField = "" }) => {
	console.log(data);
	return (
		<figure className="big-image">
			<img src={data.image} alt={data.altText} />
		</figure>
	);
};

export default BigImage;
