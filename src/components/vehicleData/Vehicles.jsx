import React, { useState } from 'react';
import './vehicleData.style.css';
import hamburger from '../../assets/icons/hamburger.png';
import gridIcon from '../../assets/icons/grid.png';
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

const vehiclesData = ({ data }) => {
  const [isGrid, setIsGrid] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedVechicle, setSelectedVehicle] = useState(null);

  const toggleDisplayMode = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  const toggleDropdown = (vehicle) => {
    setShowDropdown(!showDropdown);
    setSelectedvehicle(vehicle);
  };

  return (
    <div className={`vehicle-data ${isGrid ? 'grid-mode' : 'list-mode'}`}>
      <div className="heading">
        <p>vehicle</p>
        <div className="toggle-btn" onClick={toggleDisplayMode}>
          <img src={isGrid ? gridIcon : hamburger} alt="" />
          <p>{isGrid ? 'Grid' : 'List'}</p>
        </div>
      </div>
      <div className={`vehicle-data-items${isGrid ? '' : '-list'}`}>
        {isGrid ? (
          data.map((vehicle, index) => (
            <div key={index} className="vehicle-item-grid">
              <div className="vehicle-img">
                <img src="https://via.placeholder.com/647x218" alt="Star Wars" />
              </div>
              <div className="vehicle-info">
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PiFilmReel />
                  {vehicle.name}
                </p>


                <Menu>
                  <MenuButton as={Button} >
                    <CiMenuKebab
                      className="menu-icon"
                      onClick={() => toggleDropdown(vehicle)}
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
                      <Modal title={vehicle.name} />
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          ))
        ) : (
          <div className="vehicle-item-list">
            <TableContainer w={"100%"}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Model</Th>
                    <Th>Top Speed</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((vehicle, index) => (
                    <Tr key={index}>
                      <Td>{vehicle.name}</Td>
                      <Td>{vehicle.model}</Td>
                      <Td>{vehicle.top_speed}</Td>
                      <Td>
                        <Menu>
                          <MenuButton as={Button} >
                            <CiMenuKebab
                              className="menu-icon"
                              onClick={() => toggleDropdown(vehicle)}
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
                              <Modal title={vehicle.name} />
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

export default vehiclesData;
