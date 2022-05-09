import React, {useContext} from 'react';
import {Context} from '../../index'
import {Form, Row} from 'react-bootstrap'
import chevron from '../../assets/svg/chevron.svg'

const Search = () => {
    const {matches} = useContext(Context)
    let formStyle = {backgroundColor: "#272929", borderColor: "#ffffff", color: "#ffffff", width: 1200}
    console.log(matches)

    return (
        <>
        <div className="new_series_block; search_box">
            <div className="history">
                <div className="history_txt_block"><a href="#" className="history_txt">Новые серии<img src={chevron} className="chevron_svg"/></a></div>
            </div>
            <div className="new_series_txt" id="search_txt">Поиск</div>
            <Form className="d-flex flex-column">
                    <Form.Control
                    style={formStyle}
                    className="mt-3 mr-auto ml-auto"
                    placeholder="Введите запрос"/>
            </Form>
            <div className="search_button">
                Начать поиск
            </div>
            {matches.matches.map((item, index, arr) => 
            <>
                <div key={item.id} className="line_between"></div>
                <div className="search_serial_block">
                    <img className="search_serial_icon" src={require("../../assets/img/serial_vertical/" + item.img)}/>
                    <div className="search_serial_text">
                        <div className="search_serial_name">{item.serial.name}</div>
                        <div className="search_serial_txt">
                            {item.description}
                        </div>
                    </div>
                </div>
            </>
            )}
            <div className="search_area"></div>
            
        </div>
        </>
    );
};

export default Search;