import React from 'react';
import './index.css';

export default function Loading() {
  console.log(123);
  return (
    <div className="atom-spinner">
      <div className="spinner-inner">
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-circle"> ● </div>
      </div>
    </div>
  )
}
