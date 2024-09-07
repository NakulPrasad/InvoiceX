import Logo from "../assets/images/logo.png";
import Table from "../component/Table";
const Home = () => {
  return (
    <section className="h-screen col-span-5 font-invoiceLite text-sm overflow-y-auto">
      <div className="grid py-10 px-14 gap-4">
        <div className="flex justify-between">
          <div>
            <img src={Logo} alt="Company Logo" className="h-full p-1" />
          </div>
          <div>
            <p className="font-invoiceBold text-lg">
              Tax Invoice/Bill of Supply/Cash Memo
            </p>
            <p className="text-right">(Original for Recipient)</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" ">
            <p className="font-invoiceBold">Sold By:</p>
            <p id="sellerName">Varashidhi Silk Exports</p>
            <p id="sellerAddress">Sector 12A, Old Town Road</p>
            <div className="flex">
              <p id="sellerCity">BENGALURU</p>,<p id="sellerState">KARNATKA</p>,
              <p id="sellerPincode">987654</p>
            </div>
            <p id="sellerCountry">IN</p>
          </div>
          <div className=" text-right">
            <p className="font-invoiceBold">Billing Address</p>
            <p id="billingName">John Doe</p>
            <p id="billingAddress">Eurofins It Solution, 1st Floor</p>
            <div className="flex">
              <p id="billingCity">HYDERABAD</p>,
              <p id="billingState">TELANGANA</p>,
              <p id="billingPincode">560011</p>
            </div>
            <p id="billingCountry">IN</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" flex flex-col">
            <div className="flex">
              <p className="font-invoiceBold">PAN No:</p>
              <p id="panNo.">AC45784AA</p>
            </div>
            <div className="flex">
              <p className="font-invoiceBold">GST Registration No:</p>
              <p id="gstRegistrationNo.">985697456</p>
            </div>
          </div>
          <div className="flex  text-right">
            <p className="font-invoiceBold">State/UTCode : </p>
            <p id="billingState/UtCode">59</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className=" text-right">
            <p className="font-invoiceBold">Shipping Address:</p>
            <p id="shippingName">John Doe</p>
            <p id="shippingAddress">Eurofins It Solution, 1st Floor</p>
            <div className="flex">
              <p id="shippingCity">HYDERABAD</p>,
              <p id="shippingState">TELANGANA</p>,
              <p id="shippingPincode">560011</p>
            </div>
            <p id="shippingCountry">IN</p>
            <div className="flex justify-end">
              <p className="font-invoiceBold">State/UTCode : </p>
              <p id="shippingStateUtCode">59</p>
            </div>
            <div className="flex justify-end">
              <p className="font-invoiceBold">Place of supply : </p>
              <p id="sellerPlaceOfSupply"> KARNAKTKA</p>
            </div>
            <div className="flex justify-end">
              <p className="font-invoiceBold">Place of delivery : </p>
              <p id="shippingPlaceOfDelivery">TELANGANA</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" flex flex-col">
            <div className="flex">
              <p className="font-invoiceBold">Order Number:</p>
              <p id="orderNumber">45464-64646</p>
            </div>
            <div className="flex">
              <p className="font-invoiceBold">Order Date :</p>
              <p id="orderDate">25.11.2000</p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-end">
              <p className="font-invoiceBold">Invoice Number : </p>
              <p>IN - </p>
              <p id="invoiceNumber">59</p>
            </div>
            <div className="flex  justify-end">
              <p className="font-invoiceBold">Invoice Details : </p>
              <p>KA - </p>
              <p id="invoiceDetails">59-2000</p>
            </div>
            <div className="flex  justify-end">
              <p className="font-invoiceBold">Invoice Date : </p>
              <p id="invoiceDate">26.11.2000</p>
            </div>
          </div>
        </div>
        <div>
          <Table />
          <p>Whether tax is payable under reverse charge - No</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
