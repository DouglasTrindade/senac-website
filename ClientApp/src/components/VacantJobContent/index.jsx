import { MdSearch, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';

const VacantJob = () => {
  return (
    <>
      <div>
      <div className="container py-4">
          <Link to="/" className="text-secondary">Início</Link>
          <MdKeyboardArrowRight className="text-secondary" />
          Vagas
      </div>
        <div className={`text-center py-5 ${styles.TitleVagas}`}>
          Vagas
        </div>
        <div className="d-flex justify-content-center gap-3 p-4 flex-wrap">
          <span className={`btn btn-outline rounded-pill ${styles.BtnTemp}`}>Temporária</span>
          <span className={`btn btn-outline rounded-pill ${styles.BtnEfet}`}>Efetiva</span>
          <span className={`btn btn-outline rounded-pill ${styles.BtnPCD}`}>PCD</span>
          <span className={`btn btn-outline rounded-pill ${styles.BtnNac}`}>Nacional</span>
          <span className={`btn btn-outline rounded-pill ${styles.BtnInter}`}>Internacional</span>
        </div>
        <div className="container me-5">
          <div className="row align-items-end">
            <div className="col-md-3 col-lg-3">
              <Form.Label htmlFor="inputOffice" className={`${styles.TextColor}`}>Cargo</Form.Label>
              <Form.Control type="text" placeholder="Exemplo: Cozinheiro" style={{backgroundColor: '#FAFAFA'}} />
            </div>
            <div className="col-md-3 col-lg-3">
              <Form.Label htmlFor="inputCity" className={`${styles.TextColor}`}>Cidade</Form.Label>
              <Form.Control type="text" placeholder="Exemplo: Natal" style={{backgroundColor: '#FAFAFA'}} />
            </div>
            <div className="col-md-3 col-lg-3">
              <Form.Label htmlFor="inputSchooling" className={`${styles.TextColor}`}>Escolaridade</Form.Label>
              <Form.Select style={{backgroundColor: '#FAFAFA'}}>
                <option>Selecionar</option>
              </Form.Select>
            </div>
            <div className="col-md-auto mt-2">
              <button className={`d-flex align-items-center justify-content-center gap-2 text-uppercase text-white border border-none rounded ${styles.BtnVacJob}`}>
                <MdSearch size={23} />
                buscar vagas
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <div className=" ">
              12 resultados encontrados
            </div>
            <span className="btn btn-outline-dark rounded-pill">
              A-Z
            </span>
            <span className="btn btn-outline-dark rounded-pill">
              Mais recentes
            </span>
          </div>
        </div>
        <div className="container d-flex flex-column gap-3 py-5">
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <div className="fw-semibold">Assistente Administrativo</div>
            <Accordion.Header>
              <div className={`d-flex gap-5 fw-semibold ${styles.Scholarity}`}>
                <div>Efetiva</div>
                <div>Natal/RN</div>
                <div>Ensino Médio completo</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-column">
                <div className="w-50 mb-2">Possuir curso e experiência na área de sushiman, ser organizado e ter boas práticas.</div>
                <div>Quantidade de vagas: 1</div>
                <div className="d-flex justify-content-between align-items-center">Horário: 18h às 23h
                  <button className={`text-uppercase rounded text-white border border-none ${styles.BtnApply}`}>quero me candidadatar</button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr />
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <div className="fw-semibold">Fotógrafo</div>
            <Accordion.Header>
              <div className={`d-flex gap-5 fw-semibold ${styles.Scholarity}`}>
                <div>Efetiva</div>
                <div>Natal/RN</div>
                <div>Ensino Médio completo</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-column">
                <div className="w-50 mb-2">Possuir curso e experiência na área de sushiman, ser organizado e ter boas práticas.</div>
                <div>Quantidade de vagas: 1</div>
                <div className="d-flex justify-content-between align-items-center">Horário: 18h às 23h
                  <button className={`text-uppercase rounded text-white border border-none ${styles.BtnApply}`}>quero me candidadatar</button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr />
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <div className="fw-semibold">Sushiman</div>
            <Accordion.Header>
              <div className={`d-flex gap-5 fw-semibold ${styles.Scholarity}`}>
                <div>Efetiva</div>
                <div>Natal/RN</div>
                <div>Ensino Médio completo</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-column">
                <div className="w-50 mb-2">Possuir curso e experiência na área de sushiman, ser organizado e ter boas práticas.</div>
                <div>Quantidade de vagas: 1</div>
                <div className="d-flex justify-content-between align-items-center">Horário: 18h às 23h
                  <button className={`text-uppercase rounded text-white border border-none ${styles.BtnApply}`}>quero me candidadatar</button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr />
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <div className="fw-semibold">Assistente Jurídico</div>
            <Accordion.Header>
              <div className={`d-flex gap-5 fw-semibold ${styles.Scholarity}`}>
                <div>Efetiva</div>
                <div>Natal/RN</div>
                <div>Ensino Médio completo</div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-column">
                <div className="w-50 mb-2">Possuir curso e experiência na área de sushiman, ser organizado e ter boas práticas.</div>
                <div>Quantidade de vagas: 1</div>
                <div className="d-flex justify-content-between align-items-center">Horário: 18h às 23h
                  <button className={`text-uppercase rounded text-white border border-none ${styles.BtnApply}`}>quero me candidadatar</button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion>
          <hr />
        </div>
      </div>
    </>
  )
}

export default VacantJob