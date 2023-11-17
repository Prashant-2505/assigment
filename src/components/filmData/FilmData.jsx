import React, { useState } from 'react';
import './FilmData.style.css';
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
import SideBar from '../misc/SideBar';

const FilmsData = ({ data }) => {
  const [isGrid, setIsGrid] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const toggleDisplayMode = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  const toggleDropdown = (film) => {
    setShowDropdown(!showDropdown);
    setSelectedFilm(film);
  };

  return (
    <div className={`film-data ${isGrid ? 'grid-mode' : 'list-mode'}`}>
      <div className="heading">
        <p>Film</p>
        <div className="toggle-btn" onClick={toggleDisplayMode}>
          <img src={isGrid ? gridIcon : hamburger} alt="" />
          <p>{isGrid ? 'Grid' : 'List'}</p>
        </div>
      </div>
      <div className={`film-data-items${isGrid ? '' : '-list'}`}>
        {isGrid ? (
          data.map((film, index) => (
            <div key={index} className="film-item-grid">
              <div className="film-img">
                <img src="https://via.placeholder.com/647x218" alt="Star Wars" />
              </div>
              <div className="film-info">
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PiFilmReel />
                  {film.title}
                </p>


                <Menu>
                  <MenuButton as={Button} >
                    <CiMenuKebab
                      className="menu-icon"
                      onClick={() => toggleDropdown(film)}
                    />
                  </MenuButton>
                  <MenuList style={{ color: "black", background: "white" }}>
                    <MenuItem className='dropDown-item ' color={'red'}><IoEyeOutline color='black'/>
                      <SideBar name={film.title} />
                    </MenuItem>
                    <MenuItem className='dropDown-item'><MdOutlineFileDownload />Download</MenuItem>
                    <MenuItem className='dropDown-item'><MdDriveFileRenameOutline />Rename</MenuItem>
                    <MenuItem className='dropDown-item'> <CiShare2 />Share link</MenuItem>
                    <MenuItem className='dropDown-item'><MdFileCopy />Move</MenuItem>
                    <MenuItem className='dropDown-item'><CiLock />Mark Private</MenuItem>
                    <MenuItem className='dropDown-item delete' color={'red'}><RiDeleteBinLine />
                      <Modal title={film.title} />
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          ))
        ) : (
          <div className="film-item-list">
            <TableContainer w={"100%"}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Director</Th>
                    <Th>Release Date</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((film, index) => (
                    <Tr key={index}>
                      <Td>{film.title}</Td>
                      <Td>{film.director}</Td>
                      <Td>{film.release_date}</Td>
                      <Td>
                        <Menu>
                          <MenuButton as={Button} >
                            <CiMenuKebab
                              className="menu-icon"
                              onClick={() => toggleDropdown(film)}
                            />
                          </MenuButton>
                          <MenuList style={{ color: "black", background: "white" }}>
                            <MenuItem className='dropDown-item'><IoEyeOutline />
                              <SideBar title={"view"} />
                            </MenuItem>
                            <MenuItem className='dropDown-item'><MdOutlineFileDownload />Download</MenuItem>
                            <MenuItem className='dropDown-item'><MdDriveFileRenameOutline />Rename</MenuItem>
                            <MenuItem className='dropDown-item'> <CiShare2 />Share link</MenuItem>
                            <MenuItem className='dropDown-item'><MdFileCopy />Move</MenuItem>
                            <MenuItem className='dropDown-item'><CiLock />Mark Private</MenuItem>
                            <MenuItem className='dropDown-item delete' color={'red'}><RiDeleteBinLine />
                              <Modal title={film.title} />
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

export default FilmsData;
