import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './components/Dashboard';
import Layout from './components/layout/Layout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardProvider>
        <Layout>
          <Dashboard />
        </Layout>
      </DashboardProvider>
    </QueryClientProvider>
  );
};

export default App;
