import Logo from "../assets/images/logo.png";
const Home = () => {
  return (
    <section className="bg-pink-100 h-screen col-span-5 font-invoice">
      <div className="grid p-14 grid-rows-8 ">
        <div className="flex justify-between">
          <div>
            <img src={Logo} alt="Company Logo" className="h-6" />
          </div>
          <div>
            <p className="font">Tax Invoice/Bill of Supply/Cash Memo</p>
            <p className="text-right">(Original for Recipient)</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="px-4">
            <p>Sold By:</p>
            <p id="sellerName">Varashidhi Silk Exports</p>
            <p id="sellerAddress">Seller Address</p>
            <p id="sellerCity">City</p>
            <p id="sellerState">State</p>
            <p id="sellerPincode">Pincode</p>
            <p id="sellerCountry">Country</p>
          </div>
          <div className="px-4">
            <p>Billing Address</p>
            <p id="billingAddress" className="text-right">
              Customer Name
            </p>
          </div>
        </div>
        <div>11</div>
      </div>
    </section>
  );
};

export default Home;
