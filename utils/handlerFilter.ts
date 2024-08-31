export default function filterProducts(
  { productsData }: any,
  { filterData }: any
) {
  return productsData.filter((producto: any) => {
    return filterData.every((caracteristica: any) => {
      return producto[caracteristica] !== undefined;
    });
  });
}
