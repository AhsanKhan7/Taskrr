import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styles from './TaskModal.module.scss'

function TaskModal({ setShow, toggle, title, content, setTitle, setContent, update  }) {
    return (
        
             <Modal className={styles.modal} isOpen={setShow} toggle={toggle}>
                        <ModalHeader className={styles.modalHeader} toggle={toggle}>
                            Add a new Task
                        </ModalHeader>
                        <ModalBody className={styles.modalBody}>
                         
                                    <input
                                        className={styles.input1}
                                        placeholder="Task title"
                                        type="text"
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                    />
                                    <textarea
                                        className={styles.input2}
                                        placeholder="Task Description | Content"
                                        type="text"
                                        onChange={(e) => setContent(e.target.value)}
                                        value={content}
                                    />
                                    <p className={styles.paragraph}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                                        repellendus.
                                    </p>
                            
                        </ModalBody>
                        <ModalFooter className={styles.modalBottom}>
                            <Button
                            color="danger"
                            style={{ borderRadius: "10px" }}
                            onClick={toggle}
                            >
                            Close
                            </Button>
                            <Button color="link" onClick={update} 
                            disabled={title && content !== '' ? false : true} 
                            >
                            <span className={styles.bottomButton}>Add Task</span>
                            </Button>
                        </ModalFooter>
                        </Modal>

    )
}

export default TaskModal
