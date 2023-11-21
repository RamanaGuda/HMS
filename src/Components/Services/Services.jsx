import React from 'react'
import service1 from '../../assets/service-icon-1.png'
import service2 from '../../assets/service-icon-2.png'
import service3 from '../../assets/service-icon-3.png'
import service4 from '../../assets/service-icon-4.png'
import service5 from '../../assets/service-icon-5.png'
import service6 from '../../assets/service-icon-6.png'

export const Services = () => {
  return (
    <>
    <section className = "sc-services" id='services'>
  <div className = "services-shape">
    {/* image missing  */}
      <img src = "assets/images/curve-shape-1.png" alt = ""/> 
  </div>
  <div className="container">
      <div className = "services-content">
          <div className="title-box text-center">
              <div className = "content-wrapper">
                  <b><h3 className = "title-box-name" style = {{fontSize:'50px'}}>Our services</h3></b>
                  <div className = "title-separator mx-auto"></div>
                  <p className = "text title-box-text">We provide you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
              </div>
          </div>

          <div className = "services-list">
              <div className = "services-item">
                  <div className = "item-icon">
                      <img src = {service1} alt = "service icon"/>
                  </div>
                  <h5 className = "item-title fw-7">Search doctor</h5>
                  <p className = "text">Choose your doctor form thousands of specialist, general and trusted hospitals.</p>
              </div>

              <div className = "services-item">
                  <div className = "item-icon">
                      <img src = {service2} alt = "service icon"/>
                  </div>
                  <h5 className = "item-title fw-7">Online pharmacy</h5>
                  <p className = "text">Buy your medicines with our mobile application with a simple delivery system</p>
              </div>

              <div className = "services-item">
                  <div className = "item-icon">
                      <img src = {service3} alt = "service icon"/>
                  </div>
                  <h5 className = "item-title fw-7">Consultation</h5>
                  <p className = "text">Free consultation with our trusted doctors and get the best recommendations.</p>
              </div>

              <div className = "services-item">
                  <div className = "item-icon">
                      <img src = {service4} alt = "service icon"/>
                  </div>
                  <h5 className = "item-title fw-7">Details info</h5>
                  <p className = "text">Free consultation with our trusted doctors and get the best recommendations.</p>
              </div>

              <div className = "services-item">
                  <div className = "item-icon">
                      <img src = {service5} alt = "service icon"/>
                  </div>
                  <h5 className = "item-title fw-7">Emergency care</h5>
                  <p className = "text">You can get 24/7 urgent care for yourself or your children and your lovely family.</p>
              </div>

              <div className = "services-item">
                  <div className = "item-icon">
                      <img src = {service6} alt = "service icon"/>
                  </div>
                  <h5 className = "item-title fw-7">Tracking</h5>
                  <p className = "text">Track and save your mental history and health data</p>
              </div>
          </div>

      </div>
  </div>
</section>

    </>
  )
}
