import React, { useState } from 'react';
import './PlanetData.style.css'; // Add your styling for PlanetData
import hamburger from '../../assets/icons/hamburger.png';
import grid from '../../assets/icons/grid.png';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const PlanetData = ({ data }) => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleDisplayMode = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  return (
    <div className={`planet-data ${isGrid ? 'grid-mode' : 'list-mode'}`}>
      <div className="heading">
        <p>Planets</p>
        <div className="toggle-btn" onClick={toggleDisplayMode}>
          <img src={isGrid ? grid : hamburger} alt="" />
          <p>{isGrid ? 'Grid' : 'List'}</p>
        </div>
      </div>
      <div className="planet-data-items">
        {isGrid ? (
          data.map((planet, index) => (
            <div key={index} className="planet-item-grid">
               <div className="planet-img">
                  <img src="https://via.placeholder.com/647x218" alt="Star Wars" />
                </div>
                <div className="planet-info">
                  <h3>{planet.name}</h3>
                  <p>btn</p>
                </div>
            </div>
          ))
        ) : (
          <div className="planet-item-list">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Climate</Th>
                    <Th>Gravity</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((planet, index) => (
                    <Tr key={index}>
                      <Td>{planet.name}</Td>
                      <Td>{planet.climate}</Td>
                      <Td>{planet.gravity}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanetData;
