import React from 'react'
import doc1 from '../../assets/doc1.jpeg'
import poojitha from '../../assets/poojitha.jpeg'
import tulasi from '../../assets/tulasi.jpeg'
import freddy from '../../assets/freddy.jpeg'
import lara from '../../assets/lara.jpeg'
import hansson from '../../assets/hansson.jpeg'
export const Doctors = () => {
  return (
    <>
    <section className="doctors section" id="doctors">
    <h2 className="section__title">Our Doctors</h2>
     <div className="experience__container container grid">
     <div className="experience__content grid">
     <div className="experience__data">
       <img src={doc1}/>
      <h2 className="experience__number">Dr.Narayana</h2>
      <b><span className="experience__description">Surgery</span></b>
     </div>
     <div className="experience__data">
       <img src={poojitha}/>
       <h2 className="experience__number">Dr.Poojitha</h2>
       <b><span className="experience__description">Cardiology</span></b>
     </div>
     <div className="experience__data">
       <img src={tulasi}/>
       <h2 className="experience__number">Dr.Tulasi</h2>
       <b><span className="experience__description">Neurosurger</span></b>
     </div>
     
     
     <div className="experience__data">
       <img src={freddy}/>
       <h2 className="experience__number">Dr.Freddy Joe</h2>
       <b><span className="experience__description">Surgery</span></b>
     </div>
     <div className="experience__data">
       <img src={lara}/>
       <h2 className="experience__number">Dr.Lara Sandy</h2>
       <b><span className="experience__description">Surgery</span></b>
     </div>
     <div className="experience__data">
       <img src={hansson}/>
       <h2 className="experience__number">Dr.Hansson</h2>
       <b><span className="experience__description">Urology</span></b>
     </div>
    </div>
    </div>
</section>
    </>
  )
}
