import React from 'react'
import { Link
  
  } from "react-router-dom";
export const Home = () => {
    return (
        <>

            <section className="home" id="home">
                <img src="https://images.squarespace-cdn.com/content/v1/58361d02ff7c50058bae611c/1566231709153-1HT5WXAF5TTQ7OB1N4T1/online-marketing-hIgeoQjS_iE-unsplash.jpg" alt="" className="home__img" />
                <div className="home__container container grid">
                    <div className="home__data">
                        <h1 className="home__data-title" style={{color: 'white'}}>Welcome <br/> to  <b className="home__data-title1"> Horizon <br /> Hospital</b></h1>
                        <Link to="/login" className="button">Sign In</Link>
                    </div>
                    <div className="home__info">
                        <div>
                            <span className="home__info-title">Why Choose Horizon Hospital?</span>
                            <p>At Horizon Hospital a team of specialists will listen to your needs and evaluate your condition from every angle to make the very best plan for you. every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
