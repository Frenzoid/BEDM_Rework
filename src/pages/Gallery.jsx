import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock image data - in a real app this would come from an API or CMS
  const images = [
    {
      id: 1,
      year: '2024',
      category: 'participants',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1-1024x680.png',
      alt: 'Participants at the starting line of the 2024 Bernese Distance March',
      caption: 'Participants gathering at the starting line for the 2024 march',
    },
    {
      id: 2,
      year: '2024',
      category: 'landscapes',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Beautiful Swiss landscape during the march',
      caption: 'Scenic route through the Canton of Bern, 2024',
    },
    {
      id: 3,
      year: '2023',
      category: 'participants',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Group of participants crossing a checkpoint',
      caption: 'Participants at checkpoint 3, 2023 march',
    },
    {
      id: 4,
      year: '2023',
      category: 'ceremonies',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Award ceremony from the 2023 Bernese Distance March',
      caption: 'Medal ceremony for Category A winners, 2023',
    },
    {
      id: 5,
      year: '2022',
      category: 'participants',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Participants crossing a Swiss alpine meadow',
      caption: 'Marchers traversing the beautiful Swiss countryside, 2022',
    },
    {
      id: 6,
      year: '2022',
      category: 'landscapes',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Mountain view along the march route',
      caption: 'View of the Alps from the march route, 2022',
    },
    {
      id: 7,
      year: '2021',
      category: 'participants',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Uniformed participants during the march',
      caption: 'Military participants in the 2021 Bernese Distance March',
    },
    {
      id: 8,
      year: '2021',
      category: 'ceremonies',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Opening ceremony of the 2021 march',
      caption: 'Official opening of the 2021 march with Swiss flag ceremony',
    },
    {
      id: 9,
      year: '2020',
      category: 'remote',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Remote march participant during COVID-19',
      caption: 'Remote participant completing the march in their local area during COVID-19, 2020',
    },
    {
      id: 10,
      year: '2020',
      category: 'remote',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Remote participants sharing experiences online',
      caption: 'Online gathering of remote participants, 2020',
    },
    {
      id: 11,
      year: '2019',
      category: 'participants',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Large group of participants from multiple countries',
      caption: 'International participants at the starting point, 2019',
    },
    {
      id: 12,
      year: '2019',
      category: 'landscapes',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Scenic view of a Swiss lake along the route',
      caption: 'Beautiful lake view along the march route, 2019',
    },
    {
      id: 13,
      year: '2018',
      category: 'participants',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Youth participants completing their route',
      caption: 'Young participants from Category B crossing the finish line, 2018',
    },
    {
      id: 14,
      year: '2018',
      category: 'ceremonies',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Award ceremony with medals being presented',
      caption: 'Medal presentation ceremony for the 60th Bernese Distance March, 2018',
    },
    {
      id: 15,
      year: '2017',
      category: 'participants',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Participants checking their route maps',
      caption: 'Participants planning their routes at a checkpoint, 2017',
    },
    {
      id: 16,
      year: '2017',
      category: 'landscapes',
      src: 'https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg',
      alt: 'Sunset over the Swiss mountains during the march',
      caption: 'Sunset view during the final stretch of the march, 2017',
    },
  ];

  const years = ['all', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'participants', name: 'Participants' },
    { id: 'landscapes', name: 'Landscapes' },
    { id: 'ceremonies', name: 'Ceremonies' },
    { id: 'remote', name: 'Remote March 2020' },
  ];

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const filteredImages = images.filter((image) => {
    if (selectedYear !== 'all' && image.year !== selectedYear) return false;
    if (selectedCategory !== 'all' && image.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Images from past Bernese Distance Marches</p>
        </div>
      </div>

      <div className="container">
        <div className="gallery-filters">
          <div className="year-filter">
            <h3>Filter by Year</h3>
            <div className="filter-buttons">
              {years.map((year) => (
                <button
                  key={year}
                  className={`filter-btn ${selectedYear === year ? 'active' : ''}`}
                  onClick={() => handleYearChange(year)}
                >
                  {year === 'all' ? 'All Years' : year}
                </button>
              ))}
            </div>
          </div>

          <div className="category-filter">
            <h3>Filter by Category</h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="gallery-grid"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                className="gallery-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleImageClick(image)}
              >
                <div className="gallery-image-container">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-year">{image.year}</div>
                    <div className="gallery-expand">
                      <i className="fas fa-search-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="gallery-caption">
                  <p>{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="no-results">
            <i className="fas fa-image"></i>
            <h3>No images found</h3>
            <p>Try changing your filter settings to see more images.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSelectedYear('all');
                setSelectedCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="image-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="image-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal}>
                  <i className="fas fa-times"></i>
                </button>
                <div className="modal-image-container">
                  <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
                </div>
                <div className="modal-info">
                  <div className="modal-year">Year: {selectedImage.year}</div>
                  <div className="modal-category">
                    Category: {categories.find(cat => cat.id === selectedImage.category)?.name}
                  </div>
                  <p className="modal-caption">{selectedImage.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="gallery-more-info">
          <h2>Submit Your Photos</h2>
          <p>
            Do you have photos from past Bernese Distance Marches that you'd like to share?
            We welcome contributions to our gallery from participants and spectators.
          </p>
          <div className="submission-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-camera"></i>
              </div>
              <div className="info-content">
                <h3>Photo Requirements</h3>
                <ul>
                  <li>High-resolution images (minimum 1500px width)</li>
                  <li>JPG or PNG format</li>
                  <li>Include date and location in the description</li>
                  <li>Maximum 10 photos per submission</li>
                </ul>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-paper-plane"></i>
              </div>
              <div className="info-content">
                <h3>How to Submit</h3>
                <p>
                  Send your photos to <a href="mailto:medien@bernerdm.ch">medien@bernerdm.ch</a> with
                  the subject line "Bernese Distance March Photos". Please include your name, the year of the march,
                  and a brief description of each photo.
                </p>
              </div>
            </div>
          </div>
          <a href="mailto:medien@bernerdm.ch" className="btn btn-primary">Submit Your Photos</a>
        </div>

        <div className="video-section">
          <h2>Video Highlights</h2>
          <div className="video-container">
            <div className="video-placeholder">
              <div className="play-button">
                <i className="fas fa-play"></i>
              </div>
              <div className="video-title">
                <h3>Highlights from the 66th Bernese Distance March (2024)</h3>
              </div>
            </div>
          </div>
          <div className="video-description">
            <p>
              Experience the highlights from the 66th Bernese Distance March in 2024. This video showcases the
              beautiful routes, enthusiastic participants, and the spirit of camaraderie that makes this event
              special.
            </p>
            <button className="btn btn-secondary">
              <i className="fab fa-youtube"></i> View More Videos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;