import { 
  FaArrowRight
} from 'react-icons/fa';
import {
  MdOutlineWatchLater,
  MdOutlineLocationOn,
  MdKeyboardArrowRight
 } from 'react-icons/md'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

const AboutUs = () => {
  return (
    <>
      <div className="container py-4">
          <Link to="/" className="text-secondary">Início</Link>
          <MdKeyboardArrowRight className="text-secondary" />
          Quem somos
      </div>
      <div style={{backgroundColor: '#1D71B8'}}>
        <div className="img-fluid">
          <img className={`${styles.Img}`} src="images/aboutus-image.png" alt="Thumbnail Quem Somos"></img>        
        </div>
        <div className="container py-5">
          <div className={`text-white ${styles.TitleAboutUs}`}>
            Quem somos
          </div>
          <p className="mt-4 text-white w-50">
            O Senac Empregabilidade é um serviço gratuito do Senac RN que tem como objetivo orientar e facilitar a 
            troca de informações entre as empresas e os ex-alunos da instituição. Por meio deste serviço, você poderá ser 
            selecionado por empresas que estão em busca de profissionais qualificados.
          </p>
          <div className={`text-white mt-5 ${styles.TitleHowWork}`}>
            Como funciona o Senac Empregabilidade
          </div>
          <div className="text-white mt-3">
            <FaArrowRight className="me-4" style={{color: '#F39200'}} />
              As empresas cadastradas anunciam suas vagas
          </div>
          <div className="text-white mt-2">
            <FaArrowRight className="me-4" style={{color: '#F39200'}} />
              Alunos aprovados do Senac cadastram-se no Senac Empregabilidade
          </div>
          <div className="text-white mt-2">
            <FaArrowRight className="me-4" style={{color: '#F39200'}} />
              Os currículos que estão de acordo com o perfil das vagas são enviados as empresas
          </div>
          <div className={`text-white mt-5 ${styles.TitleHowWork}`}>
            Quem pode se inscrever
          </div>
          <p className="text-white mt-2">Alunos aprovados, nos últimos seis anos, em algum curso do Senac.</p>
        </div>
      </div>
      <div style={{backgroundColor: '#FAFAFA'}}>
        <div className="container d-flex flex-column align-items-center py-5">
          <div className={`${styles.TitleSenacCourse}`}>
            Não possui curso do Senac?
          </div>
          <div className="w-50 text-center mt-4">
            O Senac oferece cursos nas mais diversas áreas de atuaçãoLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce finibus varius nisi quis mattis. Cras massa lacus, varius eu erat eget, volutpat congue leo.
            Nunc nec feugiat velit. Phasellus vitae magna ornare, efficitur turpis eget, pulvinar purus.
            Cras sagittis sagittis justo non bibendum. 
          </div>
          <div className="mt-3">
            <button className={`text-uppercase rounded border border-none text-white ${styles.BtnCourse}`}>saiba mais</button>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className={`text-center ${styles.ContactUs}`}>
          Fale conosco
        </div>
        <div className="d-flex justify-content-center gap-4 mt-4">
        <MdOutlineWatchLater size={45} style={{color: '#F39200'}} />
          <div className="" style={{width: '200px'}}>
            Funcionamento de 
            segunda a sexta
            das 8h às 17h
          </div>
          <MdOutlineLocationOn size={45} style={{color: '#F39200'}} />
          <div className="" style={{width: '350px'}}>
            Av. Marechal Floriano Peixoto, 295, 
            Petrópolis, Natal/RN
          </div>
        </div>
        <div className="fw-semibold text-center mt-4">
          Em caso de dúvidas, fale conosco pelo Whatsapp
        </div>
        <div className="text-center mt-4">
          <button className={`text-uppercase text-white border border-none rounded ${styles.BtnContact}`}>entrar em contato</button>
        </div>
      </div>
    </>
  )
}

export default AboutUs