import styles from './styles.module.css';


import { Button}  from 'react-bootstrap'
import { Collapse } from 'react-bootstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({menu = false}) => {

  return (
    <>
      <nav className={`border navbar navbar-expand-lg ${styles.navbar}`}>
        <div className="container-fluid">
          <div className="container mb-2 mt-2 d-none d-sm-none d-lg-block">
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
              <Link to="/">
                <li className="nav-item">Fale Conosco</li>
              </Link>
              <Link to="/">
                <li className="nav-item">Portal Senac</li>
              </Link>
              <Link to="/">
                <li className="nav-item">Central de Dúvidas</li>
              </Link>
            </ul>
          </div>
          <Collapse in={menu}>
            <div id="collapse-menu">
              <div className="container mb-2 mt-2">
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
                  <Link to="/">
                    <li className="nav-item">Fale Conosco</li>
                  </Link>
                  <Link to="/">
                    <li className="nav-item">Portal Senac</li>
                  </Link>
                  <Link to="/">
                    <li className="nav-item">Central de Dúvidas</li>
                  </Link>
                </ul>
              </div>
            </div>
          </Collapse>
        </div>
      </nav>
    </>
  )
}

export default NavMenu