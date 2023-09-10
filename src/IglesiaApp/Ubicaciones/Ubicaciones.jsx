import { LayoutUbicaciones } from "./layout"
import { InfiniteCarrouselAutoplay } from "./components"
import Flip from 'react-reveal/Flip';

export const Ubicaciones = () => {

    
  return (
    <div className="background-Ubicaciones" >
      <h3 className="mb-3 fw-semibold pt-4 ">
        <Flip left cascade>
          Ubicaciones
        </Flip>  
      </h3>
      
      <div class="p-3 pt-3 " >

        <div class="accordion accordion-flush mb-5 " id="accordionFlushExample">

          <div class="accordion-item border border-1 border-primary-subtle mb-2 rounded-top">
            <h2 class="accordion-header ">
              <button class="accordion-button collapsed btn-grad fw-semibold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Region Metropolitana
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse Background-Acordeon" data-bs-parent="#accordionFlushExample">
              <LayoutUbicaciones 
                title="Iglesia Zenteno"
                foto="user" 
                pastores="Obispo Alfredo Riquelme R." 
                horario1="Jueves: 20:00 horas" 
                horario2="Domingo: 11:00 horas" 
                direcion="Zenteno #1419"
                urlDireccion="https://maps.google.com/maps?width=100%25&amp;height=600px&amp;hl=en&amp;q=zenteno%201419,%20Santiago,%20Chile+(iglesia%20Zenteno)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  
              />

              <LayoutUbicaciones 
                title="Iglesia Cerrillos"
                foto="user" 
                pastores="David Riquelme y Edleomay Bolivar" 
                horario1="Miercoles: 19:00 horas" 
                horario2="Domingo: 18:00 horas" 
                direcion="Caletera Americo Vespucio #1619"
                urlDireccion="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Caletera%20Americo%20Vespucio%201619,%20Santiago,%20Chile+(Iglesia%20Cerrillos)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  
              />

              <LayoutUbicaciones 
                title="Iglesia Maipu"
                foto="user" 
                pastores="David Riquelme y Edleomay Bolivar" 
                horario1="Martes: 19:00 horas" 
                direcion="Republica #2021"
                urlDireccion="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.3021820990919!2d-70.76780734283656!3d-33.50905450451995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd2adc32185b%3A0x2007e9c150a58795!2sRepublica%202021%2C%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1690846171287!5m2!1ses-419!2scl"  
              />

            </div>
          </div>

          <div class="accordion-item border border-1 border-primary-subtle mb-2 rounded-top">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed  btn-grad fw-semibold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Region de Antofagasta
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse Background-Acordeon" data-bs-parent="#accordionFlushExample">
                
              <LayoutUbicaciones 
                title="Iglesia Antofagasta"
                foto="user" 
                pastores="Juan Leiva y Rosa Sepulveda" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Pisagua #897"
                urlDireccion="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pisagua%20897,%20Antofagasta,%20Chile+(Iglesia%20Antofagasta)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  
              />

              <LayoutUbicaciones 
                title="Iglesia Mejillones"
                foto="user" 
                pastores="Luis Cortes y Daniela Gonzalez" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Pje Merino #165"
                urlDireccion="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pje%20Merino%20165%20,Mejillones,%20Antofagasta,%20Chile+(Iglesia%20Mejillones)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  
              />

            </div>
          </div>

          <div class="accordion-item border border-1 border-primary-subtle mb-2 rounded-top">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed  btn-grad fw-semibold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Region Del Maule
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse Background-Acordeon" data-bs-parent="#accordionFlushExample">

              <LayoutUbicaciones 
                title="Iglesia Talca"
                foto="user" 
                pastores="Luis Moreno y Graciela Espinosa" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="15 ½ Sur #3060"
                urlDireccion="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=15%20%C2%BD%20Sur%203060,%20Talca,%20Chile+(Iglesia%20Talca)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  
              />

              <LayoutUbicaciones 
                title="Iglesia San Clemente"
                foto="user" 
                pastores="Ramon Riquelme y Rosa" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Tres Puentes #37, Villa Dimension"
                urlDireccion="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=av%20huamachuco%201300,san%20Clemente,%20Chile+(Iglesia%20Talca)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  
              />

            </div>
          </div>

          <div class="accordion-item border border-1 border-primary-subtle mb-2 rounded-top">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed  btn-grad fw-semibold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Region De Los Lagos
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse Background-Acordeon" data-bs-parent="#accordionFlushExample">

              <LayoutUbicaciones 
                title="Iglesia Llanquihue"
                foto="user" 
                pastores="Moises Reyes y  Geraldine Cortes" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="ERARDO WERNER #850, Sede las Americas"
                urlDireccion="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ERARDO%20WERNER%20850,%20Llanquihue,%20Chile+(Iglesia%20Llanquihue)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  
              />

              <LayoutUbicaciones 
                title="Iglesia Osorno"
                foto="user" 
                pastores="Mauricio Cifuentes y Stephanie Alarcon" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Panama #1789"
                urlDireccion=""  
              />

            </div>
          </div>

          <div class="accordion-item border border-1 border-primary-subtle mb-2 rounded-top">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed  btn-grad fw-semibold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Region De Coquimbo
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse Background-Acordeon" data-bs-parent="#accordionFlushExample">

              <LayoutUbicaciones 
                title="Iglesia Combarbala"
                foto="user" 
                pastores="Omar Valenzuela" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Av. Carlos Dittborn 1"
                urlDireccion="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Dittborn%201,%20Combarbala,%20Chile+(Iglesia%20Combarbala)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  
              />

              <LayoutUbicaciones 
                title="Iglesia La Serena"
                foto="user" 
                pastores="Miguel Contreras y Maritza Araya" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Arturo Perez Canto 4571"
                urlDireccion="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Arturo%20P%C3%A9rez%20Canto%204571,%20La%20Serena,%20Chile+(Iglesia%20La%20Serena)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  
              />

            </div>
          </div>

          <div class="accordion-item border border-1 border-primary-subtle mb-2 rounded-top">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed  btn-grad fw-semibold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Region De Atacama
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse Background-Acordeon" data-bs-parent="#accordionFlushExample">

              <LayoutUbicaciones 
                title="Iglesia Caldera"
                foto="user" 
                pastores="Gabriel Santibanez y Patricia Velasquez" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Atacama 913"
                urlDireccion=""  
              />

            </div>
          </div>

          <div class="accordion-item border border-1 border-primary-subtle mb-2 rounded-top">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed  btn-grad fw-semibold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Region De Tarapaca
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse Background-Acordeon" data-bs-parent="#accordionFlushExample">

              <LayoutUbicaciones 
                title="Iglesia Alto Hospicio"
                foto="user" 
                pastores="Victor Pedamonte y Marcia Pinones" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Las Avellanas C/ Pasaje Dos S/N"
                urlDireccion=""  
              />

            </div>
          </div>
          
          <div class="accordion-item border border-1 border-primary-subtle mb-2 rounded-top">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed  btn-grad fw-semibold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Region De Arica
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse Background-Acordeon" data-bs-parent="#accordionFlushExample">

              <LayoutUbicaciones 
                title="Iglesia Arica"
                foto="user" 
                pastores="Victor Orrego y Soledad Lara" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Poblacion 11 De Septiembre"
                urlDireccion=""  
              />

            </div>
          </div>
          
          <div class="accordion-item border border-1 border-primary-subtle mb-2 rounded-top">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed  btn-grad fw-semibold rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Region De Tacna
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse Background-Acordeon" data-bs-parent="#accordionFlushExample">

              <LayoutUbicaciones 
                title="Iglesia Tacna"
                foto="user" 
                pastores="Hugo Barraza y Rosa Carrasco" 
                horario1="Domingo: 11:00 horas" 
                horario2="Jueves: 20:00 horas" 
                direcion="Poblacion 11 De Septiembre"
                urlDireccion=""  
              />

            </div>
          </div>
          
        </div>
      </div>

      <InfiniteCarrouselAutoplay />

    </div>
  )
}

