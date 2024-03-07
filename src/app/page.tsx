import MyCarousel from "@/components/MyCarousel";
import { getProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  console.log({ products });
  return (
    <main className="bg-white flex flex-col items-center pt-8">
      
      <MyCarousel />

      <section className="mt-4 flex flex-wrap justify-center">
        {products.map((product, key) => (
          <Link href={`checkout/${product.id}`} key={key} className="border p-4 m-4 shadow rounded-lg">
            <div className="relative w-40 h-40">
              <Image
                src={product.image}
                alt="gambar"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-2 w-40 text-ellipsis overflow-hidden h-7">{product.name}</p>
            <p className="font-bold">
              Rp. <span>{product.price}</span>
            </p>
            <p className="text-slate-500 text-xs text-end italic">
              Stok: <span>{product.stock}</span>
            </p>
          </Link>
        ))}
      </section>
      
    </main>
  );
}
