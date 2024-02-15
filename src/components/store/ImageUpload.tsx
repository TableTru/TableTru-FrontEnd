"use client";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState("https://pbs.twimg.com/media/FXTTYWfVUAAjIph?format=png&name=medium");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        style={{
          backgroundImage: `url(${selectedImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '200px',
          height: '200px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Upload file
        <input
          className="visually-hidden-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </Button>
    </div>
  );
}
