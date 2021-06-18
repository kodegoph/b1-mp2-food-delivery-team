import { height, width } from "@material-ui/system";
import Image from 'next/image';
import Button from 'react-bootstrap/Button'
import Vector from '/public/Vector_14.svg'


const BestSelling = () => {
    return (
      <div className="col col-sm-12 col-md-12 col-xl-4 h-auto ">
      <div className="card bg-color text-dark p-4 p-md-3  mb-3 
      ">
      <div className="d-flex">
         
        
          <h4 className="">Best Selling</h4>
      
        <img src="./images/two dots.svg" alt="" />
      </div>
      <h6 className="">Trend 2021</h6>
      <div
        className="card bg-light border-3 rounded"
        style={{width: '600', height : '100%', maxwidth:'120' }}
      >
        <Image
             src={`https://mykoreankitchen.com/wp-content/uploads/2020/03/1.-Kimchi-Jjim.jpg`}
             alt={`my-image`}
             height={127}
             width={300}
             objectFit='cover'
                />
      </div>
      <h5 className="m-3 text-center">Kimchi</h5>
      <div className="d-flex justify-content-between">
        <Button
          href="#"
          className="btn btn-primary btn-sm disabled h-75"

          >81 Sell</Button>

        <div className="d-flex">
          <Image className="pb-3 m2"  
           src={Vector} alt="" />
          <p className="   mx-3">29%</p>
        </div>
      </div>
    </div>
    </div>   
    );
  };
  
  export default BestSelling;
  