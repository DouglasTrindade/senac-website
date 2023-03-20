import { Link } from 'react-router-dom';
import { 
  FaWhatsappSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <>
      <div className={`p-4 ${styles.main}`}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 col-xl-4 mt-4">
              <div className="d-flex align-items-end gap-5 justify-content-center justify-content-md-start">
                <div>
                  <img className="" src="images/logo-footer-sesc.png" alt="Logo Fecomércio Sesc" />
                </div>
                <div>
                  <img className="" src="images/logo-footer-senac.png" alt="Logo Empregabilidade Senac" />
                </div>
              </div>
              <div className="mt-5 text-center text-md-start">
                <p>
                  Serviço Nacional de Aprendizagem Comercial Departamento Regional do Rio Grande do Norte 2022 
                </p>
                <div>&copy; Todos os direitos reservados</div>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 mt-5 ms-auto" style={{width: '240px'}}>
              <ul className={`list-unstyled text-center text-md-start  ${styles.colorTextMenu}`}>
                <Link to="/" className={`${styles.colorTextMenu}`}>
                  <li>Área do candidato</li>
                </Link>
                <Link to="/" className={`${styles.colorTextMenu}`}>
                  <li>Área do empregador</li>
                </Link>
                <Link to="/" className={`${styles.colorTextMenu}`}>
                  <li>Quem somos</li>
                </Link>
                <Link to="/" className={`${styles.colorTextMenu}`}>
                  <li>Orientação Profissional</li>
                </Link>
                <Link to="/" className={`${styles.colorTextMenu}`}>
                  <li>Vagas</li>
                </Link>
              </ul>
            </div>
            <div className="col-md-4 col-xl-4 mt-5">
              <ul className="list-unstyled text-center text-md-start ms-4">
                <Link to="/" className={`${styles.colorTextMenu}`}>
                  <li className="text-capitalize">fale conosco</li>
                </Link>
                <Link to="/">
                <li className={`${styles.colorTextContact}`}>4005-1008</li>
                </Link>
                <Link to="tel:+5585999534224">
                  <li className={`${styles.colorTextContact}`}>(84) 99953-4224</li>
                </Link>
                <a href="mailto:empregabilidade@rn.senac.br" >
                  <li className={`${styles.colorTextContact}`}>empregabilidade@rn.senac.br</li>
                </a>
              </ul>
              <div className={`d-flex gap-1 ms-4 justify-content-center justify-content-md-start`}>
                <Link to="/" className={` ${styles.bgIcons}`}>
                  <FaWhatsappSquare size={23} />
                </Link>
                <Link to="/" className={`${styles.bgIcons}`}>
                  <FaInstagramSquare size={23} />
                </Link>
                <Link to="/" className={`${styles.bgIcons}`}>
                  <FaFacebookSquare size={23} />
                </Link>
                <Link to="/" className={`${styles.bgIcons}`}>
                  <FaTwitterSquare size={23} />
                </Link>
                <Link to="/" className={`${styles.bgIcons}`}>
                  <FaLinkedin size={23} />
                </Link>
              </div>
              <div className="mt-2 text-center text-md-start ms-4">
                <Link style={{color: '#1D71B8'}} to="https://goo.gl/maps/Yf7WXBrFjfjtuSMG9">
                Avenida Marechal Floriano Peixoto, 295, Petrópolis, Natal/RN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer