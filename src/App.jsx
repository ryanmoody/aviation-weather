import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/layout/Layout';
import Dashboard from './components/Dashboard';
import { DashboardProvider } from './context/DashboardContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <DashboardProvider>
          <Dashboard />
        </DashboardProvider>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
