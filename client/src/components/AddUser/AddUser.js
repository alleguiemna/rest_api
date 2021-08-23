import React, { useState } from 'react'
import './AddUser.css'
import { Modal, Button } from 'react-bootstrap'
import { addUser, getUser } from '../../js/actions/userAction'
import { useDispatch } from 'react-redux'

const AddUser = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()
    // const add = () => {
    //     dispatch(addUser(fullName, phone, email))
    //     dispatch(getUser())
    //     handleClose()
    // }
    return (
        <div className="add">
            <Button variant="primary" onClick={handleShow}>
                Add
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => e.preventDefault()}>
                        FullName:<input type="text" className="form-control" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                        Email:<input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                        Phone:<input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={() => { dispatch(addUser(fullName, email, phone)); dispatch(getUser()); handleClose() }}>Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddUser
