import {
  AppRoot,
  SplitLayout,
  SplitCol,
  PanelHeader,
  Header,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import CardList from './components/CardList/CardList';
import CartAmount from './components/CartAmount/CartAmount';

const App = () => {
  return (
    <AppRoot>
      <Header>VK</Header>
      <SplitLayout header={<PanelHeader>VK Маркет</PanelHeader>}>
        <SplitCol width={'75%'}>
          <CardList />
        </SplitCol>
        <SplitCol>
          <CartAmount />
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
