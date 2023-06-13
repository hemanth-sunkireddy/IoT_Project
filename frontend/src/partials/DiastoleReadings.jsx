import React, { useState, useRef, useEffect } from "react";

import { Link, useLocation } from 'react-router-dom';


function DiastoleReadings() {
    const basePath = import.meta.env.BASE_URL;
    const iframeStyle = {
        width: '500px',
        height: '300px',
        border: '1px solid #cccccc',
        fontSize: "24px",
        color: "%23ff0000",
        bgcolor: "%23ffffff"
    };


    return (

        <div className="flex flex-col items-center text-center p-2 md:py-5 bg-green-400" id="companies_list">

            <div className="md:text-3xl text-2xl font-bold pb-10 pt-5">
                Diastole Readings
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-5">

                <iframe style={iframeStyle} src="https://thingspeak.com/channels/2165919/charts/4?dynamic=true&results=60&type=line&update=15"></iframe>

            </div>

        </div>
    );
}

export default DiastoleReadings;