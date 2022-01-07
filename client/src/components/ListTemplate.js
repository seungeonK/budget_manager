import { React } from 'react'
import { Stack, IconButton, Typography, Card, Box, Container, CardContent, CardHeader } from '@mui/material';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ScrollingList from './ScrollingList';
import AddCircle from '@material-ui/icons/AddCircle';

//if noEdit is true, the add, edit and delete buttons will not display
function ListTemplate({ 
    listName, 
    listContents, 
    redirect, 
    noEdit = true, 
    total = 0, 
    noTotal = true, 
    labelBackgroundColor="white"
}) {
    return (
        <Card
            variant="outlined"
            sx={{
                bgcolor: 'secondary.main'
            }}
        >
            <CardHeader
                title={listName.toUpperCase()}
                sx={{ 
                    borderBottom: 1,
                    borderColor: labelBackgroundColor
                }}
                titleTypographyProps={{
                    "variant": "h5", 
                    "component": "h3", 
                    "align":"center"
                }}
            >
            </CardHeader>
            <CardContent>
                <Box sx={{ p: 2 }}>
                    <Stack spacing={2}>
                        {!noTotal &&
                            <div>
                                <Typography
                                    align="center"
                                    variant='h6'
                                    component={"h3"}
                                >
                                    {"Total".toUpperCase()}
                                </Typography>
                                <Typography
                                    align="center"
                                    variant='h4'
                                    component={"h3"}
                                >
                                    ${total}
                                </Typography>
                            </div>
                        }
                        {!noEdit &&
                            <div>
                                <Typography
                                    align="center"
                                >
                                    <IconButton
                                        href={redirect}
                                        color="primary"
                                    >
                                        <AddCircleIcon fontSize="large" />
                                    </IconButton>
                                </Typography>
                            </div>
                        }
                        <div>
                            <ScrollingList listContents={listContents} noEdit={noEdit} />
                        </div>
                    </Stack>
                </Box>
            </CardContent>

        </Card>
    )
}

export default ListTemplate