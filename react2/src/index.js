import React from 'react';
import ReactDOM from 'react-dom/client';
import Box from './Box'

 const Demo  =()=>{
  return(
    <>
    <h1>Sourabh</h1>
    </>
  )
 }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1>Hello</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab in ad reiciendis sunt distinctio pariatur velit, consequatur fugiat accusantium error quas adipisci dolorem beatae sint enim et, optio a commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ut facere corrupti repellat enim aperiam, iusto dolorem quibusdam perferendis reprehenderit officia distinctio impedit, alias quisquam provident, excepturi nisi adipisci voluptate.</p>
  <Demo/>
  <Box/>
  </>
  
);

