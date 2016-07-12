import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtist } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchArtist(this.state.term);
    this.setState({ term: '' });
    this.context.router.push('/artist');
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
         placeholder="Search for an artist"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArtist }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

/*function mapStateToProps(state) {
  return { artist: state.artist.all };
}

export default connect(mapStateToProps, { fetchArtist })(SearchBar);
*/
