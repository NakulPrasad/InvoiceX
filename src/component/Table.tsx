const Table = ({ invoiceData }) => {
  const tableHead = (data: string, index: number) => {
    return (
      <th
        key={index}
        className="p-1 border border-gray-900 text-left text-sm font-invoiceBold"
      >
        {data}
      </th>
    );
  };
  const tableRow = (obj: object, data: string, index: number) => {
    return (
      <td key={index} id={data} className="px-4 py-2 text-sm text-gray-700">
        {obj[data]}
      </td>
    );
  };
  const headings = [
    "SI No",
    "Description",
    "Unit Price",
    "Quantity",
    "Discount",
    "Net Amount",
    "Tax Rate",
    "Tax Type",
    "Tax Amount",
    "Total Amount",
  ];

  return (
    <div className="font-invoiceLite">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-900">
          <thead className="bg-gray-200 ">
            <tr>
              {headings.map((heading, index) => {
                return tableHead(heading, index);
              })}
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => {
              return (
                <tr key={index} className="border-t border-gray-300">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  {Object.keys(item).map((key, index) => {
                    return tableRow(item, key, index);
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot className="bg-gray-200">
            <tr>
              <td
                colSpan={8}
                className="font-invoiceBold border border-gray-900 "
              >
                Total :
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border border-gray-900  font-invoiceBold">
                ${invoiceData.totals.totalTax}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border border-gray-900  font-invoiceBold">
                ${invoiceData.totals.grandTotal}
              </td>
            </tr>
            <tr className="border border-gray-900 ">
              <td colSpan={10} className="font-invoiceBold">
                Amount in words :
              </td>
            </tr>
            <tr className="border border-gray-900 ">
              <td colSpan={10} className="font-invoiceBold">
                {invoiceData.totals.amountInWords}
              </td>
            </tr>
            <tr>
              <td colSpan={5}></td>
              <td
                id="sellerName"
                colSpan={5}
                className="font-invoiceBold text-right"
              >
                For {invoiceData.sellerDetails.name}
              </td>
            </tr>
            <tr>
              <td colSpan={9}></td>
              <td id="signature-container" colSpan={1} className="h-12">
                Sign
              </td>
            </tr>
            <tr>
              <td colSpan={5}></td>
              <td colSpan={5} className="font-invoiceBold text-right">
                Authorized Signatory
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
