// src/App.js
import React, { useState } from 'react';
import Card from './components/Card'; // './components/Card' is the path
import cardsData from './data/cardsData'; // './data/cardsData' is the path
import Toast from './components/Toast';
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <div className="app">
       <Toast />
      {currentCards.map((data) => (
        <Card key={data.id} id={data.id} vimageUrl={data.vimageUrl} vimageUrl2={data.vimageUrl2} price={data.price} description={data.description}/>
      ))}

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: Math.ceil(cardsData.length / cardsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === Math.ceil(cardsData.length / cardsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
