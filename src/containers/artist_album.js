import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAlbum } from '../actions/index';

class ArtistAlbum extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchAlbum(this.props.params.name);
  }

  renderAlbum(albumData) {
    return albumData.topalbums.album.map((album) => {
      return (
          <div className="row text-center" style={{display: 'flex'}}>
            <div className="col-md-3 col-sm-6">
              <div className="thumbnail">
                <div className="caption">
                  <h6><span>{album.name}</span><img src={album.image[2]['#text']} /></h6>
                </div>
              </div>
            </div>
          </div>
      );
    });
  }

  render() {
    const { album } = this.props;

    if (!album) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{this.props.params.name} Albums</h1>
        {this.props.album.map(this.renderAlbum)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAlbum }, dispatch);
}

function mapStateToProps({ album }) {
  return { album };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistAlbum);
