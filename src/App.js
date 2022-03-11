
import { useState } from 'react';
import './App.css';
import Card from './Card';
import CardData  from './CardData'
function App() {

  const [title, setTitle] = useState(localStorage.getItem('title'))
  const [text, setText] = useState(localStorage.getItem('text'))

 const handleTitleChange = event => {
   setTitle(event.target.value)
   localStorage.setItem('title', event.target.value)
  }
 const handleTextChange = event => {

   setText(event.target.value)
   localStorage.setItem('text', event.target.value)
  }


  return (
    <div className="App">
      <CardData handleTitleChange ={handleTitleChange} handleTextChange = {handleTextChange} title={title} text={text} />

      <Card title={title} text={text}/>
    </div>
  );
}

export default App;
