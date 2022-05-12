import React, {useContext} from 'react';
import chevron from '../assets/svg/chevron.svg'
import {Context} from '../index'
import {Tabs, Tab, Row, Pagination} from 'react-bootstrap'
import like from '../assets/svg/like.svg'
import dislike from '../assets/svg/dislike.svg'
import {observer} from 'mobx-react-lite'

const Seria = observer(() => {
    const {seria} = useContext(Context)

    const comments = sortComments(seria.comments)

    return (
        <>
            <div className="new_series_block search_box">
                <div className="history">
                    <div className="history_txt_block"><a href="#" className="history_txt">Новые серии<img src={chevron} className="chevron_svg"/></a></div>
                </div>
                <div className="new_series_txt" id="player_txt">{`${seria.seria.serial.name} ${seria.seria.season} сезон ${seria.seria.seria} серия \"${seria.seria.seriaName}\"`}</div>

                <Tabs style={{borderColor: "#4a4d4d"}} defaultActiveKey={seria.studios[0].id} id="uncontrolled-tab-example">
                    {seria.studios.map((item, index, arr) => 
                        <Tab key={item.id} eventKey={item.id} title={item.name}></Tab>
                    )}
                </Tabs>
                
                <video src={require("../assets/video/videoplayback.mp4")} className="video_block" controls="controls" type="video/mp4" poster={require("../assets/img/series/game_of_thrones_8_1.jpg")}/>
                <i className="seria_rate" data-star={seria.seria.rate/2}/>
                <div className="seria_recommended">
                <div className="description_name">Рекомендуем</div>
                <div className="popular_block">
                <div className="popular_block_list">
                    <div id="first_recomendation" className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../assets/img/serial_vertical/"+seria.recomended[0].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{seria.recomended[0].name}</li>
                            <li className="popular_text_box_num">{seria.recomended[0].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../assets/img/serial_vertical/"+seria.recomended[1].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{seria.recomended[1].name}</li>
                            <li className="popular_text_box_num">{seria.recomended[1].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../assets/img/serial_vertical/"+seria.recomended[2].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{seria.recomended[2].name}</li>
                            <li className="popular_text_box_num">{seria.recomended[2].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../assets/img/serial_vertical/"+seria.recomended[3].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{seria.recomended[3].name}</li>
                            <li className="popular_text_box_num">{seria.recomended[3].janre.name}</li>
                        </div>
                    </div>
                    <div className="popular_position recomandation_pos">
                        <div className="popular_icon_box">
                            <a href=""><img className="popular_icon_img" src={require("../assets/img/serial_vertical/"+seria.recomended[4].img)}/></a>
                        </div>
                        <div className="popular_text_box">
                            <li className="popular_text_box_name">{seria.recomended[4].name}</li>
                            <li className="popular_text_box_num">{seria.recomended[4].janre.name}</li>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                <div className="description_block">
                    <div className="description_name">Описание</div>
                    <div className="description_txt">{seria.seria.description}</div>
                </div>
                <div className="comment_box">
                    <div className="comment_name">Комментарии</div>
                    <table className="comments_table">
                        <thead><tr></tr></thead>
                        <tbody>
                            {comments.map((item) => {
                                return <tr key={item.id} className="comment_row">
                                <td className="comment_av">
                                    <img className="comment_avatar" src={require('../assets/img/user/' + item.avatar)}/>
                                </td>
                                <td className="comment_col">
                                    <div>
                                        <h6 className="comment_author_name">{item.author.name}</h6>
                                        <span className="comment_date">{`${item.date.day} ${item.date.month} ${item.date.year} ${getTime(item.date.seconds)}`}</span>
                                    </div>
                                    <span className="comment_text">{item.text}</span>
                                    <div className="likes_block">
                                        <a href=""><img src={like} className="like_svg"/></a>
                                        <span>{item.likes}</span>
                                        <a href=""><img src={dislike} className="dislike_svg"/></a>
                                        <span>{item.dislikes}</span>
                                    </div>
                                </td>
                                </tr>
                            })}
                        </tbody>
                    </table>   
                </div>
            </div>
        </>
    );
})

function sortComments(comments){
    let months = new Map()
    months.set("января", 1).set("февраля", 2).set("марта", 3).set("апреля", 4).set("мая", 5).set("июня", 6)
        .set("июля", 7).set("августа", 8).set("сентября", 9).set("октября", 10).set("ноября", 11).set("декабря", 12)

    let sortedComments = comments.slice()

    sortedComments.sort((a, b) => {
        if(a.date.year !== b.date.year){
            return b.date.year - a.date.year
        }
        if(a.date.month != b.date.month){
            let aMonth = 0, bMonth = 0
            for (var [key, value] of months) {
                if(a.date.month === key){aMonth = value}
                if(b.date.month === key){aMonth = value}
                if(aMonth !== 0 && bMonth !== 0){break}
            }
            return bMonth - aMonth
        }
        if(a.date.day == b.date.day){
            return b.date.seconds - a.date.seconds
        }
        return b.date.day - a.date.day
    })
    return sortedComments
}

function getTime(seconds){
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

export default Seria;