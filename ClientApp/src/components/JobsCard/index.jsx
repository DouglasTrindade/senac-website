import styles from "./styles.module.css";


const JobsCard = () => {
 return (
  <>
    <div className="container mb-4">
      <div className="mt-5 mb-4" style={{width: '25%'}}>
        <h1 className={`${styles.title}`}>Confira as vagas mais recentes</h1>
      </div> 
      <div className="row justify-content-around">
        <div className="card col-4" style={{maxWidth: '20rem'}}>
          <div className="d-flex justify-content-between text-uppercase fs-6">
            <div className="">Estágio</div>
            <div className="">Natal/RN</div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Assistente Administrativo</h5>
            <p className="card-text">
              Possuir cursos na área, domínio do pacote office, saber usar a nuvem e e-mail, 
              noções de organização e armazenamento de arquivos e de dados e facilidade para aprender a usar novos sistemas.
            </p>
          </div>
        </div>
        <div className="card col-4" style={{maxWidth: '20rem'}}>
          <div className="d-flex justify-content-between text-uppercase">
            <div className="">Estágio</div>
            <div className="">Natal/RN</div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Auxiliar de Cozinha</h5>
            <p className="card-text">Possuir curso e experiência na área de cozinha, trabalhar com segurança e disponibilidade de horário (16h00 às 00h20).</p>
          </div>
        </div>
        <div className="card col-4" style={{maxWidth: '20rem'}}>
          <div className="d-flex justify-content-between text-uppercase">
            <div className="">Estágio</div>
            <div className="">Natal/RN</div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Cabeleireiro(a)</h5>
            <p className="card-text">Possuir curso na área e possuir o MEI.</p>
          </div>
        </div>
      </div>
    </div>
  </>
 ) 
}

export default JobsCard