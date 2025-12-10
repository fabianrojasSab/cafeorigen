import { getProductos } from "@/lib/db/queries/products";


export default async function ProductsPage() {
  const productos = await getProductos(); // esto corre en el servidor

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