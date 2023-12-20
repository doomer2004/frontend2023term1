import React, { useState } from 'react';
import '../../../components-styles/Image.css';

function Image() {
  const [images, setImages] = useState([
	'https://dovkola.media/wp-content/uploads/2022/10/i129069.jpeg'
  ]);
  
  const handleAddImage = () => { 
     
    const newImage = 'https://f.discover.ua/city/89/D9Tbh.jpg'; 
    setImages((prevImages) => [...prevImages, newImage]);  
  };
  

  const handleIncreaseSize = () => {
    
    const imagesElements = document.querySelectorAll('#images-container img');
    imagesElements.forEach(image => {
      image.width += 10;
      image.height += 10;
    });
  };

  const handleDecreaseSize = () => {
    
    const imagesElements = document.querySelectorAll('#images-container img');
    imagesElements.forEach(image => {
      image.width -= 10;
      image.height -= 10;
    });
  };

  const handleDeleteImage = () => {
    
    if (images.length > 1) {
      const updatedImages = [...images];
      updatedImages.pop();
      setImages(updatedImages);
    }
  };

  return (
    <div>
      <div id="images-container">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Івано-Франківськ ${index + 1}`} />
        ))}
      </div>

      <div className="image-buttons">
        <button onClick={handleAddImage}>Додати зображення</button>
        <button onClick={handleIncreaseSize}>Збільшити</button>
        <button onClick={handleDecreaseSize}>Зменшити</button>
        <button onClick={handleDeleteImage}>Видалити зображення</button>
      </div>
    </div>
  );
}

export default Image;