import Logo from "../assets/images/logo.png";
import Table from "../component/Table";
const Home = ({ invoiceData }) => {
  return (
    <section
      id="invoice"
      className="max-h-screen col-span-5 font-invoiceLite text-sm overflow-y-auto"
    >
      <div className="grid py-10 px-14 gap-4">
        <div className="flex justify-between">
          <div id="brandLogo-container" className="h-12">
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
            <p id="sellerName">{invoiceData.sellerDetails.name}</p>
            <p id="sellerAddress">{invoiceData.sellerDetails.address.street}</p>
            <div className="flex">
              <p id="sellerCity">{invoiceData.sellerDetails.address.city}</p>,
              <p id="sellerState">KARNATKA</p>,
              <p id="sellerPincode">
                {invoiceData.sellerDetails.address.pincode}
              </p>
            </div>
            <p id="sellerCountry">
              {invoiceData.sellerDetails.address.country}
            </p>
          </div>
          <div className=" text-right">
            <p className="font-invoiceBold">Billing Address</p>
            <p id="billingName">{invoiceData.billingDetails.name}</p>
            <p id="billingAddress">
              {invoiceData.billingDetails.address.street}
            </p>
            <div className="flex">
              <p id="billingCity">{invoiceData.billingDetails.address.city}</p>,
              <p id="billingState">
                {invoiceData.billingDetails.address.state}
              </p>
              ,
              <p id="billingPincode">
                {invoiceData.billingDetails.address.pincode}
              </p>
            </div>
            <p id="billingCountry">
              {invoiceData.billingDetails.address.country}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" flex flex-col">
            <div className="flex">
              <p className="font-invoiceBold">PAN No:</p>
              <p id="panNo.">{invoiceData.sellerDetails.PAN}</p>
            </div>
            <div className="flex">
              <p className="font-invoiceBold">GST Registration No:</p>
              <p id="gstRegistrationNo.">
                {invoiceData.sellerDetails.GSTRegistrationNo}
              </p>
            </div>
          </div>
          <div className="flex  text-right">
            <p className="font-invoiceBold">State/UTCode : </p>
            <p id="billingState/UtCode">
              {invoiceData.billingDetails.stateUTCode}
            </p>
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
              <p id="shippingState">TELANGANA</p>
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
          <Table invoiceData={invoiceData} />
          <p>Whether tax is payable under reverse charge - No</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
