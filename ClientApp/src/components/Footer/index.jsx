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
      <div className={`mt-5 ${styles.main}`}>
        <div className="container border">
          <div className='row mt-5 mb-5'>
            <div className='col-md-4 col-xl-4 border border-danger '>
              <div className="d-flex align-items-end gap-5">
                <div>
                  <img className="" src="images/logo-footer-sesc.png" alt="Logo Fecomércio Sesc" />
                </div>
                <div>
                  <img className="" src="images/logo-footer-senac.png" alt="Logo Empregabilidade Senac" />
                </div>
              </div>
              <div className="mt-5">
                <p>
                Serviço Nacional de Aprendizagem Comercial Departamento Regional do Rio Grande do Norte 2022 
                </p>
                <div>&copy; Todos os direitos reservados</div>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 border border-primary">
                <ul className={`list-unstyled ${styles.colorTextMenu}`}>
                  <Link to="/" className={`${styles.colorTextMenu}`}>
                    <li className='text-decoration-none'>Área do candidato</li>
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
            <div className="col-md-4 col-xl-4 border border-warning">
              <ul className="list-unstyled">
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
              <div className="d-flex gap-1">
                <Link to="/" style={{color: '#0064B8'}}>
                  <FaWhatsappSquare size={23} />
                </Link>
                <Link to="/" style={{color: '#0064B8'}}>
                  <FaInstagramSquare size={23} />
                </Link>
                <Link to="/" style={{color: '#0064B8'}}>
                  <FaFacebookSquare size={23} />
                </Link>
                <Link to="/" style={{color: '#0064B8'}}>
                  <FaTwitterSquare size={23} />
                </Link>
                <Link to="/" style={{color: '#0064B8'}}>
                  <FaLinkedin size={23} />
                </Link>
              </div>
              <div className='mt-2' >
                <Link style={{color: '#1D71B8'}} to="https://www.google.com.br/maps/place/Av.+Mal.+Floriano+Peixoto,+295+-+Tirol,+Natal+-+RN,+59020-500/@-5.7819365,-35.2031202,17z/data=!3m1!4b1!4m5!3m4!1s0x7b3006ef77f0a61:0xb9b4171885e8f9e3!8m2!3d-5.7819418!4d-35.2009315">
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