// pages/Gallery/Gallery.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaSearch, FaCalendarAlt, FaTags, FaImage, FaTimes } from 'react-icons/fa';
import '../styles/Gallery.css';
import PageBanner from '../components/PageBanner';

const Gallery = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery categories for filter
  const categories = [
    { id: 'all', label: t('allPhotos') },
    { id: '2024', label: t('march2024') },
    { id: '2023', label: t('march2023') },
    { id: '2022', label: t('march2022') },
    { id: 'route', label: t('routeScenery') },
    { id: 'participants', label: t('participants') },
    { id: 'historic', label: t('historicMoments') }
  ];

  // Mock gallery images data
  const galleryImages = Array(24).fill().map((_, index) => ({
    id: index + 1,
    src: `https://www.bernerdm.ch/wp-content/uploads/2024/12/gallery-${index + 1}.jpg`,
    thumbnail: `https://www.bernerdm.ch/wp-content/uploads/2024/12/gallery-${index + 1}-thumbnail.jpg`,
    title: `${t('galleryImage')} ${index + 1}`,
    description: `${t('galleryImageDesc')} ${index + 1}`,
    category: getRandomCategory(),
    year: getRandomYear(),
    tags: getRandomTags()
  }));

  // Helper functions to generate random data for the mock gallery
  function getRandomCategory() {
    const cats = ['route', 'participants', 'historic'];
    return cats[Math.floor(Math.random() * cats.length)];
  }

  function getRandomYear() {
    const years = ['2022', '2023', '2024'];
    return years[Math.floor(Math.random() * years.length)];
  }

  function getRandomTags() {
    const allTags = [
      'hiking', 'mountains', 'switzerland', 'bern', 'army',
      'group', 'medal', 'checkpoint', 'scenery', 'finish'
    ];

    const numTags = Math.floor(Math.random() * 4) + 1; // 1-4 tags
    const tags = [];

    for (let i = 0; i < numTags; i++) {
      const randomTag = allTags[Math.floor(Math.random() * allTags.length)];
      if (!tags.includes(randomTag)) {
        tags.push(randomTag);
      }
    }

    return tags;
  }

  // Filter gallery images based on active filter and search term
  const filteredImages = galleryImages.filter(image => {
    const matchesFilter = activeFilter === 'all' || image.category === activeFilter || image.year === activeFilter;
    const matchesSearch = searchTerm === '' ||
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  // Handle image click to show lightbox
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <PageBanner
        title={t('gallery')}
        subtitle={t('gallerySubtitle')}
        background="https://www.bernerdm.ch/wp-content/uploads/2024/12/gallery-bg.jpg"
      />

      <div className="container">
        <motion.div
          className="gallery-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="gallery-header">
            <h2><FaCamera className="header-icon" /> {t('marchGallery')}</h2>
            <p className="header-description">{t('galleryDesc')}</p>
          </div>

          <div className="gallery-controls">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder={t('searchGallery')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="gallery-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleImageClick(image)}
                >
                  <div className="gallery-image">
                    <img src={image.src} alt={image.title} />
                    <div className="image-overlay">
                      <h3>{image.title}</h3>
                      <div className="image-meta">
                        <span className="image-year">
                          <FaCalendarAlt /> {image.year}
                        </span>
                        <span className="image-category">
                          <FaImage /> {t(image.category)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredImages.length === 0 && (
            <div className="no-results">
              <p>{t('noGalleryResults')}</p>
            </div>
          )}

          <div className="gallery-pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <span className="pagination-dots">...</span>
            <button className="pagination-btn">5</button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="close-btn" onClick={closeLightbox}>
              <FaTimes />
            </button>

            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-image">
                <img src={selectedImage.src} alt={selectedImage.title} />
              </div>

              <div className="lightbox-details">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>

                <div className="image-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{selectedImage.year}</span>
                  </div>

                  <div className="meta-item">
                    <FaImage className="meta-icon" />
                    <span>{t(selectedImage.category)}</span>
                  </div>
                </div>

                <div className="image-tags">
                  <FaTags className="tags-icon" />
                  {selectedImage.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;