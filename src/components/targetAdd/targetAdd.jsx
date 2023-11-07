import './targetAdd.css'
import { columnDate } from '../columnNames/columnNames';
import { useState } from 'react';
import { renderEntireTree } from '../..';

const TargetAdd = () => {

    const [name, setName] = useState();
    const [selectName, setSelectName] = useState();

    const selectHandleChange = (e) => {
        setSelectName(e.target.value)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const addEvent = () => {
        let a = columnDate.find(item => {
            return item.title == selectName;
        })
        if (a) {
            a.eventList.push({titleEvent: name})
        }

        renderEntireTree()
        
    }


    
    return (
        <div className="targetAdd">
            <h6>Добавить новую цель мероприятия</h6>
            <div className="main">
                <input onChange={handleChange} value={name} className='input' type="text" placeholder='Цель мероприятия' />
                <select onChange={selectHandleChange} name="name" value={selectName}>
                    <option value="e">Выберите основное меропритие</option>
                    {/* {columnDate.map(item => <option value={selectName}>{item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}</option>)} */}
                    {columnDate.map(item => <option value={item.title}>{item.title}</option>)}
                </select>
                <button onClick={addEvent} className='btn'>Добавить</button>
            </div>
        </div>
    )
}

export default TargetAdd;