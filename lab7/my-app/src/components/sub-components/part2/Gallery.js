import React from 'react';
import GoodsCard from './GoodsCard';
import cam1 from '../../../pictures/cam1.jpg'
import cam2 from '../../../pictures/cam2.jpg'
import watch1 from '../../../pictures/watch.jpg'
import watch2 from '../../../pictures/watch2.jpg'
import headphones from '../../../pictures/headphones.jpg'
import '../../../components-styles/Gallery.css'



const Gallery = () => {
  const goodsData = [
    { id: 1, photo: cam1, name: 'Camera "Cam1"', price: 250 },
    { id: 2, photo: cam2, name: 'Camera "Cam2"', price: 100 },
	 { id: 3, photo: watch1, name: 'Watch "Cam1"', price: 300 },
	 { id: 4, photo: watch2, name: 'Watch "Cam2"', price: 500 },
	 { id: 5, photo: headphones, name: 'Headphones "headphones"', price: 150 },

  ];

  return (
    <div className="gallery">
      <h1 className="gallery-title">Магазин техніки</h1>
      <div className="goods-list">
        {goodsData.map((goods) => (
          <GoodsCard
            key={goods.id}
            photo={goods.photo}
            name={goods.name}
            price={goods.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;