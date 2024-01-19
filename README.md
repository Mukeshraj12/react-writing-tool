# React Writing Tool - [App Demo](https://ad02015a-cd75-4726-9495-d464c16ca225-00-1rbgenxo217tx.pike.replit.dev/)

## Overview

The React Writing Tool is a web-based writing application developed using React, showcasing frontend development, UI/UX design, and React best practices. The tool allows users to create and manage content in the form of text blocks and picture blocks.

## Functional Requirements

### Interface Design

- The color schema is limited to black and white.
- Ant Design components are used to enhance development.
- Text is displayed in Times Roman font, size 12.

### Block Functionality

- Users can add content to the page using blocks.
- Each block can be a text block or a picture block.
- Text blocks allow users to enter and edit text with a maximum of 250 words.
- Picture blocks allow users to upload and display an image from their local computer.
- Initially, the page has no existing blocks, only an "Add Block" button at the center.
- Users can add blocks by clicking on the "Add Block" button.

### Dynamic Block Management

- Users can add multiple blocks.
- Functionality to create a new block either above or below an existing block.
- No limit on the number of blocks a user can add.

### Editing Tools (optional)

- Basic text editing tools, such as bold, italic, and underline (for future improvement).

### Responsive Design (optional)

- The tool is designed to be responsive and work well on different screen sizes.

## Usage

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.
4. Open the application in your web browser.

## Components

- `App.js`: The main component managing the state and rendering text and picture blocks.
- `TextBlock.js`: Component for text blocks, including text input and post button.
- `PictureBlock.js`: Component for picture blocks, including image upload and remove button.

## Features

- **Text Blocks:**
  - Users can enter and edit text.
  - Post button to submit the text.

- **Picture Blocks:**
  - Users can upload and display images.
  - Remove button to clear the image.

## Limitations

- The application currently has basic functionality and may lack advanced features.
- Further improvements can be made, such as text formatting options and additional editing tools.

## Development Environment

- React version: [your-react-version]
- Ant Design version: [ant-design-version]
- Node.js version: [nodejs-version]

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute and provide feedback!
