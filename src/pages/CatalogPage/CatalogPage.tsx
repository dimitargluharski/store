import { useEffect, useMemo, useState } from 'react';

import { CatalogCard } from '../../components/CatalogCard/CatalogCard';

interface CatalogPageProps {
  id: number;
  product: string;
  image: string;
  category: string;
  title: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  description: string
}[]

export const CatalogPage = () => {
  const [products, setProducts] = useState<CatalogPageProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const uniqueCategories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  const handleSetCategory = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className='flex flex-col gap-5 w-full'>
      <div className='flex gap-1 rounded-md w-full'>
        {uniqueCategories.map((category, index) => (
          <div
            key={index}
            className={`bg-slate-400 p-2 text-white rounded-md transition-colors cursor-pointer ${selectedCategory === category ? 'bg-slate-600' : ''
              }`}
            onClick={() => handleSetCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold">Clothes</h2>

      <section className='grid lg:grid-cols-8 gap-2'>
        {filteredProducts.map((data, index) => (
          <CatalogCard {...data} key={index} />
        ))}
      </section>
    </div>
  );
};
