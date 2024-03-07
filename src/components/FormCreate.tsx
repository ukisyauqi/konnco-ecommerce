import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createProduct, updateProduct } from "@/lib/action";
import { getProductById } from "@/lib/data";
import { Product } from "@prisma/client";
import { useFormState } from "react-dom";

export default function FormCreate() {

  return (
    <form className="w-96 border p-5 rounded-md" action={createProduct}>

      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        className="mb-4"
      />
      <Label htmlFor="price">Price (Rp)</Label>
      <Input
        type="number"
        id="price"
        name="price"
        className="mb-4"
      />
      <Label htmlFor="stock">Stock</Label>
      <Input
        type="number"
        id="stock"
        name="stock"
        className="mb-4"
      />
      <Label htmlFor="description">Description</Label>
      <Input
        type="text"
        id="description"
        name="description"
        className="mb-4"
      />
      <Label htmlFor="image">Image Url</Label>
      <Input
        type="text"
        id="image"
        name="image"
        className="mb-8"
      />
      <Button type="submit" className="w-full">
        Create Product
      </Button>
    </form>
  );
}
