import React, { useState } from 'react';
import { Button, Upload, message } from 'antd';

const PictureBlock = ({ onImageUpload, onRemove, isPosted, image }) => {
  const [imageUrl, setImageUrl] = useState(image ? URL.createObjectURL(image) : null);

  const handleUpload = ({ file }) => {
    // Check if the block is already posted
    if (isPosted) {
      message.error('Image has already been posted.');
      return false;
    }

    // Handle image upload logic here
    message.success(`${file.name} file uploaded successfully.`);
    onImageUpload(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };
    reader.readAsDataURL(file);

    return false; // Prevent default behavior of Upload component
  };

  const handleRemove = () => {
    // Clear the image reference when removing
    setImageUrl(null);
    onRemove();
  };

  return (
    <div className='picture-div'>
      <Upload customRequest={handleUpload} showUploadList={false}>
        <Button disabled={isPosted}>Upload Image</Button>
        <Button onClick={handleRemove}>Delete Image</Button>
      </Upload>
      {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />}
      
    </div>
  );
};

export default PictureBlock;
