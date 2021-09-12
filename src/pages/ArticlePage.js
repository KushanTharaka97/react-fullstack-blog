import React from  'react';
import articleContent from './article-content'

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articleContent.find(article => article.name === name );
	const articleTitle = article.title;

	if(article)
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

