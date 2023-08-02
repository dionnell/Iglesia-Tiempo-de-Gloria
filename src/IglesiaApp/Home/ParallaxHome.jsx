import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


export const ParallaxHome = () => {
  return (
    <>
        <MouseParallaxContainer>
          <MouseParallaxChild factorX={0.03} factorY={0.05} >
              <img className="imgParallaxHome" src="jesus.jpg" alt="" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
    </>
  )
}
