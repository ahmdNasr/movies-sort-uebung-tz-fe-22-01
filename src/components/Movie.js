const Movie = ({ title, year, director, duration, genre, rate }) => {
  return (
    <div style={{ border: "1px solid grey", margin: 20, borderRadius: 6 }}>
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{director}</p>
      <p>{duration}</p>
      <ul>
        {genre.map((genreElement, index) => (
          <li key={index}>{genreElement}</li>
        ))}
      </ul>
      <p>{rate}</p>
    </div>
  );
};

export default Movie;
