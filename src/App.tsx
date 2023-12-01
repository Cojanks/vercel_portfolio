import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Introduction from './pages/Introduction';
import { GlobalStyles } from './styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Skills from './pages/Skills';
import Error from './pages/Error';
import History from './pages/History';
import RnD from './pages/RnD';

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
        index: true,
        errorElement: <Error type="generic" />,
      },
      {
        path: '/skills',
        element: <Skills />,
        errorElement: <Error type="generic" />,
      },
      {
        path: '/history',
        element: <History />,
        errorElement: <Error type="under-construction" />,
      },
      {
        path: '/rnd',
        element: <RnD />,
        errorElement: <Error type="under-construction" />,
      },
      {
        path: '/*',
        element: <Error type="wildcard-url" />,
      },
    ],
  },
]);

function App() {
  console.log(
    "Welcome to my Portfolio! Resumes can only tell you so much and I agree with Anton Chekhov when he says 'Don't tell me the moon is shining; show me the glint of light on broken glass.' "
  );
  console.log('So please, let me show you my skills, my work, and myself.');
  console.log('...');
  console.log(
    '(I may have also hidden easter eggs and hidden interactions all over the place, feel free to try and find them all!)'
  );
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
