import React, {useState} from 'react'

 function CardData({handleTitleChange, handleTextChange, title,text}) {
   
  return (
    <div>
        <input type='text' value={title} onChange={handleTitleChange}/>
      <input type='text' value={text} onChange={handleTextChange}/>
    </div>
  )
}

export default CardData
