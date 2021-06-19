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
    <div className="">
        <h6><a className=" cursor-pointer font-primary view overlay m-5" onClick={onOpenModal}>View all</a></h6>
      <Modal open={open} onClose={onCloseModal} center className="w_chart">
        <h2 className="text-center">All Favourite Korean Foods</h2>
        <div className="container-fluid w-auto pt-2">
        <div className='row d-flex justify-content-around'>
          <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2016/10/1.-Oven-Baked-Korean-BBQ-Beef-Ribs-Recipe.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">Korean BBQ Beef</p>
              </div>
             </div>
            </div>
            <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2015/11/6.-Bulgogi-Rice-Burger.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">Korean Rice Burger</p>
              </div>
             </div>
            </div>
            <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2013/04/2.-Korean-Spicy-Pork-Jeyuk-Bokkeum.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">Marinated Pork</p>
              </div>
             </div>
            </div>
          </div>
          <div className='row d-flex justify-content-around pt-4'>
          <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2019/09/1.-Chicken-Bulgogi.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">Chicken Bulgogi</p>
              </div>
             </div>
            </div>
            <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2006/10/1.-Kongnamul-Bap-Soybean-Sprout-Rice.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">KONGNAMUL BAP</p>
              </div>
             </div>
            </div>
            <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2018/02/2.-Bulgogi-Stew.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">Bulgogi Stew</p>
              </div>
             </div>
            </div>
          </div>
          <div className='row d-flex justify-content-around pt-4'>
          <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2020/02/0.-Nuclear-Fire-Noodle-Fries.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">Noodle Fries</p>
              </div>
             </div>
            </div>
            <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2019/10/1.-Toowoomba-Pasta.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">Toowoomba Pasta</p>
              </div>
             </div>
            </div>
            <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2020/02/1.-Doenjang-Jjigae.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">DOENJANG JJIGAE</p>
              </div>
             </div>
            </div>
          </div>
          <div className='row d-flex justify-content-around pt-4'>
          <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2019/12/1.-Korean-Braised-Potatoes.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">GAMJA JORIM</p>
              </div>
             </div>
            </div>
            <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2006/10/1.-Easy-Kimbap.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">KOREAN SUSHI ROLL</p>
              </div>
             </div>
            </div>
            <div className=" col-md-6 col-12 col-xl-3">
            <div className="card"  style={{width : '13rem'}}>
            <Image src="https://mykoreankitchen.com/wp-content/uploads/2016/04/2.-Jjampong.jpg" alt="placeholder image"
             alt={`my-image`}
             height={110}
             width={190}
             objectFit="cover"
             className="rounded"/>
              <div className="card-body">
                <p className="card-text text-center">JJAMPPONG</p>
              </div>
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
