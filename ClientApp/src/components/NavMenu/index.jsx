import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';


const NavMenu = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row>
          <Col>
            <img src="images/logo-home.svg" alt="Logo Empregabilidade" />
          </Col>
          <Col className="d-flex justify-content-end gap-3">
            <button type="button" className={`d-flex justify-content-center align-items-center gap-2 btn btn-primary ${styles.btnNav}`}>
              <img src="images/iconUser.png" width={14} height={14} alt="user circle" />
              Candidato
            </button>
            <button type="button" className={`d-flex justify-content-center align-items-center gap-2 btn btn-primary ${styles.btnNav}`}>
              <img src="images/bagWork.png" alt="bag work" />
              Empregador
            </button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NavMenu