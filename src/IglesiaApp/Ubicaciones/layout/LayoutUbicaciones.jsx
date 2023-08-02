
export const LayoutUbicaciones = ({title='',foto='' ,pastores='', horario1='', horario2='', direcion='', urlDireccion='' }) => {
  return (
    <div class="accordion-body ">
        <div class="container text-center pt-3 pb-3 glassmorphism ">
            <h4>{title}</h4>
            <div class="row ">
                <div class="col-sm-6 ">
                    <div class="container ">
                        <div class="row">
                            <div class="col-4 DisFlexCenter mt-2"><h5> Pastores: </h5></div>
                            <div class="col-8 text-start mt-3">
                                <img className="Img-User ml-3" src={`/${foto}.png`} alt="" />
                                <p>{pastores}</p>
                            </div>
                        </div>
                    </div>
                    <div class="container ">
                        <div class="row">
                            <div class="col-4 DisFlexCenter mt-4"><h5> Horario </h5></div>
                            <div class="col-8 text-start mt-5">
                                <p>{horario1}</p>
                                <p>{horario2}</p>
                            </div>
                        </div>
                    </div>
                    <div class="container ">
                        <div class="row">
                            <div class="col-4 DisFlexCenter mt-3"><h5> Direccion </h5></div>
                            <div class="col-8 text-start mt-4">
                                <p>{direcion}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <iframe className="iframeUbicaciones mt-5" src={urlDireccion}>
                    </iframe>
                </div>
            </div>
        </div>
    </div>
  )
}
