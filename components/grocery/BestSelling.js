import { height, width } from "@material-ui/system";
import Image from 'next/image';



const BestSelling = () => {
    return (
      <div className="col col-sm-12 col-md-4 h-auto ">
      <div className="card bg-color text-dark p-4 p-md-4  mb-3
      ">
      <div className="d-flex">
         
        
          <h4 className="text-light">Best Selling</h4>
      
        <img src="./images/two dots.svg" alt="" />
      </div>
      <h6 className="text-light">Trend 2021</h6>
      <div
        className="card bg-light border-3 rounded"
        style={{width: '600', height : '200', maxwidth:'120' }}
      >
        <Image
             src={`https://mykoreankitchen.com/wp-content/uploads/2020/03/1.-Kimchi-Jjim.jpg`}
             alt={`my-image`}
             height={300}
             width={300}
             position='fill'
                />
      </div>
      <h5 className="m-3 text-light">Kimchi</h5>
      <div className="d-flex justify-content-between">
        <a
          href="#"
          className="btn btn-primary btn-sm disabled h-75"
          role="button"
          aria-disabled="true"
          >81 Sell</a
        >
        <div className="d-flex">
          <img className="pb-3"  
           src="..///../public/assets/images/Vector_14.svg" alt="" />
          <p className="text-light">29%</p>
        </div>
      </div>
    </div>
    </div>   
    );
  };
  
  export default BestSelling;
  