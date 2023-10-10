import React, { useState, useEffect } from 'react';
import BoneCard from './BoneCard';
import bonesData from './bones.json'; // import the bones JSON data

//import images
import skullImage from '../images/skull.jpg';
import vertebraeImage from '../images/vertebrae.jpg';
import ribsImage from '../images/ribs.jpg';
import clavicleImage from '../images/clavicle.jpg';
import humerusImage from '../images/humerus.jpg';
import radius_ulnaImage from '../images/radius_ulna.jpg';
import pelvisImage from '../images/pelvis.jpg';
import femurImage from '../images/femur.jpg';
import patellaImage from '../images/patella.jpg';
import tibia_fibulaImage from '../images/tibia_fibula.jpg'
import phalangesImage from '../images/phalanges.jpg';
import footImage from '../images/foot.jpg';


function BoneCardList() {
    return (
      <div className="bone-card-list">
        {bonesData.map((bone, index) => (
          <BoneCard key={index} name={bone} />
        ))}
      </div>
    );
  }

  function BoneCardList() {
    return (
      <div className="bone-card-list">
        {bonesData.bones.map((bone, index) => (
          <BoneCard
            key = {index}
            boneName = {bone.name} // access the name in bones.json
            boneImage = {getImageForBone(bone.name)} // get corresponding image in bones.json
          />
        ))}
      </div>
    );
  }
  
  //helper function to get image for each bone
  function getImageForBone(boneName) {
    switch (boneName) {
      case "Skull":
        return skullImage;
      case "Vertebrae":
        return vertebraeImage;
      case "Ribs":
        return ribsImage;
      case "Clavicle":
        return clavicleImage;
      case "Humerus":
        return humerusImage;
      case "Radius_Ulna":
        return radius_ulnaImage;
      case "Pelvis": 
        return pelvisImage;
      case "Femur":
        return femurImage;
      case "Patella":
        return patellaImage;
      case "Tibia_Fibula":
        return tibia_fibulaImage;
      case "Phalanges":
        return phalangesImage;
      case "Foot":
        return footImage;
      default:
        return ''; // no bone (placeholder/default image)
    }
  }
  
  export default BoneCardList;