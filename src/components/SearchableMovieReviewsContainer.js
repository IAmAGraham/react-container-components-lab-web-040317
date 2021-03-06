import React, {Component} from 'react';
import MovieReviews from './MovieReviews.js';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: []
    };
  }

  componentWillMount(){
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results}))
  }

  render(){
    // debugger
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews = {this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
