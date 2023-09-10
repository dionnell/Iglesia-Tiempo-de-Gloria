import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


export const ParallaxHome = () => {
  return (
    <>
      <div>
        <MouseParallaxContainer >
          <MouseParallaxChild 
            factorX={0.03} 
            factorY={0.05}
            className="contenedorParallax"
          >
              <img className="imgParallaxHome" src="jesus.jpg" alt="" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>  
    </>
  )
}
