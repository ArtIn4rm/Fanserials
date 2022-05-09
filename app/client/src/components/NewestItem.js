import React from 'react';

const NewestItem = (props) => {
    const item = props.value

    return (
        <>
            <div className="newest_item">
                <a href={`/serial/:${item.id}/list`}><img className="newest_icon_box" src={require("../assets/img/serial_vertical/" + item.img)}/></a>
                <div className="newest_text_box">
                    <li className="newest_text_box_name">{item.serial.name}</li>
                    <li className="newest_text_box_origin">{`${item.serial.original}`}</li>
                </div>
            </div>
        </>
    );
};

export default NewestItem;