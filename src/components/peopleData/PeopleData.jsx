import React, { useState } from 'react';
import './PeopleData.style.css'; // Add your styling for PeopleData
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

const PeopleData = ({ data }) => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleDisplayMode = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  return (
    <div className={`people-data ${isGrid ? 'grid-mode' : 'list-mode'}`}>
      <div className="heading">
        <p>People</p>
        <div className="toggle-btn" onClick={toggleDisplayMode}>
          <img src={isGrid ? grid : hamburger} alt="" />
          <p>{isGrid ? 'Grid' : 'List'}</p>
        </div>
      </div>
      <div className="people-data-items">
        {isGrid ? (
          data.map((person, index) => (
            <div key={index} className="person-item-grid">
              <div key={index} className="film-item-grid">
                <div className="film-img">
                  <img src="https://via.placeholder.com/647x218" alt="Star Wars" />
                </div>
                <div className="film-info">
                  <h3>{person.name}</h3>
                  <p>btn</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="person-item-list">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Birthdate</Th>
                    <Th>Species</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((person, index) => (
                    <Tr key={index}>
                      <Td>{person.name}</Td>
                      <Td>{person.birthdate}</Td>
                      <Td>{person.species}</Td>
                      {/* Add other person details */}
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

export default PeopleData;
