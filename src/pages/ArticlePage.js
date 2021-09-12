import React from  'react';
import articleContent from './article-content'

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articleContent.find(article => article.name === name );

	if ( !article ) return <h1>Article {name} doesn't exist</h1>
	const articleTitle = article.title;

	return(
		<React.Fragment>
		<h1>Article Page {articleTitle}</h1>
		{
			article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))
		}
		</React.Fragment>
		);
	}

export default ArticlePage;

