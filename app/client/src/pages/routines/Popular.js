import React, {useContext} from 'react';
import {Context} from '../../index'
import chevron from '../../assets/svg/chevron.svg'
import {observer} from 'mobx-react-lite'

const Popular = observer(() => {
    let {popular} = useContext(Context)

    return (
        <>
            <div class="new_series_block">
            <div class="popular_block">
                <div className="history">
                    <div className="history_txt_block"><a href="#" className="history_txt">Новые серии<img src={chevron} className="chevron_svg"/></a></div>
                </div>
                <div class="new_series_txt" id="popular_txt">Популярное</div>
                <div class="line_between_popular"></div>
                <div class="popular_block_list">

                    {popular.populars.map((value) => 
                        <>
                            <div key={value.id} class="popular_position">
                                <div class="popular_icon_box">
                                    <a href="player.html"><img class="popular_icon_img" src={require('../../assets/img/serial_vertical/' + value.img)}/></a>
                                </div>
                                <div class="popular_text_box">
                                    <li class="popular_text_box_name">{value.serial.name}</li>
                                    <li class="popular_text_box_num">{value.serial.janre}</li>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div class="line_between_popular"></div>
            </div>
        </div>
        </>
    );
})

export default Popular;