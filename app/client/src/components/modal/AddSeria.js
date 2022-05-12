import React, {useState} from 'react';
import {Modal, Form, Button, Row} from 'react-bootstrap'
import { addSeria } from '../../api/adminApi';

const AddSeria = ({show, onHide}) => {
    const buttonStyle = {backgroundColor: "#df7d00", borderColor: "#df7d00"}
    const fileInputStyle = {borderRadius: "5px", border: "1px solid #b1b3b3", color: "#939595", 
        cursor: "pointer"}
    const fileLabelStyle = {color: "#919292", fontWeight: "bold", fontSize: "25px"}

    const [serial, setSerial] = useState("")
    const [season, setSeason] = useState("")
    const [seria, setSeria] = useState("")
    const [seriaName, setSeriaName] = useState("")
    const [studio, setStudio] = useState("")
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("")
    const [preview, setPreview] = useState(null)

    const adding = (operation) => {
        addSeria(operation, {serial, season, seria, seriaName, studio, file,
            description, preview}).then(data => {
            setSerial('')
            setSeason('')
            setSeria('')
            setSeriaName('')
            setStudio('')
            setFile(null)
            setDescription('')
            setPreview(null)
            onHide()
        })
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const selectPreview = (e) => {
        setPreview(e.target.files[0])
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
                        Добавление серии
                    </Modal.Title>
                </Modal.Header>

                <div style={{height: "400px", overflow: "auto"}}>
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
                    placeholder="Введите название начальной озвучки"
                    value={studio}
                    onChange={(e) => setStudio(e.target.value)}
                    />

                    <p
                    style={fileLabelStyle}
                    className="mt-4 ml-auto mr-auto"
                    >Файл видео с начальной озвучкой</p>

                    <Form.Control
                    type="file"
                    style={fileInputStyle}
                    className="mt-3"
                    placeholder="Введите путь к файлу"
                    onChange={selectFile}
                    />

                    <p
                    style={fileLabelStyle}
                    className="mt-4 ml-auto mr-auto"
                    >Файл с превью серии</p>

                    <Form.Control
                    type="file"
                    style={fileInputStyle}
                    className="mt-4"
                    placeholder="Введите путь к файлу"
                    onChange={selectPreview}
                    />


                    <Form.Control
                    as="textarea"
                    className="mt-3"
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

export default AddSeria;