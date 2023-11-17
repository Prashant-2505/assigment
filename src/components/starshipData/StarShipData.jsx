import React, { useState } from 'react';
import './StarShipData.style.css'; 
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

const StarShipData = ({ data }) => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleDisplayMode = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  return (
    <div className={`starship-data ${isGrid ? 'grid-mode' : 'list-mode'}`}>
      <div className="heading">
        <p>Starships</p>
        <div className="toggle-btn" onClick={toggleDisplayMode}>
          <img src={isGrid ? grid : hamburger} alt="" />
          <p>{isGrid ? 'Grid' : 'List'}</p>
        </div>
      </div>
      <div className="starship-data-items">
        {isGrid ? (
          data.map((starship, index) => (
            <div key={index} className="starship-item-grid">
              <div className="startship-img">
                  <img src="https://via.placeholder.com/647x218" alt="Star Wars" />
                </div>
              <div className="starship-info">
              <h3>{starship.name}</h3>
              <p>btn</p>
              </div>
            </div>
          ))
        ) : (
          <div className="starship-item-list">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Model</Th>
                    <Th>Hyperdrive Rating</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((starship, index) => (
                    <Tr key={index}>
                      <Td>{starship.name}</Td>
                      <Td>{starship.model}</Td>
                      <Td>{starship.hyperdriveRating}</Td>
                      {/* Add other starship details */}
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

export default StarShipData;
