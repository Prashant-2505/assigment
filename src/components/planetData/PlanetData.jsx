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

const PlanetData = ({ data }) => {
  const [isGrid, setIsGrid] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const toggleDisplayMode = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  const toggleDropdown = (planet) => {
    setShowDropdown(!showDropdown);
    setSelectedPlanet(film);
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
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PiFilmReel />
                  {planet.name}
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
                      <Modal title={planet.name} />
                    </MenuItem>
                  </MenuList>
                </Menu>
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
                      <Td>
                        <Menu>
                          <MenuButton as={Button} >
                            <CiMenuKebab
                              className="menu-icon"
                              onClick={() => toggleDropdown(planet)}
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
                              <Modal title={planet.name} />
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

export default PlanetData;
