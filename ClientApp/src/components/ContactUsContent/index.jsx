import { Link } from 'react-router-dom';
import {
  MdKeyboardArrowRight,
  MdWhatsapp,
  MdOutlineWatchLater,
  MdOutlineLocationOn
 } from 'react-icons/md'
 import styles from './styles.module.css'

const ContactUsContent = () => {
  return (
    <>
      <div className="container py-4 text-capitalize">
          <Link to="/" className="text-secondary ">Início</Link>
          <MdKeyboardArrowRight className="text-secondary" />
          fale conosco
      </div>
      <div className="d-flex flex-column align-items-center mt-5">
        <div className={`text-capitalize ${styles.Title}`}>
          fale conosco
        </div>
        <span className="mt-4">Você poderá entrar em contato com o Senac</span>
        <span>Empregabilidade através de diferentes canais:</span>
        <span className="mt-4 fw-semibold">(84) 4005-1008</span>
        <span className="fw-semibold">(84) 99953-4224<MdWhatsapp className="mb-3 ms-2" size={23} /></span>
        <Link className='fw-semibold'>empregabilidade@rn.senac.br</Link>
        <div className="mt-5 rounded" style={{width: '520px', height: '470px', backgroundColor: '#FAFAFA'}}>
          <div className="container d-flex flex-column py-5 px-5">
            <label htmlFor="" className="required form-label mt-2">Nome<input type="text" className="required form-control mt-2" /></label>
            <label htmlFor="" className="form-label mt-2">E-mail<input type="text" className="required form-control mt-2" placeholder="nome@exemplo.com"/></label>
            <label for="" className="form-label mt-2">Mensagem
            <textarea className="form-control mt-2" data-kt-autosize="true" placeholder="Digite sua mensagem aqui..."></textarea></label>
            <div className="d-flex justify-content-center mt-5">
              <button className={`rounded text-white border-0 ${styles.SendBtn}`}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-4 my-5">
        <MdOutlineWatchLater size={45} style={{color: '#F39200'}} />
        <div className="" style={{width: '150px'}}>
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
    </>
  )
}

export default ContactUsContent