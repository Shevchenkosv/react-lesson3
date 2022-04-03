import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pages.css"

const Chat = () => {
    const [chats, setChats] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setChats(data))
    }, [])

    const deletChat = (id) => {
        const removeItem = chats.filter((item) => item.id !== id)
        setChats(removeItem)
    }

    const addItem = (value => {
        let copy = [...chats];
        copy = [...chats, { id: chats.length + 1, title: value }]
        setChats(copy);
    })

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(value)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                <button type="submit">Добавить</button>
            </form>
            {chats.map((item) => (
                <>
                    <h4 key={item.id}>
                        <Link to={`/posts/${item.id}`}>
                            {item.title}
                        </Link>
                    </h4>
                    <button onClick={() => deletChat(item.id)}>x</button>
                </>
            ))}
        </div>
    )
};

export default Chat;