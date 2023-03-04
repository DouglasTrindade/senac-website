import styles from "./styles.module.css";


const JobsCard = () => {
 return (
  <>
    <div>
      <div className="container mb-4">
        <div className="mt-5 mb-4" style={{width: '25%'}}>
          <h1 className={`${styles.title}`}>Confira as vagas mais recentes</h1>
        </div> 
        <div className="row justify-content-between">
          <span className={`col-4 rounded py-3 ${styles.card}`} style={{ maxWidth: '23rem' }}>
            <div className="d-flex justify-content-between fs-6 mb-3">
              <div className="fs-6 text-uppercase">Estágio</div>
              <div className="">Natal/RN</div>
            </div>
            <div className="card-body fs-6">
              <div className="fw-semibold fs-6" style={{ width: '25%' }}>Assistente Administrativo</div>
              <p className="card-text mt-4">
                Possuir cursos na área, domínio do pacote office, saber usar a nuvem e e-mail, 
                noções de organização e armazenamento de arquivos e de dados e facilidade para aprender a usar novos sistemas.
              </p>
            </div>
          </span>
          <span className={`col-4 rounded py-3 ${styles.card}`} style={{ maxWidth: '23rem' }}>
            <div className="d-flex justify-content-between fs-6 mb-3">
              <div className="fs-6 text-uppercase">Estágio</div>
              <div className="">Natal/RN</div>
            </div>
            <div className="card-body fs-6">
              <div className="fw-semibold fs-6" style={{ width: '25%' }}>Auxiliar de cozinha</div>
              <p className="card-text mt-4">Possuir curso e experiência na área de cozinha, trabalhar com segurança e disponibilidade de horário (16h00 às 00h20).</p>
            </div>
          </span>
          <span className={`col-4 rounded py-3 ${styles.card}`} style={{ maxWidth: '23rem' }}>
            <div className="d-flex justify-content-between fs-6 mb-3">
              <div className="fs-6 text-uppercase">Estágio</div>
              <div className="">Natal/RN</div>
            </div>
            <div className="card-body fs-6">
              <div className="fw-semibold fs-6" style={{ width: '25%' }}>Cabeleireiro(a)</div>
              <p className="card-text mt-4">Possuir curso na área e possuir o MEI.</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  </>
 ) 
}

export default JobsCard