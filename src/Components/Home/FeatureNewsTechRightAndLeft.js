import CardTechRight from './CardTechRight';
import CardTechleft from './CardTechleft';

function FeatureNewsTechRightAndLeft() {
  return (
    <div>
      <h3 className="home-h3 mt-3">
        SOFTWARE ENGINEERING
        <br /> FOR FUTURE
      </h3>
      <div className=" row d-flex justify-content-between  home-div-row ">
        <CardTechleft />

        <div className="about-right-div mb-5 ">
          <CardTechRight hour=" 3h age" />
          <CardTechRight hour=" 5h age" />
        </div>
      </div>
    </div>
  );
}

export default FeatureNewsTechRightAndLeft;
