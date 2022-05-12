import React, {useContext} from 'react'
import {Pagination, Row} from 'react-bootstrap'
import {Context} from '../../index'
import chevron from '../../assets/svg/chevron.svg'
import cross from '../../assets/svg/cross.svg'
import check from '../../assets/svg/check.svg'
import exclamation from '../../assets/svg/exclamation.svg'
import {observer} from 'mobx-react-lite'

const Orders = observer(() => {
    let {orders} = useContext(Context)
    let ordersSorted = sortDate(orders.orders)

    return (
        <>
        <div id="new_series">
            <div className="new_series_block">
            <div className="history">
                <div className="history_txt_block"><a href="#" className="history_txt">Новые серии<img src={chevron} className="chevron_svg"/></a></div>
            </div>
            <div className="new_series_txt">Заказы</div>
            <Row className="mt-3 justify-content-center">
                <img src={exclamation} className="exclamation_svg"/>
                <span className="orders_txt"> - новый заказ</span>
                <img src={check} className="check_svg"/>
                <span className="orders_txt"> - заказ одобрен</span>
                <img src={cross} className="cross_svg"/>
                <span className="orders_txt"> - заказ отклонен</span>
            </Row>

            <table className="orders_table">
                <thead><tr></tr></thead>
                <tbody>
                    {ordersSorted.map((value) => 
                        <tr className="order_row">
                            <td className="order_status">
                                <img src={value.status === 'Accepted' ? check : (value.status === 'Rejected' ? cross : exclamation)} className="exclamation_svg"/>
                            </td>
                            <td className="order_body">{value.query}</td>
                            <td><span className="order_author">{value.author.name}</span></td>
                            <td className="order_date"><span className="order_date">{`${value.date.day} ${value.date.month} ${value.date.year}`}</span></td>
                            <td className="order_likes"><button className="order_like_button">{value.likes}</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

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
        </>
    );
})

function sortDate(orders){
    let months = new Map()
    months.set("января", 1).set("февраля", 2).set("марта", 3).set("апреля", 4).set("мая", 5).set("июня", 6)
        .set("июля", 7).set("августа", 8).set("сентября", 9).set("октября", 10).set("ноября", 11).set("декабря", 12)

    let sortedOrders = orders.slice()

    sortedOrders.sort((a, b) => {
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
            return aMonth - bMonth
        }
        return b.date.day - a.date.day
    })

    return sortedOrders
}

export default Orders;