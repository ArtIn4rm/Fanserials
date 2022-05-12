import React, {useContext, useEffect} from 'react';
import {Context} from '../../index'
import {Pagination} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import SeriesItem from '../../components/SeriesItem'
import chevron from '../../assets/svg/chevron.svg'

const Series = observer(() => {
    const {series} = useContext(Context)

    /*useEffect(() => {

    }, [])*/

    const seriesByDate = findDates(series.series)

    return (
        <div id="new_series">
            <div className="new_series_block">
            <div className="history">
                <div className="history_txt_block"><a href="#" className="history_txt">Новые серии<img src={chevron} className="chevron_svg"/></a></div>
            </div>
            <div className="new_series_txt">Новые серии</div>
            <ul className="categories_line">
                <li className="categories_field"> <a href="#" className="categories_text" id="first_category">Все категории</a></li>
                <li className="categories_field"> <a href="#" className="categories_text" id="second_category">Сериалы</a></li>
                <li className="categories_field"> <a href="#" className="categories_text" id="third_category">Мультсериалы</a></li>
                <li className="categories_field"> <a href="#" className="categories_text" id="fourth_category">Аниме</a></li>
            </ul>
            <div className="date_line">
                <div className="date">{`${seriesByDate[0][0].date.day} ${seriesByDate[0][0].date.month} ${seriesByDate[0][0].date.year}`}</div>
            </div>
            <div className="serials_block">
                {seriesByDate.map((items, index, arr) => {
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
                                <div className="date">{`${arr[index+1][0].date.day} ${arr[index+1][0].date.month} ${arr[index+1][0].date.year}`}</div>
                            </div>
                            }
                        </React.Fragment>
                    )
                })}
            </div>
            <div className="more_serials">
                <div className="more_txt_block"><a href="#" className="more_txt">Показать ещё серии</a></div>
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
        </div>
        </div>
    );
});

function findDates(series){
    let months = new Map()
    months.set("января", 1).set("февраля", 2).set("марта", 3).set("апреля", 4).set("мая", 5).set("июня", 6)
        .set("июля", 7).set("августа", 8).set("сентября", 9).set("октября", 10).set("ноября", 11).set("декабря", 12)

    let sortedSeries = series.slice()

    sortedSeries.sort((a, b) => {
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
        return b.date.day - a.date.day
    })

    let seriesByDates = []
    let buff = []
    sortedSeries.map((value, index, arr) => {
        if(index == 0){
            buff.push(value)
        } else {
            if(arr[index].date.day === arr[index-1].date.day && arr[index].date.month === arr[index-1].date.month &&
                arr[index].date.year === arr[index-1].date.year){
                buff.push(value)
            } else {
                seriesByDates.push(buff)
                buff = []
                buff.push(value)
            }
        }
        if(index == arr.length-1){
            seriesByDates.push(buff)
        }
    })

    return seriesByDates
}

export default Series;