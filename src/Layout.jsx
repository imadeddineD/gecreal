import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet /> {/* This is where your routed components will be rendered */}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
