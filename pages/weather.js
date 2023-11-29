import React from 'react';

export default function Weather(props) {
    const { weatherData } = props;
    return (
        <div>{JSON.stringify(weatherData)}</div>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-94&appid=eaa5a74fb21d83e966c8fdd55d4732f9');
    const data = await res.json();
    return {
        props: {
            weatherData: data
        }
    } 
}