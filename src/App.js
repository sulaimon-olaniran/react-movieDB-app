import React from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import NavBar from './components/Navbar/NavBar';
import SearchContextProvider from './components/contexts/SearchContext';
import PopularPage from './components/PopularPage/PopularPage';
import UpcomngPage from './components/UpcomingPage/UpcomingPage';
import { Switch, Route } from 'react-router-dom'
import MovieDetails from './components/ReUsable/MovieDetails';
import Footer from './components/Footer/Footer';
import Menu from './Menu';
import SearchMovies from './components/SearchPage/SearchMovies';
import SearchMovieList from './components/SearchPage/SearchMovieList';


function App() {
  return (
    <SearchContextProvider>
      
        <div className="App">
          <Menu />
          <nav className="navigation">
            <NavBar />
          </nav>
          <main className="main-container">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/search" exact component={SearchMovies} />
              <Route exact path="/search/:movie/:page" component={SearchMovieList} />
              <Route exact path="/search/:movie/:page/id/:id" component={MovieDetails} />
              <Route exact path="/popular/:page"  component={PopularPage} /> 
              <Route path="/popular/id/:id" exact component={MovieDetails} />
              <Route exact path="/upcoming/:page" component={UpcomngPage} />
              <Route path="/upcoming/id/:id" component={MovieDetails} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      
    </SearchContextProvider>
  );
}
export default App;









/*
//557 as movie id
https://api.themoviedb.org/3/movie/557?api_key=644c44d2acac97a0ba2dba1edacf5a00


https://api.themoviedb.org/3/movie/upcoming?api_key=<>&language=en-US&page=1
https://api.themoviedb.org/3/search/person?api_key=###&query=Brad+Pitt
https://api.themoviedb.org/3/search/person?api_key=#####&language=en-US&query=Chris&page=1&include_adult=false
https://api.themoviedb.org/3/discover/movie?api_key=644c44d2acac97a0ba2dba1edacf5a00&region=US&sort_by=popularity.desc&release_date.gte=2019-10-30&release_date.lte=2020-01-28&with_release_type=4
https://api.themoviedb.org/3/movie/19940/credits?api_key=644c44d2acac97a0ba2dba1edacf5a00
https://api.themoviedb.org/3/movie/upcoming?api_key=644c44d2acac97a0ba2dba1edacf5a00&region=us

*/
