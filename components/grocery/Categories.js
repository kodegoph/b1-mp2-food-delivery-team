import Modals from '../cards/Modals'
import Image from 'next/image';

const Categories = () => {
    return (
      <div className="card text-light p-md-4 p-sm-1  border-radius-lg">
      <h4 className="px-3 ">Select Korean Food Categories</h4>
      <div className="d-flex justify-content-between  px-3 row">
        <h6 className=" col-sm-6 pt-3">Select your favourite food menu</h6>
        <div className=" col-md-6 col-xl-3">
        <Modals/>
        </div>
      </div>
      <div
        className="
          
          d-flex
          align-items-center
          justify-content-center
          pt-2
          row
        "
      >
        <div className="text-center col-sm-6 col-xl-3 ">
          <div
            className="card bg-light border-3 m-auto cursor-pointer"
            style={{width: '8rem', height : '8rem'}}
          >
             <Image
                   src={`https://mykoreankitchen.com/wp-content/uploads/2021/02/1.-Yukgaejang.webp`}
                   alt={`my-image`}
                   height={200}
                   width={200}
                   priority
                />
          </div>
          <p className="">Yukgaejang Spicy</p>
        </div>
        <div className="text-center col-sm-6 col-xl-3 ">
          <div
            className="card bg-light border-3 m-auto cursor-pointer"
            style={{width: '8rem', height : '8rem'}}
          >
            <Image
                   src={`https://mykoreankitchen.com/wp-content/uploads/2006/09/1.1.-Ojingeo-Deopbap.webp`}
                   alt={`my-image`}
                   height={200}
                   width={200}
                />
          </div>
          <p className="">OJINGEO DEOPBAP</p>
        </div>
        <div className="text-center col-sm-6 col-xl-3 cursor-pointer">
          <div
            className="card bg-light border-3 m-auto cursor-pointer"
            style={{width: '8rem', height : '8rem'}}>
                <Image
                   src={`https://mykoreankitchen.com/wp-content/uploads/2020/08/1.-gochujang-chicken.jpg`}
                   alt={`my-image`}
                   height={200}
                   width={200}
                />
            </div>
          <p className="">Gochujang Chicken</p>
        </div>
        <div className="text-center col-sm-6 col-xl-3 cursor-pointer">
            <div
            className="card bg-light border-3 m-auto cursor-pointer"
            style={{width: '8rem', height : '8rem'}}>
                <Image
                   src={`https://mykoreankitchen.com/wp-content/uploads/2018/02/2.-Bulgogi-Stew.jpg`}
                   alt={`my-image`}
                   height={300}
                   width={300}
                />
            </div>
          <p className="">Bulgogi Stew</p>
        </div>
      </div>
      </div>
    
    );
  };
  
  export default Categories;
  