import React, { useEffect, useState } from 'react'
import JsonData from "../../data/data.json";
import AboutComp from '../../pageComponents/ShopLandingPageComp/AboutComp/AboutComp'
import ServicesComp from '../../pageComponents/ShopLandingPageComp/ServicesComp/ServicesComp'
import GalleryComp from '../../pageComponents/ShopLandingPageComp/GalleryComp/GalleryComp'
import TestimonialsComp from '../../pageComponents/ShopLandingPageComp/TestimonialsComp/TestimonialsComp'
import TeamComp from '../../pageComponents/ShopLandingPageComp/TeamComp/TeamComp'
import ContactComp from '../../pageComponents/ShopLandingPageComp/ContactComp/ContactComp'
import './ShopLandingPage.css'
import PriceComp from '../../pageComponents/ShopLandingPageComp/PriceComp/PriceComp';

const GymLandingPage = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    console.log(landingPageData)
    return (
        <div>
            <div className="container">
                <div className="left-div">
                    <h1>Main Contenta</h1>
                    <p>This is the main content area.</p>
                </div>
                <div className="right-div">
                    <h2>Menu</h2>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            </div>
            <AboutComp />
            <ServicesComp />
            <PriceComp/>
            <GalleryComp />
            <TestimonialsComp />
            <TeamComp />
            <ContactComp />
          


        </div>
    )
}

export default GymLandingPage
