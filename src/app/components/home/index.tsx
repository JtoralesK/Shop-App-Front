import { NewProductsSection } from "./newProductsAdd";
import { ProductsLackOfStock } from "./productsLackOfStock";
import { auth } from "../../auth";
import { getUsersActiveCount, findBestProductSold } from "../../lib/data";
import { PeopleWorking } from "./peopleWorking";
import { BestProductSeller } from "./bestProductSeller";
export async function HomeSection() {
  const session: any = await auth();
  const { data } = await getUsersActiveCount();
  const { data: bestProduct } = await findBestProductSold();

  const user = session.user.user;
  return (
    <>
      <div className="flex gap-1 flex-col">
        <h3 className="text-xl ">New products added</h3>
      </div>
      <div className="w-full flex flex-row mt-4 ">
        <NewProductsSection />
        <div className="w-4/12 h-44  flex justify-end">
          <PeopleWorking data={data} user={user} />
        </div>
      </div>
      <div className="mt-4 w-full h-full flex flex-row justify-between ">
        <ProductsLackOfStock />
        <div className="w-6/12 h-full ">
          <BestProductSeller product={bestProduct} />
        </div>
      </div>
    </>
  );
}
