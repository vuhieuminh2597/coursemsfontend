import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import {postCreateUser} from "../../services/UserService"
import {toast} from 'react-toastify';

const ModalAddNewUser = (props) => {
    const {show, handleClose, handleUpdateTable} = props;
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");

    const handleSaveUser = async () => {
        let res = await postCreateUser(id,name, email, birthDay, address, gender, phone);
        // console.log(">>>> check res ", res)
        if (res && res.id) {
            handleClose();
            setId('');
            setName('');
            setEmail('');
            setBirthDay('');
            setAddress('');
            setGender('');
            setPhone('');
            handleUpdateTable({
                name: name, id: res.id, email: email, birthDay: birthDay, address: address, gender: gender
                , phone: phone
            });
            toast.success("A User is created success!");
        } else {
            toast.error("A User is created failed!");
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href={"https://www.uuidgenerator.net/"} target={"_blank"}>Get UUID ONLINE</a>
                    <div className='body-add-new'>
                        <div className="mb-3">
                            <label className="form-label">ID:</label>
                            <input type="text" className="form-control" id="floatingInput" placeholder="Ex:8c9dfce4-3cba-4d8a-8849-5ba24b61e94"
                                   onChange={(event) => setId(event.target.value)}//Lấy value
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control"
                                   onChange={(event) => setName(event.target.value)}//Lấy value
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="text" className="form-control"
                                   onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Birth day:</label>
                            <input type="text" className="form-control"
                                   onChange={(event) => setBirthDay(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address:</label>
                            <input type="text" className="form-control"
                                   onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender:</label>
                            <input type="text" className="form-control"
                                   onChange={(event) => setGender(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone:</label>
                            <input type="text" className="form-control"
                                   onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
export default ModalAddNewUser;