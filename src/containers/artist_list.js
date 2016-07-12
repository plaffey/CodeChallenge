import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class ArtistList extends Component {

  renderArtist(artistData) {
    return artistData.results.artistmatches.artist.map((artist) => {
      return (
          <div className="row text-center" style={{display: 'flex'}}>
            <div className="col-md-3 col-sm-6">
              <div className="thumbnail">
                <Link to={"artist/" + artist.name}><img src={artist.image[2]['#text']} /> </Link>
                <div className="caption">
                  <h4>{artist.name}</h4>
                </div>
              </div>
            </div>
          </div>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.artist.map(this.renderArtist)}
        </ul>
      </div>
    );
  }
}


function mapStateToProps({ artist }) {
  return { artist };
}

export default connect(mapStateToProps)(ArtistList);
