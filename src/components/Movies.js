import React from "react";
import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import ReactPaginate from "react-paginate";
import { List } from "rc-field-form";

const Movies = ({ movies, pageNumber, setPageNumber }) => {
  const moviesPerPage = 10;
  const pagesVisited = pageNumber * moviesPerPage;

  const displayMovies = movies
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => {
      return (
        <section key={movie.id} className="cards">
          <Card
            style={{ width: 240 }}
            title={movie.title}
            cover={<img src={movie.posterurl} alt="" />}
          >
            {" "}
            <Meta title={movie.plot} description={movie.genre} />
          </Card>
        </section>
      );
    });
  const pageCount = Math.ceil(movies.length / moviesPerPage);

  const changePage = ({ selected }) => {
    console.log(selected);
    setPageNumber(selected);
  };
  return (
    <div>
      {/* 
      {movies.map((movie) => (
        <Card
          key={movie.id}
          style={{ width: 500 }}
          title={movie.title}
          cover={<img src={movie.posterurl} alt="" />}
        >
          {" "}
          <Meta title={movie.plot} description={movie.genre} />
        </Card>
      ))}
      */}
      {displayMovies}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        defaultCurrent={1}
        onPageChange={changePage}
        pageCount={pageCount}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Movies;
