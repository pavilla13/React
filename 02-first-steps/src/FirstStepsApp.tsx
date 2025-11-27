import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "XBOX One", quantity: 2 },
  { productName: "PlayStation 5", quantity: 3 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name="Nintendo Switch" quantity={5} />
      <ItemCounter name="XBOX One" quantity={7} />
      <ItemCounter name="PlayStation 5" quantity={9} /> */}
    </>
  );
}
