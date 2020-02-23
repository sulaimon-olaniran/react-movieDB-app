import React from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import NavBar from './components/NavBar';
import SearchContextProvider from './components/contexts/SearchContext';


function App() {
  return (

    <div className="App">
      <nav className="navigation">
      <NavBar />
      </nav>

      <main className="main-container">
      <SearchContextProvider>
      <Homepage />
      </SearchContextProvider>
      </main>
      
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
export default App;









/*
https://api.themoviedb.org/3/movie/upcoming?api_key=<>&language=en-US&page=1
https://api.themoviedb.org/3/search/person?api_key=###&query=Brad+Pitt
https://api.themoviedb.org/3/search/person?api_key=#####&language=en-US&query=Chris&page=1&include_adult=false
https://api.themoviedb.org/3/discover/movie?api_key=644c44d2acac97a0ba2dba1edacf5a00&region=US&sort_by=popularity.desc&release_date.gte=2019-10-30&release_date.lte=2020-01-28&with_release_type=4
https://api.themoviedb.org/3/movie/19940/credits?api_key=644c44d2acac97a0ba2dba1edacf5a00




import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class App extends React.Component {
  state = {
    items: Array.from({ length: 20 })
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  render() {
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}


export default App;*/
