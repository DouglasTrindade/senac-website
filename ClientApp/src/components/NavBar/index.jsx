import styles from './styles.module.css';

const NavTop = () => {
  
  return (
    <>
      <div className={`container ${styles.container}`}>
        <div className="row">
          <div className="col-md-6">
            <img src="images/logo-home.svg" alt="Logo Empregabilidade" />
          </div>
          <div className="justify-content-center mt-4 mt-md-0 justify-content-md-end d-flex gap-3 col-md-6">
            <button type="button" className={`d-flex justify-content-center align-items-center gap-2 btn text-white ${styles.btnNav}`}>
              <img src="images/iconUser.png" width={14} height={14} alt="user circle" />
              Candidato
            </button>
            <button type="button" className={`d-flex justify-content-center align-items-center gap-2 btn text-white ${styles.btnNav}`}>
              <img src="images/bagWork.png" alt="bag work" />
              Empregador
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavTop