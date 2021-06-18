import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Names from "./OrderAPI"

const style = {
  height: 90,
  border: "none",
  margin: 6,
  padding: 8
  
};

class OrderScroll extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };


  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 5 }))
      });
    }, 200);
  };

  render() {
    return (
      <div>
       
        <hr className="m-1" />
        <div className="d-flex justify-content-around text-bold">
        <p>Name / Order Number</p>
        <p>Amount/Status</p>
        </div>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={300}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((i, index) => (
            <div className="border-none py-3" style={style} key={index}>
             <div
          className="
            list-group-item
            d-flex
            justify-content-between
            cursor-pointer

            list-group-item
          "
        >
          <div className="d-flex">
            <img
              className="rounded-circle"
              src="./images/Ellipse 55.svg"
              style={{width: '60px', height : '60px'}}
            />
            <div style={{paddingLeft: '0', margin : '10px'}}>
              <span>Cau  Africa</span>
              <p>Number Order #1510031<br /></p>
            </div>
          </div>
          <div>
            <h6>$19.89</h6>  div - #{index}
          </div>
        </div>
  
            </div>
          ))}
        </InfiniteScroll>
      </div>

      
    );
  }
}

export default OrderScroll;
