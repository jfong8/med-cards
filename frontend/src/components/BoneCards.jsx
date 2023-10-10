import React from 'react';

function BoneCard({ boneName, boneImage }) {
  return (
    <div className="bone-card">
      <h2>{boneName}</h2>
      <img src={boneImage} alt={boneName} />
      //add more styling in the future
    </div>
  );
}

export default BoneCard;