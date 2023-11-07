import { useState } from 'react';
import { columnDate } from '../columnNames/columnNames';
import './targetStatus.css';
import TargetStatusItem from './targetStatusItem/targetStatusItem';

const TargetStatus = () => {

    

    

    return (
        <div className="targetStatus">
            <table>
                <tr className='titleColumn'>
                    <th>Цель мероприятия</th>
                    <th>Фактическая дата</th>
                    <th>Квартал</th>
                    <th>Индикаторы прогресса выполнения цели</th>
                    <th>Бюджет на квартал</th>
                    <th>Указать процент выполнения</th>
                </tr>   
                
                {columnDate.map((item, i) => <TargetStatusItem  eventList={item.eventList} i={i}/>)}
            </table>
            
        </div>
    )
}


export default TargetStatus;