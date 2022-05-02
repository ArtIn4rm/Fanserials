import React from 'react';
import {useLocation} from 'react-router-dom'

const SeriesItem = (props) => {
    const item = props.value
    const location = useLocation().pathname

    return (
        <div className="serial_item">
            <div className="icon_box">
                <a href=""><img className="icon_img" src={require("../assets/img/series/" + item.img)}/></a>
                <div className="studio_block"></div>
                <div className="studio_block_txt">{item.studio}</div>
            </div>
                <div className="text_box">
                    <li className="text_box_name"><a className="text_box_ref" href="/serial/:game/list">{item.serial}</a></li>
                    <li className="text_box_num">{`${item.season} сезон ${item.seria} серия`}</li>
                </div>
        </div>
    );
};

export default SeriesItem;