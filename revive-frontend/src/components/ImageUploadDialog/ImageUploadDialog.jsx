import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { RiFileUploadLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function ImageUploadDialog() {
    const navigate=useNavigate()
  const [open, setOpen] = useState(false);
  const [fileName,setFileName]=useState(null)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    navigate('/')
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name)
    console.log('Uploaded file:', file);
  };

  return (
    <div className='request-pickup-container'>
       
              <div className="image-container">
                <div className="file-input">
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="visually-hidden"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="image-upload" className="file-label">
                    <RiFileUploadLine size={24} />
                    <span>Click to Upload Image</span>
                    {fileName !== null ? <p><span className="waste-tags">{fileName}</span></p> : <p>Not Selected</p>}
                  </label>
                 
                </div>
              </div>
              <button className='btn-primary' onClick={handleClose}>
                    Submit
                  </button>
    </div>
  );
}

export default ImageUploadDialog;
