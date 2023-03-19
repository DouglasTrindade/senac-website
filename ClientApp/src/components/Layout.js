import NavBar from './NavBar/index';
import Footer from './Footer';

const Layout = ({children}) => {

    return (
      <div>
        <NavBar />
          {children}
        <Footer />
      </div>
    );
  }

export default Layout
