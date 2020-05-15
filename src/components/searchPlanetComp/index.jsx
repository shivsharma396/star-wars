import React, { Component } from "react";
import PlanetListComp from "../planetListComp";
import PlanetActions from "../../actions/planetActions";
import { connect } from "react-redux";
import "./style.scss";

class SearchPlanetComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      planetList: [],
      planetDetail: null
    };
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value }, this.searchPlanet);
  };

  searchPlanet = () => {
    const { searchPlanet } = this.props;
    const { searchText, planetList, planetDetail } = this.state;
    if (searchText.length > 0) {
      searchPlanet(searchText);
    } else if (planetList.length > 0) {
      this.setState({ planetList: [], planetDetail: null });
    }
    if (planetDetail) {
      this.setState({ planetDetail: null });
    }
  };

  onPlanetClickCallBack = planetDetail => {
    this.setState({ planetDetail: planetDetail });
  };

  displayPlanetDetail = planetDetail => {
    return planetDetail ? (
      <div className='planet-detail-wrapper'>
        <div>
          <label>Name:</label>
          <span>{planetDetail.name}</span>
        </div>

        <div>
          <label>Population:</label>
          <span>{planetDetail.population}</span>
        </div>
        <div>
          <label>Climate:</label>
          <span>{planetDetail.climate}</span>
        </div>
        <div>
          <label>Terrain:</label>
          <span>{planetDetail.terrain}</span>
        </div>
        <div>
          <label>Diameter:</label>
          <span>{planetDetail.diameter}</span>
        </div>
        <div>
          <label>Rotation Period:</label>
          <span>{planetDetail.rotation_period}</span>
        </div>
      </div>
    ) : null;
  };

  render() {
    const { searchText, planetDetail } = this.state;
    const { planetList } = this.props;
    return (
      <div className='wrapper'>
        <div className='search-wrapper'>
          <input
            placeholder='Search Planet'
            className='form-control form-control-md'
            value={searchText}
            onChange={this.onSearchChange}
          />
        </div>
        <div className='planet-wrapper'>
          <PlanetListComp planetList={planetList} onPlanetClickCallBack={this.onPlanetClickCallBack} />
        </div>
        {this.displayPlanetDetail(planetDetail)}
      </div>
    );
  }
}

const mapStateToProps = ({ PlanetReducers }) => {
  return {
    planetList: PlanetReducers.planetList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPlanet: payload => dispatch(PlanetActions.searchPlanet(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanetComp);
