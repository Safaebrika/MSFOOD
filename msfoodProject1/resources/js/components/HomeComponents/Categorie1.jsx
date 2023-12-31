import { Link } from "react-router-dom";
// import "./index.css"; // Import du fichier CSS personnalisé
// import './Home/index.css'
export default function Categorie1() {
  return (
    <>
      <div className="cat shadow bg-body-tertiary rounded">
        <h1 className="t">Burgers</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 tert ">
              <img
                src="imgs/burger2.jpg"
                alt="burger"
                className="categorie img-fluid"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 tert">
              <img
                src="imgs/SanAntonio.png"
                alt="burger"
                className="categorie img-fluid"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 tert">
              <img
                src="imgs/SlawBurger.png"
                alt="burger"
                className="categorie img-fluid"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 tert">
              <img
                src="imgs/ThetaBurger.png"
                alt="burger"
                className="categorie img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className="contentCategorieStyle d-flex">
            <p>Kubie Burger</p>
            <div id="prixStyle" className="d-flex">
              <div className="d-flex flex-row-reverse">60 MAD</div>
            </div>
          </div>
          <hr />

          <div className="contentCategorieStyle d-flex">
            <p>Fluff Screamer</p>
            <div id="prixStyle" className="d-flex">
              <div className="d-flex flex-row-reverse">70 MAD</div>
            </div>
          </div>
          <hr />
          <div className="contentCategorieStyle d-flex">
            <p>Poached Burger</p>
            <div id="prixStyle" className="d-flex">
              <div className="d-flex flex-row-reverse">50 MAD</div>
            </div>
          </div>
          <hr />
        </div>
        <Link to={"/cat"}>
          <button className="btn mx-2 my-1" id="my-btn2">
            ALL MENU
          </button>
        </Link>
      </div>
    </>
  );
}
