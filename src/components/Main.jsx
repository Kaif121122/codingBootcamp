import React, { useState } from 'react'
import firstImg from '../images/image-tanya.jpg'
import secondImg from '../images/image-john.jpg'

import nextIcon from '../images/icon-next.svg'
import prevIcon from '../images/icon-prev.svg'

const Main = () => {

    const [currentData, setCurrentData] = useState(0)

    const myObj = [
        {
            heading: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough.I’m now in the job of my dreams and soexcited about the future. ”",
            name: "Tanya Sinclair",
            profession: "UX Engineer",
            image: firstImg
        }, {
            heading: " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
            name: "John Tarkpor",
            profession: "Junior Front-end Developer",
            image: secondImg
        }

    ]


    const prevSlide = () => {
        if (currentData < 1) {
            setCurrentData(1)
        } else {
            setCurrentData(currentData - 1)
        }
    }

    const nextSlide = () => {
        if (currentData > 0) {
            setCurrentData(0)
        } else {
            setCurrentData(currentData + 1)
        }

    }


    return (<> {
        myObj.map((elem, index) =>
            index === currentData &&

            <main key={index} className="main-container">
                <div className="left-section">
                    <h1>
                        {elem.heading} </h1>
                    <p>
                        {elem.name}  <span>{elem.profession}  </span></p>
                </div>

                <div className="right-section">
                    <figure>
                        <img src={elem.image} alt="" className="hero-img" />
                        <div className="slider">
                            <img onClick={() => prevSlide()} src={prevIcon} alt="" className="prev-icon" />
                            <img onClick={() => nextSlide()} src={nextIcon} alt="" className="next-icon" />
                        </div>
                    </figure>
                </div>
            </main>
        )
    }
    </>

    )
}

export default Main