import React, {useContext, useState} from 'react';
import chevron from '../../assets/svg/chevron.svg'
import {observer} from 'mobx-react-lite'
import {Context} from '../../index'
import edit from '../../assets/svg/edit.svg'
import award from '../../assets/svg/award.svg'
import exit from '../../assets/svg/exit.svg'
import ban from '../../assets/svg/ban.svg'
import ChangeName from '../../components/modal/ChangeName'
import BanSimp from '../../components/modal/BanSimp'
import {useLocation} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const Account = observer(() => {
    let {account, user} = useContext(Context)
    const [changeNameVisible, setChangeNameVisible] = useState(false)
    const [banSimpVisible, setBanSimpVisible] = useState(false)
    const url = useLocation().pathname
    let history = useHistory()

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false, user.user.role)
        localStorage.removeItem('token')
        history.push('/series/list')
    }

    return (
        <>
            <div id="new_series">
                <div className="new_series_block">

                    <div className="history">
                        <div className="history_txt_block"><a href="#" className="history_txt">Новые серии<img src={chevron} className="chevron_svg"/></a></div>
                    </div>
                    <div className="new_series_txt">Аккаунт</div>
                    <div className="account_head">
                        <img className="account_avatar" src={require('../../assets/img/user/' + account.account.avatar)}/>
                        <div className="account_user_info">
                            <table className="account_user_table">
                                <thead><tr></tr></thead>
                                <tbody>
                                    <tr className="username_row">
                                        <td className="username_head">Имя пользователя:</td>
                                        <td className="username_column">{account.account.name}</td>
                                        <td onClick={(e) => {setChangeNameVisible(true)}} className="username_edit_col">
                                            <a><img className="username_edit_svg" src={edit}/></a>
                                        </td>
                                    </tr>
                                    <tr className="email_row">
                                        <td className="email_head">Email:</td>
                                        <td className="email_column">{account.account.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <span className="ava_file_txt">Выберите новую аватарку:</span>
                            <div className="ava_file_form">
                                <input className="ava_file_input" name="avatar_file" type="file"/>
                                <button className="ava_file_submit">Подтвердить</button>
                            </div>
                            <div className="ava_file_form">

                                {user.isAuth.isModerator ? 
                                <button onClick={() => setBanSimpVisible(true)} className="account_buttons">Забанить пользователя<img className="ban_svg" src={ban}/></button>
                                :
                                <button className="account_buttons">Отправить заявку на модератора<img className="award_svg" src={award}/></button>
                                }
                                <button className="account_buttons" onClick={() => logout()}>Выйти<img className="exit_svg"src={exit}/></button>
                            </div>
                        </div>
                    </div>






                <div className="account_recommend">Рекомендуем</div>
                <div className="popular_block" style={{height: "400px"}}>
                <div className="popular_block_list">
                    <div id="first_recomendation" className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.recomended[0].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.recomended[0].name}</li>
                            <li className="popular_text_box_num">{account.recomended[0].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.recomended[1].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.recomended[1].name}</li>
                            <li className="popular_text_box_num">{account.recomended[1].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.recomended[2].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.recomended[2].name}</li>
                            <li className="popular_text_box_num">{account.recomended[2].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.recomended[3].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.recomended[3].name}</li>
                            <li className="popular_text_box_num">{account.recomended[3].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.recomended[4].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.recomended[4].name}</li>
                            <li className="popular_text_box_num">{account.recomended[4].janre.name}</li>
                        </div>
                    </div>
                </div>
                <div class="line_between_account"></div>
                </div>



                <div className="account_recommend">Недавно смотрели</div>
                <div className="popular_block" style={{height: "500px"}}>
                <div className="popular_block_list">
                    <div id="first_recomendation" className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.last[0].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.last[0].name}</li>
                            <li className="popular_text_box_num">{account.last[0].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.last[1].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.last[1].name}</li>
                            <li className="popular_text_box_num">{account.last[1].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.last[2].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.last[2].name}</li>
                            <li className="popular_text_box_num">{account.last[2].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.last[3].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.last[3].name}</li>
                            <li className="popular_text_box_num">{account.last[3].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../../assets/img/serial_vertical/"+account.last[4].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{account.last[4].name}</li>
                            <li className="popular_text_box_num">{account.last[4].janre.name}</li>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                
            </div>

            <ChangeName show={changeNameVisible} onHide={() => setChangeNameVisible(false)}/>
            <BanSimp show={banSimpVisible} onHide={() => setBanSimpVisible(false)}/>
        </>
    );
});

export default Account;