import styles from './styles.module.css';
import NavMenu from '../NavMenu';
import { useState } from 'react';

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className={`container row ${styles.container}`}>
          <div className="col-md-6">
            <img src="images/logo-home.svg" alt="Logo Empregabilidade" />
          </div>
          <div className="d-flex justify-content-center mt-4 mt-md-0 justify-content-md-end gap-3 col-md-6">
            <button type="button" className={`justify-content-center align-items-center gap-2 btn text-white d-none d-lg-flex  ${styles.btnNav}`}>
              <img src="images/iconUser.png" width={14} height={14} alt="user circle" />
              Candidato
            </button>
            <button type="button" className={`justify-content-center align-items-center gap-2 btn text-white d-none d-lg-flex ${styles.btnNav}`}>
              <img src="images/bagWork.png" alt="bag work" />
              Empregador
            </button>
            <span className="d-flex flex-column d-lg-none" onClick={(e) => {
              setMenu(!menu)
            }}>
              <img className="" src="images/menu.png" alt="menu-dropdown" />
              <img src="images/hamburguer.png" alt="dropdown" />
            </span>
          </div>
        </div>
        <NavMenu menu={menu} />
      </div>
    </>
  )
}

export default NavBar