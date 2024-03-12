import React from 'react'
import pic1 from '../assets/1.png'
import pic2 from '../assets/2.png'
import pic3 from '../assets/3.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



function Card() {
    const cardData = [
        { image: pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...' },
        { image: pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...' },
        { image: pic3, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we give...' },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // breakpoint for desktop
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // breakpoint for tablet/mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="mt-5">
                <div className="row">
                    <Slider {...settings}>
                        {cardData.map((Card, index) => (
                            <div className="col-md-4" data-aos="fade-up">
                                <div className="card mb-3">
                                    <img src={Card.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">{Card.title}</h4>
                                        <p className="card-text">{Card.content}<a href="#" className='text-danger text-decoration-none'>Read more</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Card
