import React from 'react';
import {useLocation} from 'react-router-dom'

const Footer = () => {
    const location = useLocation().pathname
    return (
        <>
        {location !== '/user/login' && location !== '/user/registrate' && 
            <footer className="footer_block">
                <div className="footer_txt">fanserials.net</div>
                <div className="rights_txt">Все права защищены</div>
            </footer>
        }
        </>
    );
};

export default Footer;