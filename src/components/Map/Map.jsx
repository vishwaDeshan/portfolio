import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-80.0, -20.0, 0],
        center: [-5, -3],
        scale: 750
      }}
      style={{width:"100%", height:"100%"}}
    >
        <Geographies
          geography="/features.json"
          fill="#040C18"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[80.6350, 7.2906]} // latitude and longitude for Kandy, Sri Lanka
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
            {"Kandy, Sri Lanka"}
          </text>
        </Annotation>
    </ComposableMap>
  );
};

export default Map;
