import React, { useState } from 'react';
import { Button } from 'antd';
import './App.css'; // Import your custom styles after Ant Design styles
import TextBlock from './TextBlock';
import PictureBlock from './PictureBlock';

const App = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type) => {
    const newBlock = {
      id: new Date().getTime(),
      type: type,
      content: type === 'text' ? '' : null,
      image: type === 'picture' ? null : null,
      isPosted: false,  // Add this property
    };
  
    setBlocks([...blocks, newBlock]);
  };
  

  const removeBlock = (id) => {
    setBlocks(blocks.filter((block) => block.id !== id));
  };

  const handleTextPost = (id) => {
    const updatedBlocks = blocks.map((block) =>
      block.id === id ? { ...block, isPosted: true } : block
    );
  
    setBlocks(updatedBlocks);
  };
  

  const handleTextChange = (id, newText) => {
    setBlocks(
      blocks.map((block) =>
        block.id === id ? { ...block, content: newText } : block
      )
    );
  };

  const handleImageUpload = (id, imageFile) => {
    // Handle image upload logic here
    setBlocks(
      blocks.map((block) =>
        block.id === id ? { ...block, image: imageFile } : block
      )
    );
  };

  const handleRemoveImage = (id) => {
    // Set the image property to null to remove the reference to the uploaded image
    setBlocks(
      blocks.map((block) =>
        block.id === id ? { ...block, image: null, isPosted: false } : block
      )
    );
  };
  

  return (
    <div className="app-container">
      {blocks.map((block) => (
        <div key={block.id} className="block-container">
          {block.type === 'text' ? (
            <TextBlock
              content={block.content}
              onTextChange={(text) => handleTextChange(block.id, text)}
              onRemove={() => removeBlock(block.id)}
              onPost={() => handleTextPost(block.id)}
              isPosted={block.isPosted} 
            />
          
          ) : (
            <PictureBlock
              onImageUpload={(file) => handleImageUpload(block.id, file)}
              onRemove={() => handleRemoveImage(block.id)}
            />
          )}
        </div>
      ))}
      <div className="add-block-button">
        <Button onClick={() => addBlock('text')}>Add Text Block</Button>
        <Button onClick={() => addBlock('picture')}>Add Picture Block</Button>
      </div>
    </div>
  );
};

export default App;
