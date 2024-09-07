import { useState } from "react";
import Input from "./Input";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";

const SubMenu2 = ({ title = "seller", invoiceData, setInvoiceData }) => {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(null);

  const handleAdd = (e) => {
    console.log(formData);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);

        const imageDiv = document.getElementById(
          `${
            event.target.name === "logo"
              ? "brandLogo-container"
              : "signature-container"
          }`
        );
        if (imageDiv) {
          imageDiv.innerHTML = `<img src="${reader.result}" alt="Company Logo" class="h-full p-1"" />`;
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handlePrint = (e) => {
    e.preventDefault();
    const input = document.getElementById("invoice");
    if (input) {
      input.style.maxHeight = "none";
      html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add image to PDF
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("invoice.pdf");

        // Restore original overflow style
        input.style.maxHeight = "100vh";
      });
    }
  };
  const handleChange = (e) => {
    // console.log(e.target.title);
    // console.log(formData);
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

      <form onSubmit={handlePrint}>
        <div className="grid grid-cols-1 gap-2 mt-4">
          <div>
            {fieldLabels[title]?.map((label) => (
              <Input
                key={label}
                title={label}
                onChange={handleChange}
                formData={formData}
              />
            ))}
          </div>

          {title === "seller" && (
            <>
              <div>
                <input
                  type="file"
                  name="logo"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mb-4"
                />
              </div>
              <div>
                <input
                  type="file"
                  name="signature"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mb-4"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between mt-6">
          {title === "items" && (
            <button type="button" className="btn-primary" onClick={handleAdd}>
              Add
            </button>
          )}
          <button type="submit" className="btn-primary">
            Print
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubMenu2;
