import styles from './styles.module.css';
import { Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavMenu = ({menu = false}) => {

  return (
    <>
      <nav className={`navbar navbar-expand-lg w-100 d-none d-lg-block ${styles.navbar}`}>
        <div className="container-fluid">
          <div className="container mb-2 mt-2 d-none d-lg-block">
            <ul className={`navbar-nav d-flex gap-lg-5 me-auto mb-2 mb-lg-0 ${styles.menu}`}>
              <Link to="/">
                <li className="nav-item text-nowrap">Início</li>
              </Link>
              <Link to="/quem-somos">
                <li className="nav-item text-nowrap">Quem somos</li>
              </Link>
              <Link to="/vagas">
                <li className="nav-item text-nowrap">Vagas</li>
              </Link>
              <Link to="/orientacao-profissional">
                <li className="nav-item text-nowrap">Orientação Profissional</li>
              </Link>
              <Link to="/">
                <li className="nav-item text-nowrap">Fale Conosco</li>
              </Link>
              <Link to="/">
                <li className="nav-item text-nowrap">Portal Senac</li>
              </Link>
              <Link to="/">
                <li className="nav-item text-nowrap">Central de Dúvidas</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <Collapse in={menu}>
            <div className="w-100 mb-2 mt-2">
              <ul className={`navbar-nav d-flex me-auto mb-2 mb-lg-0 ${styles.menu}`}>
                <Link to="/" className={`${styles.option}`}>
                  <li className="container nav-item py-3">Início</li>
                </Link>
                <Link to="/" className={`${styles.option}`}>
                  <li className="container nav-item py-3">Quem somos</li>
                </Link>
                <Link to="/" className={`${styles.option}`}>
                  <li className="container nav-item py-3">Vagas</li>
                </Link>
                <Link to="/" className={`${styles.option}`}>
                  <li className="container nav-item py-3">Orientação Profissional</li>
                </Link>
                <Link to="/" className={`${styles.option}`}>
                  <li className="container nav-item py-3">Fale Conosco</li>
                </Link>
                <Link to="/" className={`${styles.option}`}>
                  <li className="container nav-item py-3">Portal Senac</li>
                </Link>
                <Link to="/" className={`${styles.option}`}>
                  <li className="container nav-item py-3">Central de Dúvidas</li>
                </Link>
              </ul>
            </div>
        </Collapse>
    </>
  )
}

export default NavMenu