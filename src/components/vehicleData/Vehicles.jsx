import React, { useState } from 'react';
import './Vehicles.style.css'; // Add your styling for Vehicles
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

const Vehicles = ({ data }) => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleDisplayMode = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  return (
    <div className={`vehicle-data ${isGrid ? 'grid-mode' : 'list-mode'}`}>
      <div className="heading">
        <p>Vehicles</p>
        <div className="toggle-btn" onClick={toggleDisplayMode}>
          <img src={isGrid ? grid : hamburger} alt="" />
          <p>{isGrid ? 'Grid' : 'List'}</p>
        </div>
      </div>
      <div className="vehicle-data-items">
        {isGrid ? (
          data.map((vehicle, index) => (
            <div key={index} className="vehicle-item-grid">
              <div className="vehicle-img">
                <img src="https://via.placeholder.com/647x218" alt="Star Wars" />
              </div>
              <div className="vehicle-info">
                <h3>{vehicle.name}</h3>
                <p>btn</p>
              </div>
            </div>
          ))
        ) : (
          <div className="vehicle-item-list">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Model</Th>
                    <Th>Top Speed</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((vehicle, index) => (
                    <Tr key={index}>
                      <Td>{vehicle.name}</Td>
                      <Td>{vehicle.model}</Td>
                      <Td>{vehicle.max_atmosphering_speed}</Td>
                      {/* Add other vehicle details */}
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

export default Vehicles;
