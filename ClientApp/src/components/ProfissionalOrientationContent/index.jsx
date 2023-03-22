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
        <div className="container">
          <div className="d-flex flex-wrap">
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
      </div>
      <div className="container">
        <div className="d-flex justify-content-around flex-wrap p-5">
          <div className="d-flex gap-5">
            <div className="row rounded align-items-center" style={{backgroundColor: '#F2A32C', width: '120px', height: '120px'}}>
              <img className="ms-4" src="images/modelo-curriculo.png" alt="Modelo de Curriculo" style={{width: '80px', height: '68px'}} />
            </div>
            <div className="d-flex flex-column justify-content-between w-50">
              <p style={{color: '#F39200'}} className="fs-5">Modelo de currículo gratuito</p>
              <button className={`text-uppercase border-0 text-white rounded ${styles.BtnCurricPrimer}`}>baixar agora</button>
            </div>
          </div>
          <div className="d-flex gap-5">
            <div className="row rounded align-items-center" style={{backgroundColor: '#F2A32C', width: '120px', height: '120px'}}>
              <img className="ms-4" src="images/modelo-cartilha.png" alt="Modelo de Cartilha" style={{width: '80px', height: '80px'}}  />
            </div>
            <div className="d-flex flex-column justify-content-between w-50">
              <p style={{color: '#F39200'}} className="fs-5">Cartilha de Orientação Profissional</p>
              <button className={`text-uppercase border-0 text-white rounded ${styles.BtnCurricPrimer}`}>baixar agora</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: '#FAFAFA'}}>
        <div className="container p-5">
          <div className="d-flex">
            <div className="d-flex flex-column">
              <div className={` ${styles.TextJobInterview}`}>
                O que fazer numa entrevista de emprego quando perguntas te deixam sem resposta
              </div>
              <button className={`text-uppercase border-0 text-white rounded mt-5 ${styles.BtnJobInterview}`}>saiba mais</button>
            </div>
            <img src="images/job-interview.png" alt="imagem de entrevista de emprego" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfissionalOrientationContent