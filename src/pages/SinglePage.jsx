import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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

const SinglePage = () => {
    const { id } = useParams()
    const [chat, setChat] = useState(chatList)

    useEffect(() => {
        fetch(`http://localhost:3000/chats/${id}`)
            .then(res => res.json())
            .then(data => setChat(data))
    }, [id])
    return (
        <div>
            {
                chat &&

                <>
                    <h1>chat: {chat.textChat}</h1>
                    <h2>name: {chat.name}</h2>
                </>
            }
        </div>


    );
}
export default SinglePage;