import { useState } from 'react'
import Header from './Header.jsx'
import Video from './Tiger.jsx'
import Button from './Button.jsx'


function App() {
  return(
    <>
    <div className='app-container'>
      <Header/>
      <Button/>
      <Video/>
    </div>
    </>
  );
}

export default App;
