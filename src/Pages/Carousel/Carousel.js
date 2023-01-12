import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../style.css";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper";

import { FaHandPointRight } from 'react-icons/fa';


const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper"
            >
                <SwiperSlide data-hash="slide1">
                    <img src="https://i.ibb.co/mySfdFy/clinic-1.jpg" alt="" />
                    <div className="text-content">
                        <h2 className="title">Your Smile Starts Here!</h2>
                        <article>
                            <p>Your smile matters! Dental clinic is a comprehensive Dental setup that provides all areas of dentistry under one roof! We have a chosen panel of experts who excel in their field of work and are rich with years of clinical experience.</p>
                        </article>
                        <button class="btn btn2">Booking Appointment Now<FaHandPointRight /></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <img src="https://i.ibb.co/RjJb6dj/clinic-2.jpg" alt="" />
                    <div className="text-content">
                        <h2 className="title">No Teeth, No Good!</h2>
                        <article>
                            <p>It’s well worth spending a few moments discovering the many benefits of our unique dental care model. Conveniently located in a world-class facility, we offer a ‘one-stop-shop’ with most dental specialties in the one place. Our services range from general dentistry to complex oral diseases with easy access to state of the art equipment.</p>
                        </article>
                        <button class="btn btn2">Booking Appointment Now<FaHandPointRight /></button>
                    </div>

                </SwiperSlide>
                <SwiperSlide data-hash="slide3">
                    <img src="https://i.ibb.co/gyL3LSX/clinic-3.jpg" alt="" />
                    <div className="text-content">
                        <h2 className="title">Smile with Confidence!</h2>
                        <article>
                            <p>The crew here at Dental Clinic has the knowledge, experience and technology to deliver the smile you’ve always wanted. If you are looking for an experienced dentist in New York contact our office today.
                            </p>
                        </article>
                        <button class="btn btn2">Booking Appointment Now<FaHandPointRight /></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide4">
                    <img src="https://i.ibb.co/kgjHM46/clinic-4.jpg" alt="" />
                    <div className="text-content">
                        <h2 className="title">Complete Care for Your Smile</h2>
                        <article>
                            <p>We believe that preventive dentistry is the ultimate key to the finest dental health. We also know that quality restorative dentistry is an important part of comprehensive dental services. Our office offers both types of services for your convenience.</p>
                        </article>
                        <button class="btn btn2">Booking Appointment Now<FaHandPointRight /></button>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Carousel;