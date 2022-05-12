import React, {useState} from 'react';
import {Modal, Form, Button, Row} from 'react-bootstrap'
import { addStudio } from '../../api/adminApi';

const AddStudio = ({show, onHide}) => {
    const buttonStyle = {backgroundColor: "#df7d00", borderColor: "#df7d00"}
    const fileInputStyle = {borderRadius: "5px", border: "1px solid #b1b3b3", color: "#939595", 
        cursor: "pointer"}
    const fileLabelStyle = {color: "#919292", fontWeight: "bold", fontSize: "25px"}

    const [serial, setSerial] = useState("")
    const [season, setSeason] = useState("")
    const [seria, setSeria] = useState("")
    const [seriaName, setSeriaName] = useState("")
    const [name, setName] = useState("")
    const [file, setFile] = useState(null)

    const adding = () => {
        addStudio({serial, season, seria, seriaName, name, file}).then(data => {
            setSerial('')
            setSeason("")
            setSeria("")
            setSeriaName('')
            setName('')
            setFile(null)
            onHide()
        })
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
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
                        Добавление озвучки
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form className="d-flex flex-column">

                    <Form.Control
                    style={{}}
                    className=""
                    placeholder="Введите название сериала"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value)}
                    />

                    <Row className="d-flex justify-content-between mt-3">
                            <Form.Control
                            style={{width: 370}}
                            className="ml-3"
                            placeholder="Сезон"
                            value={season}
                            onChange={(e) => setSeason(e.target.value)}
                            />

                            <Form.Control
                            style={{width: 370}}
                            className="mr-3"
                            placeholder="Серия"
                            value={seria}
                            onChange={(e) => setSeria(e.target.value)}
                            />
                    </Row>
                    <Form.Control
                    style={{}}
                    className="mt-3"
                    placeholder="Введите название серии"
                    value={seriaName}
                    onChange={(e) => setSeriaName(e.target.value)}
                    />

                    <Form.Control
                    style={{}}
                    className="mt-3"
                    placeholder="Введите название озвучки"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <Form.Label
                    style={fileLabelStyle}
                    className="mt-4 ml-auto mr-auto"
                    >Файл видео с озвучкой</Form.Label>

                    <Form.Control
                    type="file"
                    style={fileInputStyle}
                    className="mt-3"
                    onChange={selectFile}
                    placeholder="Введите путь к файлу"/>

                </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Отмена</Button>
                    <Button variant="secondary" style={buttonStyle} onClick={() => adding()}>Удалить</Button>
                    <Button variant="secondary" style={buttonStyle} onClick={() => adding()}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddStudio;