import React, { Component } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const wrapperStyles = {
  width: "auto",
  margin: "0 auto",
  background:"#fff",
  padding:"none",
  marginTop: "5vh"
};

class WorldMap extends Component {
  state = {
    highlighted: "",
    hovered: false
  };
  handleMove = geo => {
    if (this.state.hovered) return;
    this.setState({
      hovered: true,
      highlighted: geo.properties.CONTINENT
    });
  };
  handleLeave = () => {
    this.setState({
      highlighted: "",
      hovered: false
    });
  };
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 100,
          }}
          style={{
            display: "block",
            backgroundColor: "#E5E5E5",
            borderRadius: "8px",
            border: "2px solid #ddd",
            margin: "0 auto",
            width: "100%",
          }}
        >
            <Geographies
              geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json"
              
            >
              {(geographies, projection) => {
                return geographies.geographies.map((geography, i) => (
                    <Geography
                    key={i}
                    cacheId={geography.properties.ISO_A3 + i}
                    geography={geography}
                    projection={projection}
                    onMouseMove={() => {this.handleMove(geography);}}
                    onMouseLeave={() => {this.handleLeave()}}
                    style={{
                      default: {
                        fill: "#fff",
                        stroke: "#8B8B8B",
                        strokeWidth: 0.75,
                        outline: "none",
                        transition: "all 250ms"
                      },
                      hover: {
                        fill: "#FDE7E7",
                        cursor: "pointer",
                        stroke: "#FD0101",
                        strokeWidth: 1,
                        outline: "none",
                        transition: "all 250ms"
                      },
                      pressed: {
                        fill: "#FD0101",
                        stroke: "#FD0101",
                        strokeWidth: 0.75,
                        outline: "none",
                        transition: "all 250ms"
                      }
                    }}
                  />))
                }
              }
            </Geographies>
        </ComposableMap>
      </div>
    );
  }
}

export default WorldMap;
