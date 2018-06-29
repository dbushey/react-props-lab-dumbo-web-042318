import React, { Component } from 'react';

class Spaceship extends Component {
  render() {

    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.speed}</h1>
        <h1>{this.props.hasRockets ? "Yes" : "No"}</h1>
        <ul>
        {this.props.colors.map((color,index) =>
          <li key={index}>{color}</li>)}
        </ul>
      </div>
    )
  }
}

// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])

// Spaceship.propTypes = {
//   name: PropTypes.string,
//   speed: PropTypes.number,
//   hasRockets: PropTypes.boolean,
//   colors: PropTypes.array
// };


// Specifies the default values for props:
Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
