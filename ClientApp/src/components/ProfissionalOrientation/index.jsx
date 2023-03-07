import styles from './styles.module.css'

const ProfissionalOrientation = () => {
  return (
    <>
      <div className="main mt-5" style={{backgroundColor: '#FAFAFA'}}>
        <div className="container">
          <div className='row'>
            <div className='col'>
              <div className={`w-100 mt-4 ${styles.title}`}>
                Obtenha orientação na carreira profissional
              </div>
              <div className={`w-100 mt-3 ${styles.subtitle}`}>
                Um serviço exclusivo para alunos e ex-alunos Senac RN
              </div>
              <div className='w-100 mt-5'>
                <p>Ajuda especializada para você que está fazendo a sua primeira escolha profissional,
                  ou deseja rever as suas decisões de carreira, iniciar uma nova atividade ou buscar recolocação
                  no mercado de trabalho.
                </p>
              </div>
              <div >
                <button className={`text-uppercase rounded border border-0 text-white ${styles.btnKnowMore}`}>saiba mais</button>
              </div>
            </div>
            <div className='col'><img src="images/profissional-orientation.png" width={650} alt="Orientação Profissional"></img></div>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default ProfissionalOrientation