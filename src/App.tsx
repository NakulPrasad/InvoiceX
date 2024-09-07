import { useState } from "react";
import Sidebar from "./component/Sidebar";
import Home from "./pages/Home";
import { invoice } from "./util/invoice";

const App = () => {
  const [invoiceData, setInvoiceData] = useState(invoice);
  return (
    <section id="main" className="grid grid-cols-7">
      <Sidebar invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
      <Home invoiceData={invoiceData} />
    </section>
  );
};

export default App;
