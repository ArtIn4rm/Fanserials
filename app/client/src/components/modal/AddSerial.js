import React, {useState} from 'react';
import {Modal, Form, Button, Row, Dropdown, Col} from 'react-bootstrap'
import { addSerial } from '../../api/adminApi';

const AddSerial = ({show, onHide}) => {

    const buttonStyle = {backgroundColor: "#df7d00", borderColor: "#df7d00"}
    const fileInputStyle = {borderRadius: "5px", border: "1px solid #b1b3b3", color: "#939595", 
        cursor: "pointer"}
    const fileLabelStyle = {color: "#919292", fontWeight: "bold", fontSize: "25px"}
    const dropdownStyle = {backgroundColor: "#727676", color: "#fff", marginLeft: "40xp"}

    const [janres, setJanres] = useState([])

    const addJanre = () => {
        setJanres([...janres, {name: "", number: Date.now()}])
    }

    const removeJanres = (number) => {
        setJanres(janres.filter(i => i.number !== number))
    }

    const changeJanres = (key, value, number) => {
        setJanres(janres.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const categoryList = [{id: 1, name: "Сериал"}, {id: 2, name: "Мультсериал"}, {id: 3, name: "Аниме"}] 
    const statusList = [{id: 1, name: "Выходит"}, {id: 2, name: "Завершен"}] 

    const [serial, setSerial] = useState("")
    const [original, setOriginal] = useState("")
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [imdb, setImdb] = useState('')
    const [country, setCountry] = useState("")
    const [channel, setChannel] = useState("")
    const [director, setDirector] = useState("")
    const [scenarists, setScenarists] = useState("")
    const [producers, setProducers] = useState("")
    const [actors, setActors] = useState("")

    const [description, setDescription] = useState("")
    const [vertical, setVertical] = useState(null)
    const [horizontal, setHorizontal] = useState(null)

    const adding = (operation) => {
        addSerial(operation, {serial, original, start, end, imdb, country, vertical, horizontal,
            description, channel, channel, director, scenarists, producers, actors}).then(data => {
            setSerial('')
            setOriginal('')
            setStart('')
            setEnd('')
            setImdb('')
            setCountry('')
            setDescription('')
            setChannel('')
            setDirector('')
            setScenarists('')
            setProducers('')
            setActors('')
            setVertical(null)
            setHorizontal(null)
            onHide()
        })
    }

    const selectVertical = (e) => {
        setVertical(e.target.files[0])
    }

    const selectHorizontal = (e) => {
        setHorizontal(e.target.files[0])
    }
    

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавление сериала
                    </Modal.Title>
                </Modal.Header>

                <div style={{height: "600px", overflow: "auto"}}>
                <Modal.Body>
                <Form className="d-flex flex-column">

                    <Form.Control
                    style={{}}
                    className=""
                    placeholder="Введите название сериала"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value)}
                    />

                    <Form.Control
                    style={{}}
                    className="mt-3"
                    placeholder="Введите оригинальное название"
                    value={original}
                    onChange={(e) => setOriginal(e.target.value)}
                    />


                    <Row className="d-flex justify-content-between mt-3">
                            <Form.Control
                            style={{width: 230}}
                            className="ml-3"
                            placeholder="Год начала"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                            />

                            <Form.Control
                            style={{width: 230}}
                            className="ml-2"
                            placeholder="Год конца"
                            value={end}
                            onChange={(e) => setEnd(e.target.value)}
                            />

                            <Form.Control
                            style={{width: 230}}
                            className="mr-3"
                            placeholder="ImdB"
                            value={imdb}
                            onChange={(e) => setImdb(e.target.value)}
                            />
                    </Row>

                    <Form.Control
                    style={{}}
                    className="mt-3"
                    placeholder="Введите название страны"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    />

                    <Form.Control
                    style={{}}
                    className="mt-3"
                    placeholder="Введите название канала"
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    />

                    <Form.Control
                    style={{}}
                    className="mt-3"
                    placeholder="Введите имена режиссеров"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                    />

                    <Form.Control
                    style={{}}
                    className="mt-3"
                    placeholder="Введите имена сценаристов"
                    value={scenarists}
                    onChange={(e) => setScenarists(e.target.value)}
                    />

                    <Form.Control
                    style={{}}
                    className="mt-3"
                    placeholder="Введите имена продюссеров"
                    value={producers}
                    onChange={(e) => setProducers(e.target.value)}
                    />

                    <Form.Control
                    style={{}}
                    className="mt-3"
                    placeholder="Введите имена актеров"
                    value={actors}
                    onChange={(e) => setActors(e.target.value)}
                    />

                    <Dropdown className="d-flex flex-column mt-3">
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic"
                        style={dropdownStyle}
                    >
                        Выберите категорию
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {categoryList.map((value) => 
                            <Dropdown.Item key={value.id}>{value.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="d-flex flex-column mt-3">
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic"
                        style={dropdownStyle}
                    >
                        Выберите статус
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {statusList.map((value) => 
                            <Dropdown.Item key={value.id}>{value.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                    </Dropdown>

                    <p
                    style={fileLabelStyle}
                    className="mt-4 ml-auto mr-auto"
                    >Файл с вертикальной картинкой</p>

                    <Form.Control
                    type="file"
                    style={fileInputStyle}
                    className="mt-3"
                    placeholder="Введите путь к файлу"
                    onChange={selectVertical}
                    />

                    <p
                    style={fileLabelStyle}
                    className="mt-4 ml-auto mr-auto"
                    >Файл с горизонтальной картинкой</p>

                    <Form.Control
                    type="file"
                    style={fileInputStyle}
                    className="mt-4"
                    placeholder="Введите путь к файлу"
                    onChange={selectHorizontal}
                    />

                    <hr/>

                    <Button 
                    variant="secondary" 
                    className="mt-2 ml-auto mr-auto"
                    style={{backgroundColor: "#df7d00", borderColor: "#df7d00", width: "400px"}}
                    onClick={addJanre}
                    >
                        Добавить жанр
                    </Button>

                    {janres.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={5}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeJanres('name', e.target.value, i.number)}
                                    placeholder="Введите жанр"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeJanres(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}


                    <Form.Control
                    as="textarea"
                    className="mt-4"
                    placeholder="Описание"
                    style={{ height: '100px' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />

                </Form>
                </Modal.Body>
                </div>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Отмена</Button>
                    <Button variant="secondary" style={buttonStyle} onClick={() => adding('delete')}>Удалить</Button>
                    <Button variant="secondary" style={buttonStyle} onClick={() => adding('update')}>Редактировать</Button>
                    <Button variant="secondary" style={buttonStyle} onClick={() => adding('create')}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddSerial;