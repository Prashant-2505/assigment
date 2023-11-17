import React, { useState } from 'react';
import './SpeciesData.style.css'; // Add your styling for SpeciesData
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

const SpeciesData = ({ data }) => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleDisplayMode = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  return (
    <div className={`species-data ${isGrid ? 'grid-mode' : 'list-mode'}`}>
      <div className="heading">
        <p>Species</p>
        <div className="toggle-btn" onClick={toggleDisplayMode}>
          <img src={isGrid ? grid : hamburger} alt="" />
          <p>{isGrid ? 'Grid' : 'List'}</p>
        </div>
      </div>
      <div className="species-data-items">
        {isGrid ? (
          data.map((species, index) => (
            <div key={index} className="species-item-grid">
              <div className="species-img">
                  <img src="https://via.placeholder.com/647x218" alt="Star Wars" />
                </div>
            <div className="species-info">
            <h3>{species.name}</h3>
              <p>btn</p>
            </div>
            </div>
          ))
        ) : (
          <div className="species-item-list">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Homeworld</Th>
                    <Th>Lifespan</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((species, index) => (
                    <Tr key={index}>
                      <Td>{species.name}</Td>
                      <Td>{species.homeworld}</Td>
                      <Td>{species.lifeSpan}</Td>
                      {/* Add other species details */}
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

export default SpeciesData;
