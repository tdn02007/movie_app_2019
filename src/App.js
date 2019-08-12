import React from 'react';
import PropTypes from "prop-types";

// component는 html을 return 하는 함수
// component에 정보를 보낼 수 있다.(props)
// props를 인수로 or {인자}를 인수로

// {MovieILike.map(dish => <Movie name={dish.name}/>)}

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

class App extends React.Component{
  // state는 변할 수 있다.
  // this.setState(current => ({count:current.count+1}));
  state = {
    isLoading: true
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }
  render(){
    const {isLoading} = this.state;
    return (
      <div>{isLoading ? "Loading..." : "We are ready"}</div>
    )
  }
}

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

export default App;
