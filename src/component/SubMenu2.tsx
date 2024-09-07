import { useState } from "react";
import Input from "./Input";

const SubMenu2 = ({ title = "seller" }) => {
  //   console.log(title);

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.title]: e.target.value,
    }));
    const target = document.getElementById(e.target.title);
    if (target) {
      target.innerText = e.target.value;
    }
  };

  const fieldLabels = {
    seller: [
      "Seller Name",
      "Seller Address",
      "Seller City",
      "Seller State",
      "Seller Pincode",
      "PAN No.",
      "GST Registration No.",
    ],
    billing: [
      "Billing Name",
      "Billing Address",
      "Billing City",
      "Billing State",
      "Billing Pincode",
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
      "Item Description",
      "Item Unit Price",
      "Item Quantity",
      "Item Discount",
      "Item Net Amount",
      "Item Tax Rate",
    ],
  };
  return (
    <section className="px-4 h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-full dark:bg-gray-900 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        {title} Info
      </h2>

      <form>
        <div className="grid grid-cols-1 gap-2 mt-4">
          <div>
            {fieldLabels[title]?.map((label) => (
              <Input key={label} title={label} onChange={handleChange} />
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button type="submit" className="btn-primary">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubMenu2;
