import React, { useState } from "react";
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
];

export default function SinglePage() {
    const { chatId } = useParams()
    const [chats, setChats] = useState(chatList);

    return (


        <div>

            <h1>chat:{chats[chatId].textChat}</h1>



        </div>


    );
}