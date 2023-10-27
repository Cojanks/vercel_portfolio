import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Introduction from './pages/Introduction';
import { GlobalStyles } from './styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Skills from './pages/Skills';
import Error from './pages/Error';
import Loader from './components/Loader';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error type="wildcard-url" />,
    children: [
      {
        path: '/',
        element: <Introduction />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/history',
        element: <Error type="under-construction" />,
      },
      {
        path: '/contact',
        element: <Error type="under-construction" />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
