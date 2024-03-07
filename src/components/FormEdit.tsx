import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProduct } from "@/lib/action";
import { getProductById } from "@/lib/data";
import { Product } from "@prisma/client";
import { useFormState } from "react-dom";

export default function FormEdit({ product }: { product: Product }) {
  const updateProductWithId = updateProduct.bind(null, product.id)
  return (
    <form className="w-96 border p-5 rounded-md" action={updateProductWithId}>

      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        defaultValue={product.name}
        className="mb-4"
      />
      <Label htmlFor="price">Price (Rp)</Label>
      <Input
        type="number"
        id="price"
        name="price"
        defaultValue={product.price}
        className="mb-4"
      />
      <Label htmlFor="stock">Stock</Label>
      <Input
        type="number"
        id="stock"
        name="stock"
        defaultValue={product.stock}
        className="mb-4"
      />
      <Label htmlFor="description">Description</Label>
      <Input
        type="text"
        id="description"
        name="description"
        defaultValue={product.description}
        className="mb-4"
      />
      <Label htmlFor="image">Image Url</Label>
      <Input
        type="text"
        id="image"
        name="image"
        defaultValue={product.image}
        className="mb-8"
      />
      <Button type="submit" className="w-full">
        Edit Product
      </Button>
    </form>
  );
}
