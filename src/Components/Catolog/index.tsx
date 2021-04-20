import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Product } from '../../store/modules/cart/types';
import { CatalogItem } from './CatalogItem';

export function Catalog(): JSX.Element {
  const [catalog, setCatalog] = useState<Product[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </>
  );
}
