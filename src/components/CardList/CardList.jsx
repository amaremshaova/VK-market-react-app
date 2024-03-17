import { Panel, Group, CardGrid } from '@vkontakte/vkui';

import CardProduct from '../CardProduct/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/products/actions-products';

const CardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);

  return (
    <Panel>
      <Group>
        <CardGrid
          size="l"
          style={{ alignItems: 'center', flexDirection: 'column' }}
        >
          {products?.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
};

export default CardList;
