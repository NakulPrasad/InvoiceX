import Form from "./Form";

const SubMenu2 = ({ title = "seller" }) => {
  const fieldLabels = {
    seller: [
      "Seller Name",
      "Seller Address",
      "Seller City",
      "Seller State",
      "Seller Pincode",
      "Seller Country",
      "PAN No.",
      "GST Registration No.",
    ],
    billing: [
      "Billing Name",
      "Billing Address",
      "Billing City",
      "Billing State",
      "Billing Pincode",
      "Billing Country",
      "Billing State/UT Code",
    ],
    shipping: [
      "Shipping Name",
      "Shipping Address",
      "Shipping City",
      "Shipping State",
      "Shipping Pincode",
    ],
    order: ["Order Number", "Order Date"],
    invoice: ["Invoice Number", "Invoice Details", "Invoice Date"],
    items: [
      "Description",
      "Unit Price",
      "Quantity",
      "Discount",
      "Net Amount",
      "Tax Rate",
    ],
  };
  return (
    <section className="px-4 h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-full dark:bg-gray-900 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        {title} Info
      </h2>
      <Form fieldLabels={fieldLabels} title={title} />
    </section>
  );
};

export default SubMenu2;
