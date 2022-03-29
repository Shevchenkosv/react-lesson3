
import React, { useState, useEffect } from "react";
import Message from "./Message";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GutterlessList from "./ChatLists";
import './App.css';


function App() {
  const [messageList, SetMessageList] = useState([]);
  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'robot') {
      SetMessageList(
        (prev) => {
          let newMessageList = [...prev]
          newMessageList.push({ author: 'robot', text: 'Привет!' })
          return newMessageList
        }
      )
    }
  }, [messageList])
  return (

    <div className="App">
      <GutterlessList />
      {messageList.map((value, index) => {
        return (
          <Message author={value.author} text={value.text} key={index} />

        )
      })}

      <form className="send-form" action="#" onSubmit={(event) => {
        event.preventDefault();
        SetMessageList(prev => {
          let newMessageList = [...prev]
          newMessageList.push({ author: 'newAuthor', text: 'newText' })
          return newMessageList;
        });
      }}>
        <TextField
          id="outlined-multiline-static"
          label="Введите Ваше сообщение"
          placeholder="Message"
          multiline
          rows={4}
          autoFocus
          onChange={(text) => {
            text.newText = text.target.value;
          }}

        />
        <TextField
          id="outlined-textarea"
          label="Ваше Имя"
          placeholder="Name"
          onChange={(author) => {
            author.newAuthor = author.target.value;
          }}
        />
        <Button type='submit' variant="outlined">Отправить</Button>
      </form >
    </div >
  );
}
export default App;