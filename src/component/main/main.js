import {useEffect,useState} from "react"
import "./main.css"

export const MainComponent = () => {
    const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("https://datasets-server.huggingface.co/rows?dataset=wykonos%2Fmovies&config=wykonos--movies&split=train&offset=0&limit=100")
      .then(response => {
        if (!response.ok) {
          throw new Error('Data is undefined');
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData.rows);
        setValue(responseData.rows);
      })
  }, []);

  const displayedCards = value.slice(0,20);

  return (
    <>
      <div className="main">
        {displayedCards.map(item => (
          // <div key={item.row.id}>{item.row.backdrop_path}</div>
          <div className="card" key={item.row_idx}>
            <a href="#"><img className="card_img" alt={item.row.genres} src={`https://image.tmdb.org/t/p/original${item.row.poster_path}`}/></a>
            <p className="card_title">{item.row.title}</p>
            <p>{item.row.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
}

