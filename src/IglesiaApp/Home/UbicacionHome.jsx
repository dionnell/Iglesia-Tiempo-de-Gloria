import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';


export const UbicacionHome = () => {

  const navigate = useNavigate()

  const onUbicaciones = () => {

    navigate('/ubicaciones',{
        replace: true
    })
  }


  return (
    <>
        <div className="container">
          <div className="row">
            <Fade top>
              <h3 className="mb-3">Ubicacion</h3>
            </Fade>
              <div className="col-ms-6 alignUbicacion mt-3 mb-5">
                <label className="labelHome"> <LightSpeed left cascade> Iglesia Tiempo de Gloria </LightSpeed> </label><br />
                <label className="labelHome"> <LightSpeed left cascade> Santiago Centro  </LightSpeed> </label><br />
                <p className="pUbicacionHome"> <LightSpeed left cascade> Zenteno #1419 </LightSpeed></p>
                
                <button type="button" class="btn btn-outline-info mt-3 fw-semibold" onClick={ onUbicaciones }>Otras Ubicaciones</button>

              </div>
              <div className="col-ms-6 boxMap">
                <iframe className="iframeHome" src="https://maps.google.com/maps?width=100%25&amp;height=600px&amp;hl=en&amp;q=zenteno%201419,%20Santiago,%20Chile+(iglesia%20Zenteno)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
              </div>
          </div>
        </div>
    </>
  )
}
