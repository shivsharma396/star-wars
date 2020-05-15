import React, { Component, Fragment } from "react";
import "./style.scss";

class PlanetListComp extends Component {
  planetListRow = planetList => {
    if (planetList.length === 0) {
      return <div>No Data Found</div>;
    }
    const totalPopulation = planetList.reduce((total, planet) => {
      return total + (isNaN(planet.population) ? 0 : +planet.population);
    }, 0);

    return planetList.map(planetDetail => {
      const planetSize = this.planetSize(totalPopulation, planetDetail.population);
      return (
        <div
          key={planetDetail.edited}
          className='planet-card'
          style={{ width: `${planetSize}px`, height: `${planetSize}px` }}
          onClick={this.onClickPlanet.bind(null, planetDetail)}
        >
          {planetDetail.name}
        </div>
      );
    });
  };
  

  planetSize = (totalPopulation, population) => {
    return 200 + (isNaN(population) ? 0 : population / totalPopulation) * 100;
  };

  onClickPlanet = planetDetail => {
    const { onPlanetClickCallBack } = this.props;
    onPlanetClickCallBack(planetDetail);
  };

  render() {
    const { planetList = [] } = this.props;
    return (
      <Fragment>
        <div className='container'>{this.planetListRow(planetList)}</div>
      </Fragment>
    );
  }
}

export default PlanetListComp;
