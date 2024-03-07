import { getProductById } from "@/lib/data";
import React, { useState } from "react";
import Checkout from "@/components/Checkout"

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  return <Checkout product={product}/>;
}
