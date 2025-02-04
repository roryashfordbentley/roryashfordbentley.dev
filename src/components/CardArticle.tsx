import React from "react";

import "@components/CardArticle.css";

import dateFormatter from "@scripts/date-formatter.ts";

export const CardArticle = ({ title, description, date, url }) => {
	return (
		<div className="card-article">
			<h2 className="card-article__title">
				<a className="card-article__link" href={url}>
					{title}
				</a>
			</h2>

			<div className="card-article__description">{description}</div>

			<div className="card-article__meta">
				<div className="card-article__meta-item">
					<h3 className="card-article__subtitle">Posted:</h3>
					<time
						className="card-article__date"
						dateTime={dateFormatter(date).machineReadableDateString}
					>
						{dateFormatter(date).readableDateString}
					</time>
				</div>
				<div className="card-article__meta-item">
					<div className="card-article__tags">
						<h3 className="card-article__subtitle">Tags:</h3>
						<span className="card-article__tag">WordPress</span>
					</div>
				</div>
			</div>
		</div>
	);
};
