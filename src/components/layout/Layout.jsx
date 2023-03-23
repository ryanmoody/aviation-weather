import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-100">
      <Header />
      <main className="flex flex-1 flex-col p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
