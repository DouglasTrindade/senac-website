import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <>
      <div className={`mt-5 ${styles.main}`}>
        <div className="container">
          <div className="d-flex align-items-end gap-5">
            <div>
              <img className="" src="images/logo-footer-sesc.png" alt="Logo Fecomércio Sesc" />
            </div>
            <div>
              <img className="" src="images/logo-footer-senac.png" alt="Logo Empregabilidade Senac" />
            </div>
          </div>
          <div className='w-25 mt-5'>
            <p>
            Serviço Nacional de Aprendizagem Comercial Departamento Regional do Rio Grande do Norte 2022 
            </p>
            <div>&copy; Todos os direitos reservados</div>
          </div>
          <div className="">
            <ul>
              <Link to="/">
                <li className="">Área do candidato</li>
              </Link>
              <Link to="/">
                <li className="">Área do empregador</li>
              </Link>
              <Link to="/">
                <li className="">Quem somos</li>
              </Link>
              <Link to="/">
                <li className="">Orientação Profissional</li>
              </Link>
              <Link to="/">
                <li className="">Vagas</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer