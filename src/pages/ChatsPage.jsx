import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import Message from "./Message";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './pages.css'




const chatList = [
    {
        id: 1,
        name: 'Михаил',
        textChat: 'Hello'
    },
    {
        id: 2,
        name: 'Виталий',
        textChat: 'Hi'
    },
    {
        id: 3,
        name: 'Андрей',
        textChat: 'Good morning!'
    },
]

function ChatsPage() {
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
    }, [messageList]);
    const [objArr, setValue] = useState(chatList);
    return < div className="Chatspage" >

        {
            messageList.map((value, index) => {
                return (
                    <Message author={value.author} text={value.text} key={index} />

                )
            })
        }

        < form className="send-form" action="#" onSubmit={(event) => {
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

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {objArr.map((obj) => (
                <ListItem
                    key={obj.id}
                    disableGutters
                    secondaryAction={
                        <IconButton>
                            <CommentIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary={`${obj.name}, ${obj.textChat}`} />
                </ListItem>
            ))}
        </List>
    </div >
}
<ChatsPage />


export default ChatsPage;