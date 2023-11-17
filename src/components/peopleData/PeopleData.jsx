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
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
} from '@chakra-ui/react';
import { PiFilmReel } from 'react-icons/pi';
import { CiMenuKebab } from 'react-icons/ci';
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineFileDownload, MdDriveFileRenameOutline, MdFileCopy } from "react-icons/md";
import { CiShare2, CiLock } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from '../misc/Modal'

const PeopleData = ({ data }) => {
  const [isGrid, setIsGrid] = useState(true);
  const [selectedPeople, setSelectedPeople] = useState(null);


  const toggleDisplayMode = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  const toggleDropdown = (people) => {
    setShowDropdown(!showDropdown);
    setSelectedFilm(people);
  };
  return (
    <div className={`people-data ${isGrid ? 'grid-mode' : 'list-mode'}`}>      <div className="heading">
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
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <PiFilmReel />
                    {person.name}
                  </p>


                  <Menu>
                    <MenuButton as={Button} >
                      <CiMenuKebab
                        className="menu-icon"
                        onClick={() => toggleDropdown(film)}
                      />
                    </MenuButton>
                    <MenuList style={{ color: "black", background: "white" }}>
                      <MenuItem className='dropDown-item'><IoEyeOutline /> View</MenuItem>
                      <MenuItem className='dropDown-item'><MdOutlineFileDownload />Download</MenuItem>
                      <MenuItem className='dropDown-item'><MdDriveFileRenameOutline />Rename</MenuItem>
                      <MenuItem className='dropDown-item'> <CiShare2 />Share link</MenuItem>
                      <MenuItem className='dropDown-item'><MdFileCopy />Move</MenuItem>
                      <MenuItem className='dropDown-item'><CiLock />Mark Private</MenuItem>
                      <MenuItem className='dropDown-item delete' color={'red'}><RiDeleteBinLine />
                        <Modal title={person.name} />
                      </MenuItem>
                    </MenuList>
                  </Menu>
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
                      <Td>
                        <Menu>
                          <MenuButton as={Button} >
                            <CiMenuKebab
                              className="menu-icon"
                              onClick={() => toggleDropdown(film)}
                            />
                          </MenuButton>
                          <MenuList style={{ color: "black", background: "white" }}>
                            <MenuItem className='dropDown-item'><IoEyeOutline /> View</MenuItem>
                            <MenuItem className='dropDown-item'><MdOutlineFileDownload />Download</MenuItem>
                            <MenuItem className='dropDown-item'><MdDriveFileRenameOutline />Rename</MenuItem>
                            <MenuItem className='dropDown-item'> <CiShare2 />Share link</MenuItem>
                            <MenuItem className='dropDown-item'><MdFileCopy />Move</MenuItem>
                            <MenuItem className='dropDown-item'><CiLock />Mark Private</MenuItem>
                            <MenuItem className='dropDown-item delete' color={'red'}><RiDeleteBinLine />
                              <Modal title={person.name} />
                            </MenuItem>
                          </MenuList>
                        </Menu>

                      </Td>

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
