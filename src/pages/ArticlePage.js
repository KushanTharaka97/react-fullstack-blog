import React from  'react';
import articleContent from './article-content'
import ArticleList from '../components/ArticlesList';
import NotFoundPage from '../pages/NotFoundPage';

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articleContent.find(article => article.name === name );


const otherArticles = articleContent.filter( article => article.name != {name})
	if ( !article ) return <NotFoundPage />
	const articleTitle = article.title;

	return(
		<React.Fragment>
		<h1>Article Page {articleTitle}</h1>
		{
			article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))
		}
		<h3> Othere Articles</h3>
		<ArticleList articles={otherArticles} />
		</React.Fragment>
		);
	}

export default ArticlePage;

