import TableAdmin from "@/components/TableAdmin";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/data";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const products = await getProducts();
  console.log({ products });
  return (
    <div className="p-12">
      <div className="flex mb-4">
        <div className="flex-1"></div>
        <Link href="/admin/create">
          <Button className="ml-auto bg-green-600">
            <Plus className="mr-1" />
            Add Product
          </Button>
        </Link>
      </div>

      <TableAdmin products={products} />
    </div>
  );
}
