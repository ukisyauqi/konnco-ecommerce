"use server";

import { PrismaClient, Product } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const prisma = new PrismaClient();

const ProductSchema = z.object({
  name: z.string(),
  price: z.number().int().positive(),
  stock: z.number().int().positive(),
  description: z.string(),
  image: z.string(),
});

// Create a new product
export async function createProduct(formData: FormData) {
  const validatedFields = ProductSchema.safeParse({
    name: formData.get("name"),
    price: parseInt(formData.get("price") as string),
    stock: parseInt(formData.get("stock") as string),
    description: formData.get("description"),
    image: formData.get("image"),
  });
  if (!validatedFields.success) {
    throw new Error(validatedFields.error.toString());
  }

  await prisma.product.create({
    data: validatedFields.data,
  });
  revalidatePath("/admin");
  redirect("/admin");
}

// Update a product
export async function updateProduct(id: string, formData: FormData) {
  const validatedFields = ProductSchema.safeParse({
    name: formData.get("name"),
    price: parseInt(formData.get("price") as string),
    stock: parseInt(formData.get("stock") as string),
    description: formData.get("description"),
    image: formData.get("image"),
  });
  if (!validatedFields.success) {
    throw new Error(validatedFields.error.toString());
  }

  await prisma.product.update({
    where: {
      id: id,
    },
    data: validatedFields.data,
  });
  revalidatePath("/admin");
  redirect("/admin");
}

// Delete a product
export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/admin");
  redirect("/admin");
}
