import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

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

function GutterlessList() {
    const [objArr, setValue] = useState(chatList);
    const result = objArr.map((obj) => {
        return <p key={obj.id}>
            {obj.name}{obj.textChat}
        </p>
    });

    return <div>
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

export default GutterlessList;