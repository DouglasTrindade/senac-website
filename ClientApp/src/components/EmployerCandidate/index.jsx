import { Link } from "react-router-dom";

const EmployerCandidate = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mt-5">
          <Link to="/">
            <img src="images/btn-candidato-login.png" alt="Botão Candidato Login"></img>
          </Link>
          <Link to="/">
            <img src="images/btn-empregador-login.png" alt="Botão Empregador Login"></img>
          </Link>
        </div>
      </div>
    </>
  ) 
}

export default EmployerCandidate