# Image Collection


## Project Explanation


A one-page Image Collection web application created with ReactJS. It retrieves images from Picsum Photos Service and presents them in a vertical grid format with authorship identification and instructive buttons for liking.


## Functions/Requirements


* Capture images via Picsum API.
* Show images in a vertical grid style.
* Name the creator for each image displayed.
* Create an option to like an image.
* Feature the number of likes with the initial count of zero.
* Start counting the likes at each click of the button.
* Use endless scrolling to load more content/pages.
* Access data from paged API feeds.


## Technologies Involved


* ReactJS
* JavaScript
* HTML / JSX
* CSS
* Picsum Photos API
* Font Awesome
* Vite


## API Used


https://picsum.photos/v2/list?page=1


The API returns images with their details including author name and link for downloading.


## Steps to Install and Use


1. Clone the repository onto the local machine.


2. Go to the local directory through VS Code.


3. Open a built-in terminal.


4. Use the following command to install dependencies:


   npm install


5. Start up the dev server by using the command as follows:


   npm run dev


6. Open the generated link from the terminal.

## Project Structure

```text
photo-gallery/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Note

Images are loaded from the Picsum Photos API. The number of likes is kept in React state but is not saved for any more time in any form.

![alt text](./src/assets/image.png)