import ColumnNames from '../columnNames/columnNames';
import Header from '../header/header'
import TargetAdd from '../targetAdd/targetAdd';
import TargetStatus from '../targetStatus/targetStatus';
import './app.css'

const App = (props) =>  {

    return(
        <div className="app">
            <Header/>
            <ColumnNames/>
            <TargetAdd/>
            <TargetStatus/>
        </div>
    )
}

export default App;