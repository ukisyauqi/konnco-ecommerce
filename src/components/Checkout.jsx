'use client'
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Checkout({ product }) {

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => quantity < product.stock ? prevState + 1 : product.stock);
  };

  const checkout = async () => {
    const data = {
      id: product.id,
      productName: product.name,
      price: product.price,
      quantity: quantity
    }

    const response = await fetch("/api/tokenizer", {
      method: "POST",
      body: JSON.stringify(data)
    })

    const requestData = await response.json()
    console.log({ requestData })
    window.snap.pay(requestData.token)
  };

  return (
    <>
      <div className="max-w-xl mx-auto sm:p-16 flex justify-center p-4">
        <div className="flex flex-col rounded-lg">
          <Image
            src={product.image}
            alt="..."
            width={500}
            height={500}
          />
          <div className="border border-gray-100 bg-white p-6">
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {product.name}
            </h3>
            <p className="mt-1.5 text-sm text-gray-700">Rp {product.price}</p>
            <p className="py-4 text-sm text-gray-700 text-justify">
              {product.description}
            </p>
            <p className="py-4 text-sm text-gray-700 text-justify">
              stock:{product.stock}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex sm:gap-4">
                <button
                  className="transition-all hover:opacity-75"
                  onClick={decreaseQuantity}
                >
                  ➖
                </button>

                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  className="h-10 w-16 text-black border-transparent text-center"
                  onChange={quantity}
                />

                <button
                  className="transition-all hover:opacity-75"
                  onClick={increaseQuantity}
                >
                  ➕
                </button>
              </div>
              <Button
                onClick={checkout}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}