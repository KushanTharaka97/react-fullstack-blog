import React from  'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticlesList';


const ArticleListPage = () => (
	<React.Fragment>
	<h1>Article List</h1>
	<p>
		Elit magna consequat derby day chantilly anim bourne hall. Salts downs horses. Stables anim oaks epsom salts. 
	</p>
	<ArticleList articles={articleContent} />
	</React.Fragment>
	);

export default ArticleListPage;

