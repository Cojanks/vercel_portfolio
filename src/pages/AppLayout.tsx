import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import { store } from '../store/store.ts';

const StyledMain = styled.main`
  display: flex;
  margin: 0 5vw;
`;

function AppLayout() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </Provider>
    </>
  );
}

export default AppLayout;
