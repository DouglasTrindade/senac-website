import { Link } from "react-router-dom";

const EmployerCandidate = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between flex-sm-wrap flex-md-wrap justify-content-md-center flex-lg-nowrap flex-xl-nowrap mt-5 gap-5">
          <Link to="/">
            <img className="img-fluid" src="images/btn-candidato-login.png" alt="Botão Candidato Login"></img>
          </Link>
          <Link to="/">
            <img className="img-fluid" src="images/btn-empregador-login.png" alt="Botão Empregador Login"></img>
          </Link>
        </div>
      </div>
    </>
  ) 
}

export default EmployerCandidate