import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from 'react-bootstrap'
import Container from 'react-bootstrap'
import Row from 'react-bootstrap'
import Image from 'next/image'

const App = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
        <>
    <div className="h-100">
        <h5><a className="text-decoration-none cursor-pointer" onClick={onOpenModal}>View all</a></h5>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="pt-4">All Favourite Korean Foods</h2>
        <div className='row g-5'>
          <div className="col-4">
            <div className="card"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/sports" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-4">
            <div className="card"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-4">
            <div className="card"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
          </div>
          <div className='row'>
          <div className="col-4">
            <div className="card"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-4">
            <div className="card"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-4">
            <div className="card"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
          </div>
          <div className='row'>
          <div className="col-4">
            <div className="card"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-4">
            <div className="card"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
            <div className="col-4">
            <div className="card"  style={{width : '18rem'}}>
            <img src="http://lorempixel.com/640/480/food" alt="placeholder image"/>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
           
             </div>
            </div>
          </div>


       <div className='row d-flex justify-content-center m-5'>
       <button className="btn-primary col-6 radius-30">Add new food</button>
       </div>
      </Modal>
    </div>
      </>
  );
};

export default App;
