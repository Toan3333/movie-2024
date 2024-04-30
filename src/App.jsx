import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MoviesPage from "./components/pages/MoviesPage";
import Main from "./components/layout/Main";
import MovieDetailPage from "./components/pages/MovieDetailPage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
        {/* Dẫn đến trang chi tiết */}
        <Route path="/movie-detail/:movieId" element={<MovieDetailPage></MovieDetailPage>}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
