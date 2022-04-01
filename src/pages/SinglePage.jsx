import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


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
    const chatElement = chatList.find(chat => chat.id === +id)
    return (
        <div>

            <h1>chat: {chatElement.textChat}</h1>
            <h2>name: {chatElement.name}</h2>

        </div>


    );
}
export default SinglePage;