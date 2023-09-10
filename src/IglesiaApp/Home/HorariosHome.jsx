import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';


export const HorariosHome = () => {
  return (
    <>
        <div className="contianer colorHorarios ">
          <div className="row marginHorarios">
            <Fade top>
              <h3 className="mb-1 ">Cultos Sede Central Zenteno</h3>
            </Fade>
            <Fade top>
            <p className="CultosSemanales">¡Únete a nosotros en cualquiera de nuestros cultos de la semana!</p>
            </Fade>
            <div className="">
              <div className="container">
                <div className="row ">
                  <div class="col-md-6 "><p className="dias"> <LightSpeed left cascade> DOMINGO </LightSpeed> </p></div>
                  <div class="col-md-6  align-self-center">
                    <label className="cultos"> <LightSpeed right cascade> CULTO DE ADORACION </LightSpeed> </label>
                    <p> <LightSpeed right cascade> 11:00 Horas </LightSpeed></p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row ">
                  <div class="col-md-6"><p className="dias"> <LightSpeed left cascade> JUEVES </LightSpeed> </p></div>
                  <div class="col-md-6 align-self-center">
                    <label className="cultos"> <LightSpeed right cascade> CULTO DE ADORACION </LightSpeed> </label>
                    <p> <LightSpeed right cascade> 20:00 horas </LightSpeed></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}
