import React from 'react';
import {Modal, Form, Button, Dropdown} from 'react-bootstrap'

const BanSimp = ({show, onHide}) => {
    const buttonStyle = {backgroundColor: "#df7d00", borderColor: "#df7d00"}
    const dropdownStyle = {backgroundColor: "#727676", color: "#fff", marginLeft: "40xp"}

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Забанить пользователя</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form className="d-flex flex-column">
                    <Form.Control
                    style={{}}
                    className=""
                    placeholder="Введите имя пользователя"/>
                </Form>

                <Dropdown className="d-flex flex-column mt-3">
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic"
                        style={dropdownStyle}
                    >
                        Выберите срок бана
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item key={1}>1 день</Dropdown.Item>
                        <Dropdown.Item key={2}>1 неделя</Dropdown.Item>
                        <Dropdown.Item key={3}>1 месяц</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Отмена</Button>
                    <Button variant="secondary" style={buttonStyle} onClick={onHide}>Забанить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BanSimp;