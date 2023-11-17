import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';
import './Home.style.css';
import { PiFilmReel } from "react-icons/pi";
import FilmData from '../../components/filmData/FilmData';
import PlanetData from '../../components/planetData/PlanetData';
import PeopleData from '../../components/peopleData/PeopleData';
 import StarshipData from '../../components/starshipData/StarshipData';
import SpeciesData from '../../components/speciesData/SpeciesData';
import VehicleData from '../../components/vehicleData/Vehicles';




const Home = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (expandedCategory) {
        try {
          setCategoryData(null);
          const response = await fetch(`https://swapi.dev/api/${expandedCategory.toLowerCase()}/`);
          const data = await response.json();
          setCategoryData(data.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [expandedCategory]);

  const handleCategoryClick = (name) => {
    setExpandedCategory((prevExpandedCategory) =>
      prevExpandedCategory === name ? null : name
    );
  };

  return (
    <div className='container'>
      <div className="side-bar">
        <Accordion allowToggle>
          {['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'].map((category) => (
            <AccordionItem style={{border:'2px'}} key={category}>
              <h2>
                <AccordionButton _expanded={{ bg: '#CB1A80', color: 'white'  }} onClick={() => handleCategoryClick(category)}>
                  <Box as="span" flex='1' textAlign='left'>
                    {category}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {categoryData ? (
                  <ul>
                    {categoryData.map((item, index) => (
                      <li className='category-item' key={index}><p className='title'><span ><PiFilmReel /></span>{item.name}</p></li>
                    ))}
                  </ul>
                ) : (
                  <div>Loading...</div>
                )}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className='right-container'>
        {expandedCategory ? (
          // Render table view when a category is selected
          <div className='right-container-data'>
            
            {categoryData ? (
              // Render specific component based on the selected category
              <>
                {expandedCategory === 'Films' && <FilmData data={categoryData} />}
                {expandedCategory === 'People' && <PeopleData data={categoryData} />}
                {expandedCategory === 'Planets' && <PlanetData data={categoryData} />}
                {expandedCategory === 'Species' && <SpeciesData data={categoryData} />}
                {expandedCategory === 'Starships' && <StarshipData data={categoryData} />}
                {expandedCategory === 'Vehicles' && <VehicleData data={categoryData} />}

              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        ) : (
          // Render the default content when no category is selected
          <div className='dashboard-info'>
            <div className='image-container'>
              <img src='https://via.placeholder.com/647x218' alt='Star Wars' />
            </div>
            <div className='info-text'>
              <div className='title'>Welcome to Star Wars Dashboard</div>
              <div className='description'>
                Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
