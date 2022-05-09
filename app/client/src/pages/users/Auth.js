import React, {useContext} from 'react';
import {Context} from '../../index'
import {Form, Row, NavLink, Button, Container, Card} from 'react-bootstrap'
import {useLocation} from 'react-router-dom'
import {observer} from 'mobx-react-lite'


const Auth = observer(() => {
    const {user} = useContext(Context)
    const isLogin = useLocation().pathname === '/user/login'
    let formStyle = {backgroundColor: "#4a4d4d", borderColor: "#ffffff", color: "#ffffff"}

    const changeRef = () =>{
        //user.setAuth(true, 'Simp')
        //document.location='/user/simp/account'
    };
    
    return (
        <Container
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight-54}}>
            <Card style={{width: 600, backgroundColor: "#4a4d4d"}} className='p-5'>
                <h2 style={{color: "#ffffff"}} className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                    style={formStyle}
                    className="mt-3"
                    placeholder="Введите email"/>
                </Form>
                <Form className="d-flex flex-column">
                    <Form.Control
                    style={formStyle}
                    className="mt-3"
                    placeholder="Введите пароль"/>
                </Form>
                {!isLogin &&
                    <Container>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{backgroundColor: "#4a4d4d", borderColor: "#ffffff", color: "#ffffff", width: 245}}
                            placeholder="Имя"/>
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{backgroundColor: "#4a4d4d", borderColor: "#ffffff", color: "#ffffff", width: 245}}
                            placeholder="Фамилия"/>
                        </Form>
                    </Row>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{backgroundColor: "#4a4d4d", borderColor: "#ffffff", color: "#ffffff", width: 502}}
                            placeholder="Имя пользователя"/>
                        </Form>
                    </Row>
                    </Container>
                }
                <Row className="d-flex justify-content-between pr-5 pl-5">
                    {!isLogin ? 
                        <NavLink className="ml-auto pt-4" style={{color: "#ff834d"}} href={'/user/login'}>
                            Вход
                        </NavLink>
                        :
                        <NavLink className="ml-auto pt-4" style={{color: "#ff834d"}} href={'/user/registrate'}>
                            Подтвердить
                        </NavLink>
                    }
                    <Button onClick={() => changeRef()} style={{backgroundColor: "#313232", color: "#ffffff"}} className="mt-3 ml-auto mr-auto pr-4 pl-4" variant={"outline-dark"}>
                        {isLogin ? 'Вход' : 'Регистрация'}</Button>
                </Row>
            </Card>
        </Container>
    );
})

export default Auth;