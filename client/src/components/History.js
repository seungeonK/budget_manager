import {React, useContext} from 'react'
import ListTemplate from './ListTemplate';
import {HistoryContext} from '../context/HistoryProvider';


function History() {
    const { history } = useContext(HistoryContext);

    return (
        <div>
            <ListTemplate
                listName="History"
                listContents={history}
                addButtonName={"Add History"}>
            </ListTemplate>
        </div>
    )
}

export default History
