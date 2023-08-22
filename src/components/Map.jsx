import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [-5, -3],
                scale: 1100,
            }}
            style={{ width: '100%', height: '100%' }}
        >
            <Geographies
                geography="/features.json"
                fill="#46008C"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
        </ComposableMap>
    )
}

export default Map
