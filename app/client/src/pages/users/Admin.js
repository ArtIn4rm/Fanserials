import React, {useContext} from 'react';
import chevron from '../../assets/svg/chevron.svg'
import {Context} from '../../index'
import exit from '../../assets/svg/exit.svg'
import cross from '../../assets/svg/cross.svg'
import check from '../../assets/svg/check.svg'

const Admin = () => {
    let {admin} = useContext(Context)
    let ordersSorted = sortDate(admin.orders)

    return (
        <>
            <div id="new_series">
                <div className="new_series_block">

                    <div className="history">
                        <div className="history_txt_block"><a href="#" className="history_txt">Новые серии<img src={chevron} className="chevron_svg"/></a></div>
                    </div>
                    <div className="new_series_txt">Админ</div>

                    <div className="ava_file_form admin_btn">
                        <button className="account_buttons admin_btn">Добавить серию</button>
                        <button className="account_buttons">Добавить сериал</button>
                        <button className="account_buttons">Выйти<img className="exit_svg"src={exit}/></button>
                    </div>

                    <table className="orders_table">
                        <thead><tr></tr></thead>
                        <tbody>
                        {ordersSorted.map((value) => 
                            <tr className="order_row admin_order_row">
                                <td className="order_status">
                                    <button><img src={check} className="exclamation_svg admin_order_status"/></button>
                                </td>
                                <td className="order_body">{value.query}</td>
                                <td className="order_date"><span className="order_date">{`${value.date.day} ${value.date.month} ${value.date.year}`}</span></td>
                            </tr>
                        )}
                        </tbody>
                    </table>



                </div>
            </div>
        </>
    );
};

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

export default Admin;