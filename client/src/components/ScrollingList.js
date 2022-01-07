import { React, Fragment } from 'react'
import moment from 'moment';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ScrollingList = ({ listContents, noEdit }) => {
    return (
        <div>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 1000,
                    bgcolor: 'secondary.main',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
            >
                {listContents && listContents.map((val) => {
                    return (
                        <ListItem
                            secondaryAction={!noEdit &&
                                <Fragment>
                                    <IconButton edge="end" sx={{color:"white"}}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton edge="end" sx={{color:"white"}}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Fragment>
                            }>
                            <ListItemText primary={val.name} />
                            <ListItemText primary={val.amount} />
                            <ListItemText primary={moment(val.createdAt).format("DD/MM/YY")} />
                        </ListItem>);
                })}
            </List>
        </div>
    )
}

export default ScrollingList
