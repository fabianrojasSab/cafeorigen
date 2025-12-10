import { getProductos, ProductoRow } from "@/lib/db/queries/products";
import { GetServerSideProps } from "next";


type Props = {
  productos: ProductoRow[];
};

export default function Page({ productos }: Props) {
  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((p) => (
          <li key={p.id_producto}>{p.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const productos = await getProductos();
//   return { props: { productos } };
// };