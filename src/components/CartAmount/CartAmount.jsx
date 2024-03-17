import { Group, InfoRow, Header, List, Cell, Avatar } from '@vkontakte/vkui';

import { useSelector } from 'react-redux';

const CartAmount = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Group
      style={{ position: 'fixed', margin: '10px', width: '10%' }}
      header={<Header mode="secondary">КОРЗИНА</Header>}
    >
      <List>
        {cart.map((product) => (
          <Cell key={product.id}>
            <Avatar src={product.images[0]} />
            <InfoRow>{product.title}</InfoRow>
            <InfoRow header="Количество">{product.amount}</InfoRow>
            <InfoRow header="Сумма">{product.amount * product.price}</InfoRow>
          </Cell>
        ))}
      </List>
    </Group>
  );
};

export default CartAmount;
