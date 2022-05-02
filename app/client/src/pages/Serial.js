import React, {useContext} from 'react';
import {Context} from '../index'
import {Navbar, Nav, Button, Container, Pagination} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import SeriesItem from '../components/SeriesItem'
import chevron from '../assets/chevron.svg'

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

export default Serial;