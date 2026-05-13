import React from "react";
import loadingImage from "../assets/LoadingImage.jpg";

export default function LoadingScreen() {
  return (
    <div className="loading-wrapper">
      <img
        src={loadingImage}
        alt="Loading Screen"
        className="loading-image"
      />
    </div>
  );
}