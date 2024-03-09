function Card({ movies }) {
  return (
    <>
      <div className="card">
        <img src={movies.Poster} alt="" />
        <p>{movies.Type}</p>
        <h2>{movies.Title}</h2>
        <h3>{movies.Year}</h3>
      </div>
    </>
  );
}

export default Card;
