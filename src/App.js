import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

// component는 html을 return 하는 함수
// component에 정보를 보낼 수 있다.(props)
// props를 인수로 or {인자}를 인수로

// {MovieILike.map(dish => <Movie name={dish.name}/>)}

// state가 필요하면 class component로
// state가 필요하지 않으면 function component

class App extends React.Component{
  // state는 변할 수 있다.
  // this.setState(current => ({count:current.count+1}));
  state = {
    isLoading: true,
    movies: []
  };

  // 비동기를 위한 방법
  // await 뒤에 있는 command가 완료될 때까지 기다려야한다.
  // object.data.data.movies => {data:{data:{movies}}}
  _getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false})
  }

  componentDidMount(){
    this._getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                key={movie.id}
              />
            ))}
          </div>
        )}
          
      </section>
    )
  }
}

export default App;

/*
function Movie({name, image, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}/>
    </div>
   );
}

const MovieILike = [{
  id: 1,
  name: "Avengers",
  image: "https://cdn.cnn.com/cnnnext/dam/assets/190403144228-avengers-endgame-thumb-imax-poster-exlarge-169.jpg",
  rating: 4.9
}]

Movie.prototype = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

*/

/*
function App() {
  return (
    <div>
      {MovieILike.map(movie => (
        <Movie key={movie.id} name={movie.name} image={movie.image} rating={movie.rating} />
      ))}
    </div>
  );
}
*/

