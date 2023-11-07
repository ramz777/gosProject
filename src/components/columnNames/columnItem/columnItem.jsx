
import { useRef, useState } from 'react';
import '../columnNames.css'


const ColumnItem = (props) => {


    return(
            <tr>
                    <td>{props.title}</td>
                    <td>{props.user}</td>
                    <td>{props.period}</td>
                    <td>
                        <ul> 
                            {props.eventList.map(item => {return (
                                <li>{item.titleEvent}</li>
                            )})}    
                        </ul>
                    </td>
                    <td>{props.price}</td>
                </tr>
        
    )
}

export default ColumnItem;