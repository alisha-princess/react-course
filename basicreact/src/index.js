import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function myApp(){
  return(
    <>
    <h1>Custom App</h1>
    <p>A complete log of this run can be found in:
    </p>
    </>
  )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)
const anotherUser = " chai or react";
const reactElement = React.createElement(
  'a',//belly element
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  anotherUser
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
   // reactElement
    
);

