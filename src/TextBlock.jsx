import React from 'react';
import { Input, Button } from 'antd';

const TextBlock = ({ content, onTextChange, onRemove, onPost, isPosted }) => {
  return (
    <div className='text-div'>
      <Input.TextArea
        className='text-div-input'  
        value={content}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Enter your text (max 250 words)"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
      <div className="text-btns">
        {!isPosted && <Button onClick={onPost} style={{ marginRight: '8px' }}>Post Your Message</Button>}
        <Button onClick={onRemove}>Delete Message</Button>

      </div>

     

    </div>
  );
};

export default TextBlock;
