import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/Gallery.css';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    // 2020 → December
    { id: 1, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/000000000000000000000000-scaled.jpg' },
    { id: 2, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/00000000000000.jpg' },
    { id: 3, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/00000000.jpg' },
    { id: 4, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/000000.jpg' },
    { id: 5, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/0000.jpg' },
    { id: 6, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/000.jpg' },
    { id: 7, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/0.jpg' },
    { id: 8, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/1.jpg' },
    { id: 9, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/55-km.jpg' },
    { id: 10, year: '2020', src: 'https://bernerdm.ch/wp-content/uploads/2020/12/129406992_4816518861723340_3580410550278166835_n.jpg' },
    { id: 11, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Ale.jpg' },
    { id: 12, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/bdm16779-scaled.jpg' },
    { id: 13, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/belgia.jpg' },
    { id: 14, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/BernerDM-2020-Foto-Havekost-scaled.jpg' },
    { id: 15, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/De-1.jpeg' },
    { id: 16, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/de-7.jpeg' },
    { id: 17, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/de-9-scaled.jpg' },
    { id: 18, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Erkens-3.jpg' },
    { id: 19, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/gps-scaled.jpg' },
    { id: 20, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/grenze-2.jpg' },
    { id: 21, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Jammertal.jpg' },
    { id: 22, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Kassel.jpg' },
    { id: 23, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Linda-Balmer.jpg' },
    { id: 24, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/mip-mip.jpg' },
    { id: 25, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/mpk_utbildningschef.jpg' },
    { id: 26, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Nicolas-Hinden.jpg' },
    { id: 27, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/nl.jpeg' },
    { id: 28, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Pascalandi2.jpg' },
    { id: 29, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Regensburg.jpg' },
    { id: 30, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/snow.jpg' },
    { id: 31, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Thomas--scaled.jpg' },
    { id: 32, year: '2020', src: 'https://www.bernerdm.ch/wp-content/uploads/2020/12/Trondheim.jpg' },

    // 2021 → December
    { id: 33, year: '2021', src: 'https://www.bernerdm.ch/wp-content/uploads/2021/12/IMG_20211204_111059-scaled.jpg' },
    { id: 34, year: '2021', src: 'https://www.bernerdm.ch/wp-content/uploads/2021/12/IMG_2255.png' },
    { id: 35, year: '2021', src: 'https://www.bernerdm.ch/wp-content/uploads/2021/12/1f0f5abe-0411-4bd4-a8b5-ca84dd8a5679.jpg' },
    { id: 36, year: '2021', src: 'https://www.bernerdm.ch/wp-content/uploads/2021/12/12.04-Berner-Remote-Marsch-3-scaled.jpg' },
    { id: 37, year: '2021', src: 'https://www.bernerdm.ch/wp-content/uploads/2021/12/12.04-Berner-Remote-Marsch-13-scaled.jpg' },
    { id: 38, year: '2021', src: 'https://www.bernerdm.ch/wp-content/uploads/2021/12/12.04-Berner-Remote-Marsch-17-scaled.jpg' },
    { id: 39, year: '2021', src: 'https://www.bernerdm.ch/wp-content/uploads/2021/12/20211204_060524.jpg' },

    // 2022 → December
    { id: 40, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0205-scaled.jpg' },
    { id: 41, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0201-scaled.jpg' },
    { id: 42, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0197-scaled.jpg' },
    { id: 43, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0195-scaled.jpg' },
    { id: 44, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0187-scaled.jpg' },
    { id: 45, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0188-scaled.jpg' },
    { id: 46, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0190-scaled.jpg' },
    { id: 47, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0193-scaled.jpg' },
    { id: 48, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0194-scaled.jpg' },
    { id: 49, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0184-scaled.jpg' },
    { id: 50, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0181-scaled.jpg' },
    { id: 51, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0180-scaled.jpg' },
    { id: 52, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0177-scaled.jpg' },
    { id: 53, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0176-scaled.jpg' },
    { id: 54, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0169-scaled.jpg' },
    { id: 55, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0170-scaled.jpg' },
    { id: 56, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0172-scaled.jpg' },
    { id: 57, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0173-scaled.jpg' },
    { id: 58, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0174-scaled.jpg' },
    { id: 59, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0168-scaled.jpg' },
    { id: 60, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0167-scaled.jpg' },
    { id: 61, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0166-scaled.jpg' },
    { id: 62, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0165-scaled.jpg' },
    { id: 63, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0163-scaled.jpg' },
    { id: 64, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0155-scaled.jpg' },
    { id: 65, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0157-scaled.jpg' },
    { id: 66, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0159-scaled.jpg' },
    { id: 67, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0160-scaled.jpg' },
    { id: 68, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0161-scaled.jpg' },
    { id: 69, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0152-scaled.jpg' },
    { id: 70, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0151-scaled.jpg' },
    { id: 71, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0149-scaled.jpg' },
    { id: 72, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0148-scaled.jpg' },
    { id: 73, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0147-scaled.jpg' },
    { id: 74, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0141-scaled.jpg' },
    { id: 75, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0142-scaled.jpg' },
    { id: 76, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0143-scaled.jpg' },
    { id: 77, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0145-scaled.jpg' },
    { id: 78, year: '2022', src: 'https://www.bernerdm.ch/wp-content/uploads/2022/12/DSC_0146-scaled.jpg' },
    { id: 243, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0183-2-1024x681.jpg' },
    { id: 244, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0194-2-1024x681.jpg' },
    { id: 245, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0207-1024x681.jpg' },
    { id: 246, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0211-1-1024x681.jpg' },
    { id: 247, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0242-1-1024x681.jpg' },
    { id: 248, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0214-1024x681.jpg' },
    { id: 249, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0246-1-1024x681.jpg' },
    { id: 250, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0248-1-1024x681.jpg' },
    { id: 251, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0265-1-1024x681.jpg' },
    { id: 252, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0266-1-1024x681.jpg' },
    { id: 253, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0267-2-1024x681.jpg' },
    { id: 254, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0268-1-1024x681.jpg' },
    { id: 255, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0141-1-1024x681.jpg' },
    { id: 256, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0142-1024x681.jpg' },
    { id: 257, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0146-1024x681.jpg' },
    { id: 258, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0148-1-1024x681.jpg' },
    { id: 259, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0163-1024x681.jpg' },
    { id: 260, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0165-1024x681.jpg' },
    { id: 261, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0166-3-1024x681.jpg' },
    { id: 262, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0167-1-1024x681.jpg' },
    { id: 263, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0168-1-1024x681.jpg' },
    { id: 264, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/01/DSC_0195-2-1024x681.jpg' },

    // 2024 → March
    { id: 265, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0273-1024x681.jpg' },
    { id: 266, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0282-1024x681.jpg' },
    { id: 267, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0291-1024x681.jpg' },
    { id: 268, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0296-1024x681.jpg' },
    { id: 269, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0302-1024x681.jpg' },
    { id: 270, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0310-1024x681.jpg' },
    { id: 271, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0323-1024x681.jpg' },
    { id: 272, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0334-1024x681.jpg' },
    { id: 273, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0337-Kopie-1024x681.jpg' },
    { id: 274, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0348-1024x681.jpg' },
    { id: 275, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0370-1024x681.jpg' },
    { id: 276, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0380-1024x681.jpg' },
    { id: 277, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0381-1024x681.jpg' },
    { id: 278, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0383-1024x681.jpg' },
    { id: 279, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0388-1024x681.jpg' },
    { id: 280, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0391-1024x681.jpg' },
    { id: 281, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0417-1024x681.jpg' },
    { id: 282, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0419-1024x681.jpg' },
    { id: 283, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0422-1024x681.jpg' },
    { id: 284, year: '2024', src: 'https://www.bernerdm.ch/wp-content/uploads/2024/03/DSC_0424-1024x681.jpg' },
  ];

  const years = ['all', '2024', '2022', '2021', '2020'];

  const categories = [
    { id: 'all', name: t('pages.gallery.filters.byCategory.allCategories') },
    { id: 'participants', name: t('pages.gallery.filters.byCategory.participants') },
    { id: 'landscapes', name: t('pages.gallery.filters.byCategory.landscapes') },
    { id: 'ceremonies', name: t('pages.gallery.filters.byCategory.ceremonies') },
    { id: 'remote', name: t('pages.gallery.filters.byCategory.remoteMarch') },
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
          <h1>{t('pages.gallery.header.title')}</h1>
          <p>{t('pages.gallery.header.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="gallery-filters">
          <div className="year-filter">
            <h3>{t('pages.gallery.filters.byYear.title')}</h3>
            <div className="filter-buttons">
              {years.map((year) => (
                <button
                  key={year}
                  className={`filter-btn ${selectedYear === year ? 'active' : ''}`}
                  onClick={() => handleYearChange(year)}
                >
                  {year === 'all' ? t('pages.gallery.filters.byYear.allYears') : year}
                </button>
              ))}
            </div>
          </div>

          <div className="category-filter">
            <h3>{t('pages.gallery.filters.byCategory.title')}</h3>
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
                {image.caption && (
                  <div className="gallery-caption">
                    <p>{image.caption}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="no-results">
            <i className="fas fa-image"></i>
            <h3>{t('pages.gallery.noResults.title')}</h3>
            <p>{t('pages.gallery.noResults.description')}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSelectedYear('all');
                setSelectedCategory('all');
              }}
            >
              {t('pages.gallery.noResults.resetFilters')}
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
                  <div className="modal-year">{t('pages.gallery.modal.year')} {selectedImage.year}</div>
                  <div className="modal-category">
                    {selectedImage.category && `${t('pages.gallery.modal.category')} ${selectedImage.category}`}
                  </div>
                  {selectedImage.caption && <p className="modal-caption">{selectedImage.caption}</p>}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="gallery-more-info">
          <h2>{t('pages.gallery.submitPhotos.title')}</h2>
          <p>
            {t('pages.gallery.submitPhotos.description')}
          </p>
          <div className="submission-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-camera"></i>
              </div>
              <div className="info-content">
                <h3>{t('pages.gallery.submitPhotos.requirements.title')}</h3>
                <ul>
                  <li>{t('pages.gallery.submitPhotos.requirements.req1')}</li>
                  <li>{t('pages.gallery.submitPhotos.requirements.req2')}</li>
                  <li>{t('pages.gallery.submitPhotos.requirements.req3')}</li>
                  <li>{t('pages.gallery.submitPhotos.requirements.req4')}</li>
                </ul>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-paper-plane"></i>
              </div>
              <div className="info-content">
                <h3>{t('pages.gallery.submitPhotos.howToSubmit.title')}</h3>
                <p>
                  {t('pages.gallery.submitPhotos.howToSubmit.description')}
                </p>
              </div>
            </div>
          </div>
          <a href="mailto:medien@bernerdm.ch" className="btn btn-primary">{t('pages.gallery.submitPhotos.submitButton')}</a>
        </div>
        <div className="video-section">
          <h2>{t('pages.gallery.videoSection.title')}</h2>
          <div className="video-container">
            <video
              className="gallery-video"
              controls
              poster="https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1-1024x680.png"
            >
              <source
                src="https://www.bernerdm.ch/wp-content/uploads/2021/05/Neues-Projekt.mp4"
                type="video/mp4"
              />
              {t('pages.gallery.videoSection.fallbackMessage')}
            </video>
          </div>
          <div className="video-description">
            <p>
              {t('pages.gallery.videoSection.description')}
            </p>
            <button className="btn btn-secondary">
              <i className="fab fa-youtube"></i> {t('pages.gallery.videoSection.viewMoreVideos')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;