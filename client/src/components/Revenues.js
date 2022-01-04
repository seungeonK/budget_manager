import React, { useContext } from 'react'

import ListTemplate from './ListTemplate';

function Revenues() {
    const hardCodedRevenues = [
        {name:"Revenue 1", amount: 10, balance: 0, createdAt:"12/30/21"},
        {name:"Revenue 2", amount: 1000, balance: 0, createdAt:"12/30/21"},
        {name:"Revenue 3", amount: 50, balance: 0, createdAt:"12/30/21"},
        {name:"Revenue 4", amount: 3, balance: 0, createdAt:"12/30/21"},
        {name:"Revenue 5", amount: 70, balance: 0, createdAt:"12/30/21"},
        {name:"Revenue 6", amount: 100, balance: 0, createdAt:"12/30/21"},
        {name:"Revenue 7", amount: 100, balance: 0, createdAt:"12/30/21"},
    ];

    
    let total = 0;
    hardCodedRevenues.forEach(revenue => total += revenue.amount);

    return (
        <div>
            <ListTemplate 
            listName={`Total Revenues: ${total}`} 
            listContents={hardCodedRevenues}
            addButtonName={"Add Revenue"}
            redirect={"/addRevenue"}
            noEdit={false} 
            />
        </div>
    )
}

export default Revenues
