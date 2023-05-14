import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}
      style={{width:"100%", height:"100%"}}
    >
      <ZoomableGroup>
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
          subject={[2.3522, 48.8566]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
            {"Colombo"}
          </text>
        </Annotation>
        <Annotation
          subject={[21.01178, 52.22977]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
            {"Kandy"}
          </text>
        </Annotation>
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
            {"Kandy"}
          </text>
        </Annotation>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
