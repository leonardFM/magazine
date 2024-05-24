"use client"
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card_col_2 = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <>
      <style>
        {`
          .scroll-container {
            overflow-x: hidden;
            overflow-y: hidden;
            scroll-behavior: smooth;
            padding: 10px 0;
          }
          .scroll-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.8);
            border: none;
            font-size: 24px;
            cursor: pointer;
            z-index: 1;
            padding: 5px 10px;
          }
          .scroll-button.left {
            left: 0;
          }
          .scroll-button.right {
            right: 0;
          }
          .card-container {
            min-width: 150px;
            max-width: 200px;
          }
          .card img {
            width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          .card-title {
            font-size: 15px;
            margin: 10px 0 5px;
          }
          .card-subtitle {
            font-size: 12px;
            color: #6c757d;
          }
          @media (max-width: 576px) {
            .scroll-button {
              display: none;
            }
            .scroll-container {
                overflow-x: auto;
                overflow-y: hidden;
                scroll-behavior: smooth;
                padding: 10px 0;
              }
          }

          
        `}
      </style>
      <div className="position-relative">
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <section ref={scrollContainerRef} className="d-flex flex-nowrap scroll-container">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="card-container px-2 mb-2 flex-shrink-0">
              <div className="h-100">
                <img
                  src="https://t.prcdn.co/img?file=9y042024051800000000001001&page=1&width=360&retina=2"
                  alt="BBC Top Gear Magazine"
                  className="card-img-top"
                />
                <div className="text-start px-2">
                  <h5 className="card-title">BBC Top Magazine</h5>
                  <h6 className="card-subtitle mb-2 text-muted">8 May 2024</h6>
                </div>
              </div>
            </div>
          ))}
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default Card_col_2;
