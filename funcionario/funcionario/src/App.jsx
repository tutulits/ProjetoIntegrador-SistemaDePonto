import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <div className="container  mt-5">
        <h1 style={{textAlign: 'center', padding: 5, color: 'rgb(210, 210, 223)'}}>Sistema De Ponto</h1>
        <div className="form p-4 shadow">
          <p className="centro mb-4">Cadastro Funcionario</p>
          <form>
            <div className="row mb-2">
              <div className="col-sm-6">
                <label className="form-label">Nome Completo
                  <input type="text" className="form-control input" required/>
                </label>
              </div>
              <div className="col-sm-6">
                <label className="form-label">Email 
                  <input type="email" className="form-control input" required />
                </label>
              </div>
              </div>

              <div className="row mb-2">
              <div className="col-sm-6">
                <label className="form-label">Senha 
                  <input type="text" className="form-control input" required/>
                </label>
              </div>
              <div className="col-sm-6">
                 <label className="form-label">Numero 
                  <input type="number" className="form-control input" required/>
                </label>
              </div>
              </div>

            <button type="submit" className="btn btn-outline-primary">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
