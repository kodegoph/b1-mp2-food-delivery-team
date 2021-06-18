import Modals from '../cards/Modals'
import Image from 'next/image';

const Categories = () => {
    return (
      <div className="card p-md-3 p-sm-1  border-radius-lg">
      <h4 className="px-3 "> Korean Food Categories</h4>
      <div className="d-flex justify-content-between  px-3 row">
        <h6 className=" col-sm-6 pt-2">Select your favourite food menu</h6>
        <div className=" col-md-6 col-xl-3">
        <Modals/>
        </div>
      </div>
      <div
        className="
          
          d-flex
          align-items-center
          justify-content-center
          pt-3
          row
        "
      >
        <div className="text-center col-sm-6 col-xl-3 col-lg-6 ">
          <div
            className="card bg-light border-3 m-auto cursor-pointer"
            style={{width: '7rem', height : '7rem'}}>
          
             <Image
                   src={`https://mykoreankitchen.com/wp-content/uploads/2021/02/1.-Yukgaejang.webp`}
                   alt={`my-image`}
                   height={200}
                   width={200}
                   priority
                   objectFit='cover'
                />
          </div>
          <p className="pt-4">Yukgaejang Spicy</p>
        </div>
        <div className="text-center col-sm-6 col-xl-3 col-lg-6 ">
          <div
            className="card bg-light border-3 m-auto cursor-pointer"
            style={{width: '7rem', height : '7rem'}}>
          
            <Image
                   src={`https://mykoreankitchen.com/wp-content/uploads/2006/09/1.1.-Ojingeo-Deopbap.webp`}
                   alt={`my-image`}
                   height={200}
                   width={200}
                   objectFit='cover'
                />
          </div>
          <p className="pt-4">OJINGEO DEOPBAP</p>
        </div>
        <div className="text-center col-sm-6 col-xl-3 col-lg-6 cursor-pointer">
          <div
            className="card bg-light border-3 m-auto cursor-pointer"
            style={{width: '7rem', height : '7rem'}}>
                <Image
                   src={`https://mykoreankitchen.com/wp-content/uploads/2020/08/1.-gochujang-chicken.jpg`}
                   alt={`my-image`}
                   height={200}
                   width={200}
                   objectFit='cover'
                />
            </div>
          <p className="pt-4">Gochujang Chicken</p>
        </div>
        
      <div className="text-center col-sm-6 col-xl-3 col-lg-6 cursor-pointer">
          <div
            className="card bg-light border-3 m-auto cursor-pointer"
            style={{width: '7rem', height : '7rem'}}>
                <Image
                   src={`https://mykoreankitchen.com/wp-content/uploads/2018/02/2.-Bulgogi-Stew.jpg`}
                   alt={`my-image`}
                   height={200}
                   width={200}
                   objectFit='cover'
                />
            </div>
          <p className="pt-4">Gochujang Chicken</p>
        </div>
      </div>
      </div>
    
    );
  };
  
  export default Categories;
  