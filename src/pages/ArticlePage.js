import React from "react";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

// importamos el contenido de muestra que creamos en JSON
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  //cargar el contenido de article-content iterando en los names que obtenemos de los url parametrers
  const article = articleContent.find((article) => article.name === name);
  //finalmente convertimos esto en JSX cambiamos el h1

  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h2>Otros Articulos</h2>
      <ArticlesList articles={otherArticles} />
    </>
  );
};
export default ArticlePage;
