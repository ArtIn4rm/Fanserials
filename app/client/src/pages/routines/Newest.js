import React, {useContext} from 'react';
import {Context} from '../../index'
import chevron from '../../assets/svg/chevron.svg'
import NewestItem from '../../components/NewestItem'
import {observer} from 'mobx-react-lite'

const Newest = observer(() => {
    let {newest} = useContext(Context)
    let newestSorted = findMonths(newest.newest)

    return (
        <>
            <div id="new_series">
            <div className="new_series_block">
            <div className="history">
                <div className="history_txt_block"><a href="#" className="history_txt">Новые серии<img src={chevron} className="chevron_svg"/></a></div>
            </div>
            <div className="newest_series_txt">Новинки</div>

            <div className="newest_date_line">
                <div className="newest_date">{`Новинки ${newestSorted[0][0].month}`}</div>
            </div>
            <div className="newest_block">
                {newestSorted.map((items, index, arr) => {
                    let buff = []

                    for(let i = 0; i < items.length; i+=4){
                        let itemsInLine = items.length - i;
                        buff.push(
                            <div className="newest_line">
                                <NewestItem key={arr[index][i].id} value={arr[index][i]}/>
                                {itemsInLine >= 2 && <NewestItem key={arr[index][i+1].id} value={arr[index][i+1]}/>}
                                {itemsInLine >= 3 && <NewestItem key={arr[index][i+2].id} value={arr[index][i+2]}/>}
                                {itemsInLine >= 4 && <NewestItem key={arr[index][i+3].id} value={arr[index][i+3]}/>}
                            </div>
                        )
                    }

                    return (
                        <>
                            {buff}
                            {index !== arr.length - 1 &&
                            <div className="newest_date_line; newest_not_first_date">
                                <div className="newest_date">{`Новинки ${arr[index+1][0].month}`}</div>
                            </div>
                            }
                        </>
                    )
                })}
            </div>

        </div>
        </div>
        </>
    );
})

function findMonths(newest){
    let months = new Map()
    months.set("января", 1).set("февраля", 2).set("марта", 3).set("апреля", 4).set("мая", 5).set("июня", 6)
        .set("июля", 7).set("августа", 8).set("сентября", 9).set("октября", 10).set("ноября", 11).set("декабря", 12)

    let sortedNewest = newest.slice()

    sortedNewest.sort((a, b) => {
        if(a.month != b.month){
            let aMonth = 0, bMonth = 0
            for (var [key, value] of months) {
                if(a.month === key){aMonth = value}
                if(b.month === key){aMonth = value}
                if(aMonth !== 0 && bMonth !== 0){break}
            }
            return bMonth - aMonth
        }
        return 0;
    })

    let seriesByMonths = []
    let buff = []
    sortedNewest.map((value, index, arr) => {
        if(index == 0){
            buff.push(value)
        } else {
            if(arr[index].month === arr[index-1].month){
                buff.push(value)
            } else {
                seriesByMonths.push(buff)
                buff = []
                buff.push(value)
            }
        }
        if(index == arr.length-1){
            seriesByMonths.push(buff)
        }
    })

    return seriesByMonths.reverse()
}

export default Newest;