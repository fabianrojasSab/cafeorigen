// src/pages/shop/products.tsx
import { getProductos } from "@/lib/db/queries/products";

export default function ProductsPage({ productos }) {
  return (
    <div>
      <h1>Productos</h1>
        {productos.map((p) => (
          <div key={p.id_producto}>{p.nombre}</div>
        ))}
    </div>
  );
}

export async function getServerSideProps() {
  const productos = await getProductos();

  return {
    props: { productos }
  };
}
