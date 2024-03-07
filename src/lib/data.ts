"use server";

import { PrismaClient, Product } from "@prisma/client";
import { unstable_noStore } from "next/cache";

const prisma = new PrismaClient();

// Get products with pagination
export async function getProducts(): Promise<Product[]> {
  unstable_noStore();
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    throw new Error("Error")
  }
}

// Get a product by ID
export async function getProductById(productId: string): Promise<Product> {
  unstable_noStore()
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    // return product;
    if (product) {
      return product
    } else {
      throw new Error("Error")
    }
  } catch (error) {
    throw new Error("Error");
  }
}
