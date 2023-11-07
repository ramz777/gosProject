import { useState } from "react";
import '../targetStatus.css'



const Status = ({item, i, index}) => {

    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + String(date.getFullYear() + 'г.');

    const [color, setColor] = useState('#fa707a');

    const [nameEvent, setNameEvent] = useState(10);
    const handleChangeEvent = (e) => {
        setNameEvent(e.target.value);
        if (+e.target.value < 25){
            setColor('#fa707a')
        } else if(+e.target.value > 24 && +e.target.value < 50){
            setColor('#ecf56c')
        }  else if(+e.target.value > 49 && +e.target.value < 75){
            setColor('#85ff87')
        } else{
            setColor('#2a822b')
        }
    }
    return (
        
            <> <tr>
                <td className='tdLeft'>{`${i+1}. ${index+1} `  + item.titleEvent}</td>
                <td>{output}</td>
                <td className="kv">
                    <div>1-й квартал</div>
                    <div>2-й квартал</div>
                    <div>3-й квартал</div>
                    <div>4-й квартал</div>
                </td>
                <td>
                    <div className='red'>0 - 25</div>
                    <div className='yellow'>25 - 50</div>
                    <div className='green'>50 - 75</div>
                    <div className='green1'>75 - 100</div>
                </td>
                <td className="kv">
                    <div>{item.priceFirstQuarter}</div>
                    <div>{item.priceSecondQuarter}</div>
                    <div>{item.priceThirdQuarter}</div>
                    <div>{item.priceFourthQuarter}</div>
                </td>
                <td> <input onChange={handleChangeEvent} value={nameEvent} className='inp' type="text" /> </td>
            </tr>
                <tr>
                    <td colspan="6"> <div className='progressBarBlock'><div className='progressBar' style={{ width: `${nameEvent}%`, backgroundColor: `${color}`, height: "10px" }} ></div></div> </td>
                </tr></>
        
    );
};

export default Status;