import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import { store } from '../store/store.ts';
import { deviceQuery } from '../styles/breakpoints.ts';

const StyledMain = styled.main`
  display: flex;
  margin: 0 5vw;

  @media only screen and (${deviceQuery.tabletMax}) {
    margin: 0;
  }
`;

function AppLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <Provider store={store}>
        {pathname !== '/rs' && <Header />}

        <StyledMain>
          <Outlet />
        </StyledMain>
      </Provider>
    </>
  );
}

export default AppLayout;
