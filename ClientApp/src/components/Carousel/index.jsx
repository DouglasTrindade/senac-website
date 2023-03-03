import styles from "./styles.module.css"
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    
    <Carousel className={styles.carouselImage}>
        <Carousel.Item>
          <div className="w-100 d-flex flex-column justify-content-center text-white active"
            style={{
              backgroundImage: `url("images/senac2.png")`,
              backgroundPosition: `center center`,
              backgroundSize: `cover`,
              baclgroundRepeat: `no-repeat`,
              height: `65vh`
            }}>
              <div className="container">
                <h3 className={`d-flex text-wrap ${styles.text}`} style={{ width: '25%' }}>Aluno ou ex-aluno Senac RN, encontre as melhores vagas do mercado</h3>
                <button className={`d-flex justify-content-center align-items-center gap-2 btn text-white text-uppercase mt-4 ${styles.btnNav}`}>
                  encontrar vagas
                </button>
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="w-100 d-flex flex-column justify-content-center text-white"
            style={{
              backgroundImage: `url("images/senac3.png")`,
              backgroundPosition: `center center`,
              backgroundSize: `cover`,
              baclgroundRepeat: `no-repeat`,
              height: `65vh`
            }}>
              <div className="container">
                <h3 className={`text-wrap ${styles.text}`} style={{ width: '25%' }}>Conte com profissionais qualificados para sua empresa</h3>
                <button className={`d-flex justify-content-center align-items-center gap-2 btn text-white text-uppercase mt-4 ${styles.btnNav}`}>
                  cadastrar vaga
                </button>
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="w-100 d-flex flex-column justify-content-center text-white"
            style={{
              backgroundImage: `url("images/senac1.png")`,
              backgroundPosition: `center center`,
              backgroundSize: `cover`,
              baclgroundRepeat: `no-repeat`,
              height: `65vh`
            }}>
          </div>
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider