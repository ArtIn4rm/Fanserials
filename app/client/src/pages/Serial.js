import React, {useContext} from 'react';
import {Context} from '../index'
import {Row, Col, Button, Table, Pagination} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import SeriesItem from '../components/SeriesItem'
import chevron from '../assets/svg/chevron.svg'
import about from '../assets/svg/about.svg'
import cast from '../assets/svg/cast.svg'
import reverse from '../assets/svg/reverse.svg'
import domino from '../assets/svg/domino.svg'
import imdb from '../assets/svg/imdb.svg'

const Serial = observer(() => {
    const {serial} = useContext(Context)

    const seriesBySeason = findSeasons(serial.series)

    return (
        <div id="serial_block">
            <div className="new_series_block">
            <div className="history">
                <div className="history_txt_block"><a href="#" className="history_txt">Новые серии<img src={chevron} className="chevron_svg"/></a></div>
            </div>
            <div className="serial_panel">
                <Row>
                    <div>
                        <h3 className="serial_panel_name">{serial.serial.name}</h3>
                        <h6 className="serial_panel_txt">{`${serial.serial.original_name} (${serial.serial.starts_year}-${serial.serial.ends_year})`}</h6>
                    </div>
                    <div className="cast_block">
                        <a href="">
                            <img src={cast} className="cast_svg"/>
                            <span className="cast_txt">1 серия</span>
                        </a>
                    </div>
                    <div className="about_block">
                        <a href="">
                            <img src={about} className="about_svg"/>
                            <span className="about_txt">О сериале</span>
                        </a>
                    </div>
                </Row>
                <div className="serial_panel_line"/>
                <Row>
                    <div className="seasons_buttons_row">
                        {
                            seriesBySeason.map((items, index, arr) => 
                                <button className="season_button">{arr[arr.length-index-1][0].season}</button>
                            )
                        }
                    </div>
                    <button className="domino_button"><img src={domino} className="domino_svg"/></button>
                    <button className="reverse_button"><img src={reverse} className="reverse_svg"/></button>
                </Row>
            </div>
            <div className="date_line">
                <div className="date">{`${seriesBySeason[0][0].season} сезон`}</div>
            </div>
            <div className="serials_block">
                {seriesBySeason.map((items, index, arr) => {
                    let buff = []

                    for(let i = 0; i < items.length; i+=4){
                        let itemsInLine = items.length - i;
                        buff.push(
                            <div className="serial_line">
                                <SeriesItem key={arr[index][i].id} value={arr[index][i]}/>
                                {itemsInLine >= 2 && <SeriesItem key={arr[index][i+1].id} value={arr[index][i+1]}/>}
                                {itemsInLine >= 3 && <SeriesItem key={arr[index][i+2].id} value={arr[index][i+2]}/>}
                                {itemsInLine >= 4 && <SeriesItem key={arr[index][i+3].id} value={arr[index][i+3]}/>}
                            </div>
                        )
                    }

                    return (
                        <React.Fragment>
                            {buff}
                            {index !== arr.length - 1 &&
                            <div className="date_line; not_first_date">
                                <div className="date">{`${arr[index+1][0].season} сезон`}</div>
                            </div>
                            }
                        </React.Fragment>
                    )
                })}
            </div>
            <div className="next_pages">
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            </div>
                <div className="serial_panel about_info">
                    <div className="upper_about">
                        <Row className="upper_about_row">
                            <img className="serial_about_img" src={require("../assets/img/serial_horizontal/"+serial.serial.img)}/>
                            <div className="about_info_block">
                                <h6 className="about_info_title">{`Подробнее о сериале \"${serial.serial.name}\"`}</h6>
                                <div className="about_info_table_block">
                                <table className="about_table">
                                    <thead><tr></tr></thead>
                                    <tbody>
                                        <tr className="about_row">
                                            <td className="about_first_col">Оригинальное:</td>
                                            <td className="about_second_col">{serial.serial.original_name}</td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Рейтинг:</td>
                                            <td className="about_second_col"><img src={imdb} className="imdb_svg"/><span className="imdb_rate">{serial.serial.imdb_rate}</span></td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Наш рейтинг:</td>
                                            <td className="about_second_col"><i data-star={serial.serial.rate/2}/></td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Статус:</td>
                                            <td className="about_second_col">{serial.serial.status}</td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Год:</td>
                                            <td className="about_second_col">{`${serial.serial.starts_year} - ${serial.serial.ends_year} 
                                                (${(seriesBySeason[0][0].season > seriesBySeason[seriesBySeason.length-1][0].season) ? 
                                                    seriesBySeason[0][0].season : seriesBySeason[seriesBySeason.length-1][0].season} сезон)`}</td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Страна:</td>
                                            <td className="about_second_col">{serial.serial.country}</td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Канал:</td>
                                            <td className="about_second_col">{serial.serial.tv_chanel}</td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Жанр:</td>
                                            <td className="about_second_col">{getJanres(serial.serial.janre)}</td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Категория:</td>
                                            <td className="about_second_col">{serial.serial.category.name}</td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Актеры:</td>
                                            <td className="about_second_col">{serial.serial.actors}</td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Режисcер:</td>
                                            <td className="about_second_col">{serial.serial.director}</td>
                                        </tr>
                                        <tr className="about_row">
                                            <td className="about_first_col">Сценарий:</td>
                                            <td className="about_second_col">{serial.serial.scenarists}</td>
                                        </tr>
                                        <tr id="last_about_row" className="about_row">
                                            <td className="about_first_col">Продюссеры:</td>
                                            <td className="about_second_col">{serial.serial.producer}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className="serial_panel_line"/>
                    <div className="descr_block">
                        <h4 className="watch_onlain_label">{`Смотреть сериал \"${serial.serial.name}\" онлайн`}</h4>
                        <span>{serial.serial.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
});

function findSeasons(series){
    let sortedSeries = series.slice()

    sortedSeries.sort((a, b) => b.season - a.season)

    let seriesBySeasons = []
    let buff = []
    sortedSeries.map((value, index, arr) => {
        if(index == 0){
            buff.push(value)
        } else {
            if(arr[index].season === arr[index-1].season){
                buff.push(value)
            } else {
                seriesBySeasons.push(buff)
                buff = []
                buff.push(value)
            }
        }
        if(index == arr.length-1){
            seriesBySeasons.push(buff)
        }
    })

    seriesBySeasons.map((value) => {value.sort((a, b) => b.seria - a.seria)})

    return seriesBySeasons
}

function getJanres(janres){
    let parts = []
    janres.slice().map((item) => parts.push(`${item.name}`))
    return parts.join(', ');
}

export default Serial;