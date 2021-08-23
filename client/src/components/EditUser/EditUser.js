import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser, getUser } from "../../js/actions/userAction";

const EditUser = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();
  // const edit = () =>{
  //     dispatch(editUser(user._id, fullName, email, phone));
  //     dispatch(getUser());
  //     handleClose();
  // }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault()}>
            FullName:
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            Email:
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            Phone:
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              dispatch(editUser(user._id, fullName, email, phone));
              dispatch(getUser());
              handleClose()
            }}
          >
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditUser;
