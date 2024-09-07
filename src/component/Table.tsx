const Table = () => {
  const tableHead = (title: string) => {
    return (
      <th className="p-1 border border-gray-900 text-left text-sm font-invoiceBold">
        {title}
      </th>
    );
  };
  const tableRow = (title: string) => {
    return <tr className="px-4 py-2 text-sm text-gray-700">{title}</tr>;
  };
  const headings = [
    "SI No",
    "Description",
    "Unit Price",
    "Qty",
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
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200 ">
            <tr>
              {headings.map((heading) => {
                return tableHead(heading);
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2 text-sm text-gray-700">Product 1</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹500</td>
              <td className="px-4 py-2 text-sm text-gray-700">2</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹50</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹950</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹171</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹171</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹171</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹171</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹1,121</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2 text-sm text-gray-700">Product 2</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹700</td>
              <td className="px-4 py-2 text-sm text-gray-700">1</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹0</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹700</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹700</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹700</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹700</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹126</td>
              <td className="px-4 py-2 text-sm text-gray-700">₹826</td>
            </tr>
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
                ₹1,947
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border border-gray-900  font-invoiceBold">
                ₹1,947
              </td>
            </tr>
            <tr className="border border-gray-900 ">
              <td colSpan={10} className="font-invoiceBold">
                Amount in words :
              </td>
            </tr>
            <tr className="border border-gray-900 ">
              <td colSpan={10} className="font-invoiceBold">
                One Thousand Nine Hundred Forty Seven
              </td>
            </tr>
            <tr>
              <td colSpan={5}></td>
              <td colSpan={5} className="font-invoiceBold text-right">
                For Varashidhi Silk Exports:
              </td>
            </tr>
            <tr>
              <td colSpan={5}></td>
              <td colSpan={5} className="text-right">
                <img src="" alt="" />
                Sign
              </td>
            </tr>
            <tr>
              <td colSpan={5}></td>
              <td colSpan={5} className="font-invoiceBold text-right">
                <img src="" alt="" />
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
