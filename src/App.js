import './App.css';
import React, { useState } from 'react';
import PEChart from './components/PEChart.js';
import WeekChart from './components/52WeekChart.js';
import BidAskChart from './components/BidAskChart.js'
import PercentChart from './components/PercentChangeChart.js';
import { useForm } from "react-hook-form";

function App() {
    const [stockData, setStockData] = useState(null);
    const { register, handleSubmit } = useForm();
    const [isVisible, setIsVisible] = useState(false);

    const submit = async (formData) => {
        const { company } = formData;
        const url = `https://yahoo-finance127.p.rapidapi.com/key-statistics/${company}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b826344945msh42df2aaca0f0af7p174a20jsna8ff390fb6ef',
                'x-rapidapi-host': 'yahoo-finance127.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setStockData(result);
            setIsVisible(true);
            console.log(result); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App">
            <div id='form'>
                <h2>Stock Data Application</h2>
                <form id='stock-info' onSubmit={handleSubmit(submit)}>
                    <label htmlFor='company'>Enter a company stock symbol: </label>
                    <input id='company' {...register("company", { required: true })} type='text' placeholder='Enter company name' />
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div id='data' className={isVisible ? 'visible' : 'hidden'}>
                {stockData && (
                    <>

                    
                       <div id='header'>
                       <p id='data-header'><strong>{stockData.shortName} Stock Information</strong></p>
                       </div>

                        <div id='charts'>
                            {stockData.forwardPE && stockData.trailingPE && (
                            <div id='barchart1'>
                            <PEChart forwardPE={parseInt(stockData.forwardPE.fmt)} trailingPE={parseInt(stockData.trailingPE.fmt)}/>
                            </div>
                            )}

                            {stockData.fiftyTwoWeekHigh && stockData.fiftyTwoWeekLow && (
                            <div id='barchart2'>
                            <WeekChart high={parseInt(stockData.fiftyTwoWeekHigh.raw)} low={parseInt(stockData.fiftyTwoWeekLow.raw)}/>
                            </div>
                            )}  

                            {stockData.bid && stockData.ask && (
                            <div id='barchart3'>
                            <BidAskChart bid={parseInt(stockData.bid.raw)} ask={parseInt(stockData.ask.raw)}/>
                            </div>
                            )}  

                            {stockData.fiftyTwoWeekChangePercent && stockData.twoHundredDayAverageChangePercent && (
                            <div id='barchart4'>
                            <PercentChart fiftyTwoWeeks={parseInt(stockData.fiftyTwoWeekChangePercent.fmt)} twoHundredFiftyDays={parseInt(stockData.twoHundredDayAverageChangePercent.fmt)}/>
                            </div>
                            )}  
                        </div>

                        <br></br>


                        <div id='stock-data'>
                        {stockData.averageAnalystRating && (
                            <p id='analyst-rating'>Average Analyst Rating: {stockData.averageAnalystRating}, </p>
                        )}

                        {stockData.regularMarketPrice && (
                            <p>Current Stock Price: {stockData.regularMarketPrice.raw}, </p>
                        )}


                        {stockData.dividendYield && (
                            <p>Dividend Yield: {stockData.dividendYield.fmt}, </p>
                        )}

                         {stockData.regularMarketVolume && (
                            <p>Volume: {stockData.regularMarketVolume.fmt}, </p>
                        )}

                        
                        {stockData.marketCap && (
                            <p>Market Cap: {stockData.marketCap.fmt}, </p>
                        )}

                        {stockData.marketState && (
                            <p>Market Status: {stockData.marketState}</p>
                        )}
                        </div>

                    </>
                )}

                <br></br>

            </div>

        </div>
    );
}

export default App;