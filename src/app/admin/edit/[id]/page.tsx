import FormEdit from "@/components/FormEdit";
import { getProductById } from "@/lib/data";


export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  return (
    <div className="flex justify-center py-10">
      <FormEdit product={product} />
    </div>
  );
}

