import React from "react";
import { useSelector } from "react-redux";
import "./pages.css"


const Profile = () => {
    const contacts = useSelector((state) => {
        return state.contacts
    })
    const isActive = useSelector(state => {
        return state.isActive
    })
    return (
        <div >
            <h1>Профиль</h1>
            {contacts.map((contacts) => (
                <li className="profile" key={contacts.id}>
                    {contacts.name}
                </li>
            ))}

            <input className="profileChek" type="chekbox" checked={isActive ? 'red' : 'blue'} />

        </div>
    );
};

export default Profile;