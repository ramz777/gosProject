import '../targetStatus.css'
import Status from './status';


const TargetStatusItem = ({ eventList, i}) => {

    return (
        <>
           {eventList.map((item, index) => <Status item={item} i={i} index={index}/>)}
        </>
    );
};

export default TargetStatusItem;

