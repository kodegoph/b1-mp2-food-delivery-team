import { Tabs } from 'antd';
import Image from "next/image";
import 'antd/dist/antd.css';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const AntTab = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Monthly" key="1">
    <div className="row">
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/06/2.-Korean-Ground-Beef-And-Rice-Bowls.jpg`}
            alt={`my-image`}
            height={400}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">267k Likes </p>
          <p>KOREAN GROUND PORK</p>
        </div>
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/07/9.-Air-Fryer-Korean-Chicken-Wings.jpg`}
            alt={`my-image`}
            height={400}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">27k Likes </p>
          <p>KOREAN CHICKEN WINGS</p>
        </div>
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2006/10/2.-Korean-Tuna-Pancakes.jpg`}
            alt={`my-image`}
            height={340}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">27k Likes </p>
          <p>Korean Tuna Pancakes</p>
        </div>
      </div>
    </TabPane>
    <TabPane tab="Weekly" key="2">
    <div className="row">
        
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/07/9.-Air-Fryer-Korean-Chicken-Wings.jpg`}
            alt={`my-image`}
            height={400}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">27k Likes </p>
          <p>KOREAN CHICKEN WINGS</p>
        </div>
        
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/04/1.-Dalgona-Coffee.jpg`}
            alt={`my-image`}
            height={340}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">27k Likes </p>
          <p>Dalgona Coffee</p>
        </div>
        
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2015/04/2.-Korean-Spicy-Cucumber-Salad.jpg`}
            alt={`my-image`}
            height={340}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">4k Likes </p>
          <p>KOREAN CUCUMBER SALAD</p>
        </div>
      </div>
    </TabPane>
    <TabPane tab="Daily" key="3">
    <div className="row">
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/06/2.-Korean-Ground-Beef-And-Rice-Bowls.jpg`}
            alt={`my-image`}
            height={400}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">267k Likes </p>
          <p>KOREAN GROUND BEEF</p>
        </div>
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/07/9.-Air-Fryer-Korean-Chicken-Wings.jpg`}
            alt={`my-image`}
            height={400}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">27k Likes </p>
          <p>KOREAN CHICKEN WINGS</p>
        </div>
    
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2019/09/1.-Korean-Green-Salad.jpg`}
            alt={`my-image`}
            height={340}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">4k Likes </p>
          <p>Korean Green Salad</p>
        </div>
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2015/04/2.-Korean-Spicy-Cucumber-Salad.jpg`}
            alt={`my-image`}
            height={340}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">4k Likes </p>
          <p>KOREAN CUCUMBER SALAD</p>
        </div>
      </div>
    </TabPane>
  </Tabs>
);

export default AntTab;
