	import React, { useState } from "react";
import './App.css';
// import Header from './components/Header';


const emojiDictionary = {
  "😜": 'Naughty',
  "😂": 'Laughing',
  "😋": 'Tasty',
  "🤒": 'Fever',
  "😴": 'Sleeping',
  "😡": 'Angry'
};



function App() {


  const [emojiSearch, setEmoji] = useState('');

                        const emojiHandler = (event) => {

                          let val = event.target.value;
                          let meaning = emojiDictionary[val];

                          if (meaning === undefined)
                            meaning = "We don't have this in our database";

                          setEmoji(meaning);
                        }

  let emojisWeHave = Object.keys(emojiDictionary);

  const emojiClicked = (emoji) =>{
    let meaning = emojiDictionary[emoji];
    setEmoji(meaning);
  }

  return (
    <div style={{ textAlign: 'center' }} className='app' >
      <h1 >inside outtt!</h1>
      <input onChange={emojiHandler} placeholder="Enter emoji here" ></input>
      <h4> {emojiSearch}</h4>


      <h3>Emojis we know</h3> 
      {
        emojisWeHave.map((e) => {
          return <span onClick={ ()=> emojiClicked(e)}
           key={e} 
           style={{ fontSize: '2rem', padding: '0.7rem',
            cursor: 'pointer' }}
            >{e}</span>
        })
      }
    </div>
  );
}

export default App;
