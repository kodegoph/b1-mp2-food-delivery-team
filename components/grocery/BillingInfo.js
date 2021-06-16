const BillingInfo = () => {
    return (
        <div className="card h-100 p-5">
        <h3 className="">Billing Information</h3>
        <h6 className="">Point Location</h6>
        <div className="p-3 card bg-light">
          <h6>St. Village 1191 Est, NYC</h6>
          <p>New York, USA</p>
        </div>
        <h6 className="mt-5">Voucher</h6>

        <textarea className="bg-light" name="" id="Voucher">
              Code Voucher
              </textarea>

        <h6 className="mt-5 mb-3">Payment</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Credit Card
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Paypal
          </label>
        </div>
        <div className="d-flex mt-5">
          <div
            className="card bg-light border-3"
            style={{width : '8rem', height : '8rem'}}
          ></div>
          <div className="card p-4 bg-white border-0">
            <h6>Super Fresh Carrot</h6>
            <p>Variant: Fresh</p>
          </div>
        </div>
        <ul className="list-group list-group-flush border-0 pt-2">
          <li
            className="
              border-0
              list-group-item
              d-flex
              justify-content-between
              align-items-center
              flex-wrap
            "
          >
            <h6 className="mb-0">Subtotal</h6>
            <span className="text-secondary">$149.99</span>
          </li>
          <li
            className="
              border-0
              list-group-item
              d-flex
              justify-content-between
              align-items-center
              flex-wrap
            "
          >
            <h6 className="mb-0">Shipping</h6>
            <span className="text-secondary">Free</span>
          </li>
          <li
            className="
              border-0 border-none
              list-group-item
              d-flex
              justify-content-between
              align-items-center
              flex-wrap
            "
          >
            <h6 className="mb-0">Total</h6>
            <span className="text-secondary">$149.99</span>
          </li>
        </ul>
        <div className="d-grid gap-2 col-6 mx-auto mt-5">
          <button className="btn btn-warning rounded-pill" type="button">
            Checkout Now
          </button>
        </div>
      </div>
    );
  };
  
  export default BillingInfo;
  