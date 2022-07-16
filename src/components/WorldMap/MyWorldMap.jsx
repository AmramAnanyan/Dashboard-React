import React from 'react'
import WorldMap from 'react-svg-worldmap';
import { StyledWorldMap } from './styled';
import { useSelector } from "react-redux";
import { getWorldData } from '../../redux/features/worldMapSlice';

function MyWorldMap() {
  const data = useSelector(getWorldData);
  return (
    <StyledWorldMap>
      <WorldMap
       color="#f3ba2f"
       title="Geographic Data"
       size="md"
        data={data}
        backgroundColor=" #262828"
        borderColor='#fff'
        tooltipBgColor= "#2a71d0"
        tooltipTextColor='#fff'
              />
    </StyledWorldMap>
  )
}

export { MyWorldMap };