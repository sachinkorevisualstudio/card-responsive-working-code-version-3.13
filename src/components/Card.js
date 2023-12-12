// src/components/Card.js
import React, { useState } from 'react';
import './Card.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card({ id, vimageUrl, vimageUrl2, price, description }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlistSelected, setIsWishlistSelected] = useState(false);

  const handleCardClick = () => {
    const priceText = price ? `, price: ${price}` : '';
    const descriptionText = description ? `, description: ${description}` : '';
    const imageUrlText = vimageUrl ? `, vimageUrl: ${vimageUrl}` : '';
    const imageUrl2Text = vimageUrl2 ? `, vimageUrl2: ${vimageUrl2}` : '';

    const message = `Clicked id: ${id}${priceText}${descriptionText}${imageUrlText}${imageUrl2Text}`;

    console.log(message);
    alert(message);
    // Add your logic for what happens when a card is clicked
  };

  const handleWishlistClick = () => {
    if (isWishlistSelected) {
      setIsWishlistSelected(false);
      showToast('Removed from Wishlist', 'info');
    } else {
      setIsWishlistSelected(true);
      showToast('Added to Wishlist', 'info');
    }
  };

  const showToast = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`wishlist ${isWishlistSelected ? 'selected' : ''}`} onClick={handleWishlistClick}>
        {/* Your wishlist SVG goes here */}
        <svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="28" height="28" viewBox="0 0 20 16">

          <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" 
          fill={isWishlistSelected ? "#ff0000" : "#2874F0"} class="" stroke="#FFF"  opacity=".9">

          </path>
        </svg>
      </div>
      <img src={isHovered ? vimageUrl2 : vimageUrl} alt={`Card ${id}`} />
      <div className="card-info">
        {price && <div className="price">Price: <span className="bold">{price}</span></div>}
        {description && <div className="description">{description}</div>}
      </div>
      {isHovered && <div className="overlay">Click me!</div>}
      
    </div>
  );
}

export default Card;
