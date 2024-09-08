import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./Input";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

/**
 * Form component handles form input, image upload, and PDF generation.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.fieldLabels - An object containing the labels for form fields based on the title.
 * @param {string} props.title - The title determining the type of form (e.g., "seller").
 * @returns {JSX.Element} The rendered form component.
 */
const Form = ({
  fieldLabels,
  title,
}: {
  fieldLabels: Record<string, string[]>;
  title: string;
}): JSX.Element => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  /**
   * Handles the image upload and displays the image in the respective container.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The file input change event.
   */
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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
          imageDiv.innerHTML = `<img src="${reader.result}" alt="Company Logo" class="h-full p-1" />`;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Handles the printing of the form data to a PDF.
   *
   * @param {FormEvent<HTMLFormElement>} e - The form submit event.
   */
  const handlePrint = (e: FormEvent<HTMLFormElement>) => {
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

        input.style.maxHeight = "100vh";
      });
    }
  };

  /**
   * Handles input change and updates the form data.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const target = document.getElementById(name);
    if (target) {
      target.innerText = value;
    }
  };

  return (
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
              <div>Logo</div>
              <input
                type="file"
                title="logo"
                name="logo"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
              />
            </div>
            <div>
              Signature
              <input
                type="file"
                title="signature"
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
        <button type="submit" className="btn-primary">
          Print
        </button>
      </div>
    </form>
  );
};

export default Form;
