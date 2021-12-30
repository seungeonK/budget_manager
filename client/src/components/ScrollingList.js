import React from 'react'
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ScrollingList = ({ listContents }) => {
    return (
        <div>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 1000,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
            >
                {listContents.map((val) => {
                    return (<ListItem>
                        <ListItemText primary={val.name} />
                        <ListItemText primary={val.amount} />
                        <ListItemText primary={val.createdAt} />
                        <ListItemButton>
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>);
                })}
            </List>
        </div>
    )
}

export default ScrollingList
