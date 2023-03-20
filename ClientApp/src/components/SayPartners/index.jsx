
import styles from "./styles.module.css";


const SayPartners = () => {
  
  return (
    <>
      <div className="container d-flex flex-wrap flex-md-nowrap py-5">
        <div className={`w-25 d-flex align-items-center ${styles.text}`}>
          O que nossos parceiros dizem
        </div>
        <div id="carouselExampleIndicators" className={`container d-flex align-items-center rounded ${styles.partnersCard}`} data-ride="carousel">
          <div className="slider">
            <div className="slider-content">
              <div className="slider-item mx-5">
                <img src="images/aspas.png" alt="" />
                <p className="testimonialContent">
                    “É uma satisfação contar com a parceria com o Senac no recrutamento de
                    candidatos para seleção e contratação em nossa empresa.Contamos com
                    quase 80% da nossa equipe de atendimento formada por profissionais
                    qualificados pelo Senac que aplicam com bastante eficiência todo o
                    conhecimento adquirido nos cursos realizados na instituição.”
                </p>
                <span className="companyTestimonial">Rede Mais</span>
              </div>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-5">
              <input className="radio" name="slide" type="radio" />
              <input className="radio" name="slide" type="radio" />
              <input className="radio" name="slide" type="radio" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SayPartners