import React, {useContext, useState} from 'react'
import {Context} from '../../index'
import {Form, Row, NavLink, Button, Container, Card} from 'react-bootstrap'
import {useLocation, useHistory} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {login, registration} from '../../api/userApi'

const Auth = observer(() => {
    const {user} = useContext(Context)
    const isLogin = useLocation().pathname === '/user/login'
    let history = useHistory()
    let formStyle = {backgroundColor: "#4a4d4d", borderColor: "#ffffff", color: "#ffffff"}
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const sign = async () => {
        try{
            let data
            if(isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password, {username: username, name: name, surname: surname})
            }
            user.setUser(data)
            user.setIsAuth(true, data.role)

            history.push(getRoleUrl(data.role)+'/series/list')
        } catch(e){
            alert(e)
        }
    }
    
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
                    placeholder="Введите email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form>
                <Form className="d-flex flex-column">
                    <Form.Control
                    style={formStyle}
                    type="password"
                    className="mt-3"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form>
                {!isLogin &&
                    <Container>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{backgroundColor: "#4a4d4d", borderColor: "#ffffff", color: "#ffffff", width: 245}}
                            placeholder="Имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{backgroundColor: "#4a4d4d", borderColor: "#ffffff", color: "#ffffff", width: 245}}
                            placeholder="Фамилия"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            />
                        </Form>
                    </Row>
                    <Row className="d-flex justify-content-between mt-3">
                        <Form className="d-flex flex-column">
                            <Form.Control
                            style={{backgroundColor: "#4a4d4d", borderColor: "#ffffff", color: "#ffffff", width: 502}}
                            placeholder="Имя пользователя"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
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
                            Регистрация
                        </NavLink>
                    }
                    <Button 
                    style={{backgroundColor: "#313232", color: "#ffffff"}} 
                    className="mt-3 ml-auto mr-auto pr-4 pl-4" 
                    variant={"outline-dark"}
                    onClick={() => sign()}
                    >
                        {isLogin ? 'Вход' : 'Регистрация'}</Button>
                </Row>
            </Card>
        </Container>
    );
})

export function getRoleUrl(role){
    switch(role){
        case "Admin": {
            return "/user/admin"
        }
        case "Moderator": {
            return "/user/moderator"
        }
        case "Simp": {
            return "/user/simp"
        }
        default: {
            return ""
        }
    }
}

export default Auth;