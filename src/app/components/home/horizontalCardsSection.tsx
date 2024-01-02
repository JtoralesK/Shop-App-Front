import { HorizontalCard } from "../../UI/horizontalCard";
export function HorizontalCardsSection() {
  return (
    <>
      <div className="w-5/12 h-full ">
        <h4>Lack of stock</h4>
        <div className="mt-3 flex flex-col gap-3 h-5/6 w-full">
          <HorizontalCard
            title="Jean Cherry Daddy Blue Paul "
            image="/jean.jpg"
            stock="1/5"
          />
          <HorizontalCard
            title="Girls Women High Waisted Pleated Skirt"
            image="/skirtBlue.jpeg"
            stock="1/5"
          />
          <HorizontalCard
            title="Cotton-Jersey T-Shirt"
            image="/tshirt.jpg"
            stock="1/5"
          />
        </div>
      </div>
    </>
  );
}
