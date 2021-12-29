import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
    const { data, index, style } = props;

    const item = data[index];

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemText primary={`Item ${item.name}`} />
        </ListItem>
    );
}

// const ItemRerenderer = ({ data, index, style }) => (
//     <div style={style}>
//         {console.log(data)}
//         {data[index]}
//     </div>
// );

function VirtualizedList() {
    const lst = ['a', 'b', 'c', 'd', 'e'];
    return (
        <Box
            sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <FixedSizeList
                height={400}
                width={360}
                itemSize={46}
                itemCount={lst.size}
                itemData={lst}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
}

export default VirtualizedList;