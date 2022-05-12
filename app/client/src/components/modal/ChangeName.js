import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap'

const ChangeName = ({show, onHide}) => {
    const buttonStyle = {backgroundColor: "#df7d00", borderColor: "#df7d00"}

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Смена имени</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form className="d-flex flex-column">
                    <Form.Control
                    style={{}}
                    className=""
                    placeholder="Введите новое имя"/>
                </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Отмена</Button>
                    <Button variant="secondary" style={buttonStyle} onClick={onHide}>Сменить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ChangeName;