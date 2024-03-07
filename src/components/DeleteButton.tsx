"use client";

import { deleteProduct } from "@/lib/action";
import { Trash2 } from "lucide-react";

export default function DeleteButton({id}: {id: string}) {
  return (
    <div onClick={() => {deleteProduct(id)}} className="flex">
      <Trash2 className="mr-2 h-4 w-4 mt-0.5" />
      <span>Delete</span>
    </div>
  );
}
