import React, {useContext} from 'react';
import {Context} from '../index'
import {Navbar, Nav, Button, Container, Image} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import icon from '../assets/icon.jpg'
import pic from '../assets/pic.jpg'
import svg from '../assets/svg/person.svg'
import {useLocation} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const authBtn = {borderColor: "#ffffff", color: "#ffffff"}
    const location = useLocation().pathname
    
    return (
        <div id="nav">
            <div className="header_line"></div>
            <header className="header">
                <div className="header_content">
                    <img className="header_icon" src={icon}/>
                    <div className="fanserials_txt">
                        <div className="f_txt">f</div>
                    <div className="anserials_txt">anserials</div>
                    </div>
                    <ul className="menu">
                        <li className="new_series"><a href="/series/list" className="no_decor">Новые серии</a></li>
                        <li className="popular"><a href="/popular/list" className="no_decor">Популярное</a></li>
                        <li className="news"><a href="/newest/list" className="no_decor">Новинки</a></li>
                        <li className="all"><a href="" className="no_decor">Все сериалы</a></li>
                        <li className="enter"><a href="/orders/list" className="no_decor">Заказы</a></li>
                        <li className="search"><a href="/search/query" className="no_decor">Поиск</a></li>
                        {user.isAuth.isSimp || user.isAuth.isModerator ?
                            <a href="/user/simp/account"><li className="enter"><Button variant={"outline-dark"} style={authBtn}>Аккаунт<img src={svg} className="pers_svg"/></Button></li></a>
                            :
                            (user.isAuth.isAdmin) ?
                            <a href="/user/admin/adding"><li className="enter"><Button variant={"outline-dark"} style={authBtn}>Админ<img src={svg} className="pers_svg"/></Button></li></a>
                            :
                            <a href="/user/login"><li className="enter"><Button variant={"outline-dark"} style={authBtn}>Вход<img src={svg} className="pers_svg"/></Button></li></a>
                        }
                    </ul>
                </div>
            </header>
            {location !== '/user/login' && location !== '/user/registrate' && 
            <div className="pic_block">
                <img className="pic_class" src={pic}/>
            </div>
            }
        </div>
    );
});

export default NavBar;