import React from "react";
import { useState } from "react";
import { Header } from "../../components/header/header";
import "./mialqui.css";
import { ArticleList, ButtonList } from "../../components/filters";
import data from "../../data/data";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";

export const Main = () => {
  const allCategories = [
    "Todo",
    ...new Set(data.map((article) => article.category)),
  ];

  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(data);

  const filterCategory = (category) => {
    if (category === "Todo") {
      setArticles(data);
      return;
    }
    const filteredData = data.filter(
      (article) => article.category === category
    );
    setArticles(filteredData);
  };

  return (
    <>
      {/* header */}
      <Header />

      <main className="px-3">
        <div className="textos-hero lead ">
          {/* width="40%" height="40%" */}
          <h1 className="tex-aling">
            <span className="tex-1 tex-color">Tu nuevo Hogar</span>
            <span className="tex-1 tex-color">te esta Esperando</span>
            <img src="/img/background-image.webp" alt="" className=" imagen " />
          </h1>
          <span>
            <p className="parrafo tex-color">
              Tenemos la mejor selección de alquileres para ti.
            </p>
          </span>
        </div>
        <div className="botones-alineacion">
          <Link
            to="/AlquileresList"
            className="link-buton"
            href="/Public/Alquileres/alquilar.html"
          >
            <button
              type="button"
              className="btn boton-color  iRCgEU"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
            >
              Alquilar
            </button>
          </Link>
          <Link
            to="/public"
            className="link-buton"
            href="/Public/publicar/publicar.html"
          >
            <button
              type="button"
              className="btn boton-color-2  iRCgEU-2"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
              href="/Public/publicar/publicar.html"
            >
              Publicar
            </button>
          </Link>
          <a href="#abajo">
            <button
              type="button"
              className="btn  boton-popular gDqqEM"
              data-toggle="button  "
              aria-pressed="false"
              autoComplete="off "
            >
              Populares
            </button>{" "}
          </a>

          <div className="fondo-seccion"></div>
        </div>
        <div className="filtroFondo">
          {/* filtros */}
          <div className="title">
            <h1>
              Popu<span>lares</span>
            </h1>
            {/* Insertar logo */}
            {/* <img src='src/img/hogar.png'/> */}
          </div>

          <ButtonList categories={categories} filterCategory={filterCategory} />

          <ArticleList articles={articles} />
        </div>
      </main>

      <Footer />
    </>
  );
};
