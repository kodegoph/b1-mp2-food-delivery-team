import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from 'react-bootstrap'
import Container from 'react-bootstrap'
import Row from 'react-bootstrap'


const App = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="h-100">
        <h5><a className="text-decoration-none cursor-pointer" onClick={onOpenModal}>View all</a></h5>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="pt-4">All Favourite Korean Foods</h2>
       
        {/* <Row>
    <div className="col">
      1 of 3
    </div>
    <div className="col-6">
      2 of 3 (wider)
    </div>
    <div className="col">
      3 of 3
    </div>
    </Row>
    <Row>
    <div className="col">
      1 of 3
    </div>
    <div className="col-5">
      2 of 3 (wider)
    </div>
    <div className="col">
      3 of 3
    </div>
    </Row>

    <Row>
    <div className="col">
      1 of 3
    </div>
    <div className="col-6">
      2 of 3 (wider)
    </div>
    <div className="col">
      3 of 3
    </div>
    </Row>
    <Row>
    <div className="col">
      1 of 3
    </div>
    <div className="col-5">
      2 of 3 (wider)
    </div>
    <div className="col">
      3 of 3
    </div> 
    </Row>*/}
{/*         
             <Button>Add More Food to the List</Button>  */}
            
       <button className="btn-primary">Add new food</button>
      </Modal>
    </div>
  );
};

export default App;
