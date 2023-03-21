import styles from './styles.module.css';

const ProfissionalOrientationContent = () => {
  return (
    <>
      <div className="d-flex align-items-center" style={{
        backgroundImage: `url("images/profissional-orientation-img-full.png")`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        height: `685px`,
        width: `100%`,
        }}>
        <div className="container d-flex flex-wrap">
          <div className={`d-flex flex-column align-items-start`} style={{width: '500px'}}>
            <div className={`${styles.TitleImg}`}>
              Um serviço exclusivo
              para alunos e ex-alunos
              Senac RN
            </div>
            <p className="mt-4">Inscreva-se e participe da mentoria profissional que irá transformar a sua carreira</p>
            <button className={`text-uppercase mt-2 border-0 rounded text-white ${styles.BtnInscription}`}>fazer inscrição</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfissionalOrientationContent