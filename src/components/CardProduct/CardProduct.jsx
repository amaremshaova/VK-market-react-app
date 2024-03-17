import {
  Card,
  Gallery,
  Button,
  ButtonGroup,
  Div,
  InfoRow,
  SimpleCell,
  Group,
  Header,
} from '@vkontakte/vkui';
import { Icon16Delete, Icon16Add, Icon16Dash } from '@vkontakte/icons';
import { useDispatch } from 'react-redux';
import {
  increaseAmountProduct,
  decreaseAmountProduct,
  deleteProduct,
} from '../../redux/cart/actions-cart';

const buttonGroupHighlightStyles = {
  boxSizing: 'border-box',
};

const buttonNavStyles = {
  minWidth: '30%',
};
const CardProduct = ({ product }) => {
  const { title, images, description, price, stock } = product;

  const dispatch = useDispatch();

  const increaseAmountProductHandler = (product) => {
    dispatch(increaseAmountProduct(product));
  };

  const decreaseAmountProductHandler = (product) => {
    dispatch(decreaseAmountProduct(product));
  };

  const deleteProductHandler = (product) => {
    dispatch(deleteProduct(product));
  };

  return (
    <Card style={{ width: '30%', margin: '20px' }}>
      <Gallery slideWidth="100%" bullets="dark">
        {images?.map((img) => (
          <img
            key={img}
            src={img}
            alt={description}
            style={{ display: 'block' }}
          />
        ))}
      </Gallery>
      <Group header={<Header mode="secondary">{title ? title : ''}</Header>}>
        <SimpleCell multiline>
          <InfoRow header="Описание">{description ? description : ''}</InfoRow>
        </SimpleCell>
        <SimpleCell>
          <InfoRow header="Количество">{stock ? stock : ''}</InfoRow>
        </SimpleCell>
        <SimpleCell>
          <InfoRow header="Стоимость (руб)">{price ? price : ''}</InfoRow>
        </SimpleCell>
      </Group>
      <Div>
        <ButtonGroup style={buttonGroupHighlightStyles} stretched>
          <Button
            size="l"
            appearance="accent"
            width={'50px'}
            style={buttonNavStyles}
            onClick={() => deleteProductHandler(product)}
          >
            <Icon16Delete />
          </Button>
          <Button
            size="l"
            appearance="accent"
            width={'50px'}
            style={buttonNavStyles}
            onClick={() => increaseAmountProductHandler(product)}
          >
            <Icon16Add />
          </Button>
          <Button
            size="l"
            appearance="accent"
            width={'50px'}
            style={buttonNavStyles}
            onClick={() => decreaseAmountProductHandler(product)}
          >
            <Icon16Dash />
          </Button>
        </ButtonGroup>
      </Div>
    </Card>
  );
};

export default CardProduct;
