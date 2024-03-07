"use-client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Product } from "@prisma/client";
import { toCapitalize } from "@/lib/utils";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function TableAdmin({ products }: { products: Product[] }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold capitalize">Id</TableHead>
            <TableHead className="font-bold capitalize">Name</TableHead>
            <TableHead className="font-bold capitalize">Price</TableHead>
            <TableHead className="font-bold capitalize">Stock</TableHead>
            <TableHead className="font-bold capitalize">Description</TableHead>
            <TableHead className="font-bold capitalize">Image</TableHead>
            <TableHead className="font-bold capitalize">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              {Object.values(product).map((el, i) => (
                <TableCell key={i}>{el}</TableCell>
              ))}
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <Link href={`/admin/edit/${product.id}`}>
                      <DropdownMenuItem className="hover:cursor-pointer">
                        <Pencil className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className="text-red-700 hover:cursor-pointer">
                      <DeleteButton id={product.id}/>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
