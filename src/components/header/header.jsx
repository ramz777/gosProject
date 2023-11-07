import './header.css'
import '../../images/logo.png'


const Header = () => {
    return(
        <div className="header">
            <div className="logoMain">
                <div className="logo">
                    <img alt="" src="https://parlamentchr.ru/wp-content/uploads/2012/11/gerb_chechni.png"/>
                </div>
                <div className="title">
                    <h4>Министерство экономического, территориального развития и торговли Чеченской Республики</h4>
                </div>
            </div>
            <div className="signIn">
                <button>Войти</button>
                <button>Зарегестрироваться</button>
            </div>
        </div>
    )
}

export default Header;