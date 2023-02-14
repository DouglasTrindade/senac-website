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
              <button type="button" className={styles.navBtn}>Candidato</button>
              <button type="button" className={styles.navBtn}>Empregador</button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NavMenu