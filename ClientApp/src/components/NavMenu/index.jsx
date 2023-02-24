import styles from './styles.module.css';
import Container from "react-bootstrap/esm/Container";
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Container className="mb-2 mt-2">
              <ul className={`navbar-nav d-flex gap-5 me-auto mb-2 mb-lg-0 ${styles.menu}`}>
                <Link to="/">
                  <li className="nav-item">Início</li>
                </Link>
                <Link to="/">
                  <li className="nav-item">Quem somos</li>
                </Link>
                <Link to="/">
                  <li className="nav-item">Vagas</li>
                </Link>
                <Link to="/">
                  <li className="nav-item">Orientação Profissional</li>
                </Link>
                  <Link to="/"><li className="nav-item">Fale Conosco</li>
                </Link>
                <Link to="/">
                  <li className="nav-item">Portal Senac</li>
                </Link>
                <Link to="/">
                  <li className="nav-item">Central de Dúvidas</li>
                </Link>
              </ul>
            </Container>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavMenu