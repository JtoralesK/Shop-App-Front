import { InvoiceArrayItem } from "./addProducts";
type Props = {
  products: InvoiceArrayItem[];
};

export function InvoiceCard(p: Props) {
  let cont = 0;
  let total = 0;
  return (
    <>
      <div className={`w-full h-[90%] bg-firstWhite`}>
        <div className="w-full h-5/6 flex flex-col px-16 pt-14 gap-2">
          <div className=" h-20">
            <h4 className="font-bold text-lg">Invoice</h4>
            <p className="text-xs">Invoice No: F-03950285</p>
          </div>
          <div className=" h-20">
            <p className="text-sm">Client</p>
            <p className="text-xs">John Doe</p>
          </div>
          <div className=" min-h-20">
            <table className="w-full">
              <thead>
                <tr className="w-full text-xs border-b">
                  <td className=" w-3/6 ">Product</td>
                  <td className="text-center w-1/6">Rate</td>
                  <td className="text-center w-1/6">amount</td>
                  <td className="text-center w-1/6">Subtotal</td>
                </tr>
              </thead>
              <tbody className="text-xs">
                {p.products.map((item) => {
                  const { amount, newProductToBuy } = item;
                  if (cont < 10) {
                    total += newProductToBuy.price * amount;
                    cont++;
                    return (
                      <tr key={newProductToBuy.productId}>
                        <td className="">{newProductToBuy.name}</td>
                        <td className="text-center">{newProductToBuy.price}</td>
                        <td className="text-center">{amount}</td>
                        <td className="text-center">
                          {newProductToBuy.price * amount}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full h-1/6 bg-primary text-firstWhite px-16 py-2 flex justify-center  items-center">
          <div className="w-full  ">
            <div className="flex flex-row justify-between  text-xs">
              <p></p>
              <p className="">Date</p>
              <p>Total</p>
            </div>
            <div className="flex flex-row justify-between  h-10 border-y items-center">
              <div className="">Bill</div>
              <div>9 Jen 2024</div>
              {total.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
