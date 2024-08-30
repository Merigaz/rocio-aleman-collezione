export default function getUniqueValues({ products, key }: any) {
  const uniqueValues = new Set();

  products.forEach((product: any) => {
    const value = product[key];

    if (Array.isArray(value)) {
      value.forEach((val) => uniqueValues.add(val));
    } else if (value !== null && value !== undefined) {
      uniqueValues.add(value);
    }
  });

  return Array.from(uniqueValues);
}
