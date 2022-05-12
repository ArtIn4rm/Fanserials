import React, {useContext, useState} from 'react';
import chevron from '../../assets/svg/chevron.svg'
import {Context} from '../../index'
import exit from '../../assets/svg/exit.svg'
import cross from '../../assets/svg/cross.svg'
import check from '../../assets/svg/check.svg'
import {useHistory} from 'react-router-dom'
import AddStudio from '../../components/modal/AddStudio'
import AddSeria from '../../components/modal/AddSeria'
import AddSerial from '../../components/modal/AddSerial'
import {observer} from 'mobx-react-lite'

const Admin = observer(() => {
    let {admin, user} = useContext(Context)
    let ordersSorted = sortDate(admin.orders)
    let querySorted = sortDate(admin.query)
    const [addStudioVisible, setAddStudioVisible] = useState(false)
    const [addSeriaVisible, setAddSeriaVisible] = useState(false)
    const [addSerialVisible, setAddSerialVisible] = useState(false)
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
                    <div className="new_series_txt">Админ</div>

                    <div className="ava_file_form admin_btn">
                        <button className="account_buttons admin_btn" onClick={() => setAddStudioVisible(true)}>Добавить озвучку</button>
                        <button className="account_buttons" onClick={() => setAddSeriaVisible(true)}>Добавить серию</button>
                        <button className="account_buttons" onClick={() => setAddSerialVisible(true)}>Добавить сериал</button>
                        <button className="account_buttons" onClick={() => logout()}>Выйти<img className="exit_svg"src={exit}/></button>
                    </div>

                    <div className="new_series_txt orders_txt_admin">Заказы</div>
                    <div className="admin_orders_block">
                    <table className="orders_table admin_orders_table">
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

                    <div className="new_series_txt orders_txt_admin">Заявки</div>
                    <div className="admin_orders_block">
                    <table className="orders_table admin_orders_table">
                        <thead><tr></tr></thead>
                        <tbody>
                        {querySorted.map((value) => 
                            <tr className="order_row admin_order_row">
                                <td className="order_status" style={{display: 'flex'}}>
                                    <button><img src={check} className="exclamation_svg admin_order_status"/></button>
                                    <button><img src={cross} className="exclamation_svg admin_rej_status"/></button>
                                </td>
                                <td className="order_body admin_query_username">{value.user.name}</td>
                                <td className="order_body admin_query_email">{value.email}</td>
                                <td className="order_date"><span className="order_date">{`${value.date.day} ${value.date.month} ${value.date.year}`}</span></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    </div>
                    <div style={{height: "200px", position: "relative"}}></div>

                </div>
            </div>

            <AddStudio show={addStudioVisible} onHide={() => setAddStudioVisible(false)}/>
            <AddSeria show={addSeriaVisible} onHide={() => setAddSeriaVisible(false)}/>
            <AddSerial show={addSerialVisible} onHide={() => setAddSerialVisible(false)}/>
            
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

export default Admin;