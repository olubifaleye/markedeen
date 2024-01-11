'use client'

//imports
import { useEffect } from 'react';

const OnlinePresence = () => {

    useEffect(() =>{
        // Get the input fields and revenue field
        const productPriceInput = document.getElementById("product-price");
        const monthlyVisitorsInput = document.getElementById("monthly-visitors");
        const conversionRateInput = document.getElementById("conversion-rate");
        const revenueInput = document.getElementById("revenue");

        // Add blur event listeners to the input fields to format them when the user finishes editing
        productPriceInput.addEventListener("blur", formatProductPriceInput);
        monthlyVisitorsInput.addEventListener("blur", formatMonthlyVisitorsInput);
        conversionRateInput.addEventListener("blur", formatConversionRateInput);

        // Calculate and update the revenue field based on the inputs
        const updateRevenue = () => {
            // Get the values from the input fields
            const productPrice = parseFloat(productPriceInput.value.replace("£", "").replace(",", ""));
            const monthlyVisitors = parseFloat(monthlyVisitorsInput.value.replace(",", ""));
            const conversionRate = parseFloat(conversionRateInput.value.replace("%", ""));
            
            // Calculate the revenue
            let revenue = productPrice * monthlyVisitors * (conversionRate / 100);
            
            // Format the revenue and update the revenue field
            revenue = "£" + revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
            revenueInput.value = revenue;
        }

        // Call updateRevenue when any of the input fields change
        productPriceInput.addEventListener("input", updateRevenue);
        monthlyVisitorsInput.addEventListener("input", updateRevenue);
        conversionRateInput.addEventListener("input", updateRevenue);

        // Function to format the product price input
        function formatProductPriceInput() {
            const value = productPriceInput.value;
            
            if (value) {
                const formattedValue = "£" + parseFloat(value.replace(/[^0-9\.]/g, "")).toLocaleString("en-GB", {maximumFractionDigits:2, minimumFractionDigits:2});
                productPriceInput.value = formattedValue;
            }
        }

        // Function to format the monthly visitors input
        function formatMonthlyVisitorsInput() {
            const value = monthlyVisitorsInput.value;
            if (value) {
                const formattedValue = parseFloat(value.replace(/[^0-9]/g, "")).toLocaleString("en-GB");
                monthlyVisitorsInput.value = formattedValue;
            }
        }

        // Function to format the conversion rate input
        function formatConversionRateInput() {
            const value = conversionRateInput.value;
            if (value) {
                const formattedValue = parseFloat(value.replace(/[^0-9\.]/g, "")).toLocaleString("en-GB", {maximumFractionDigits:2, minimumFractionDigits:2}) + "%";
                conversionRateInput.value = formattedValue;
            }
        }
    })

  return (
    <section className="main section-4" id='OnlinePresence'>
        <div className='top_head_section'>
            <h1 className="head_text_span ml-24 text-left max-md:text-center max-md:ml-0">
                Why is my online presence important?
            </h1>
        </div>

        <div className="online_presence_container">
            <div className="left_container md:!pt-0">
                <div className="vertical_container">
                    <div>
                        <h2 className="sub_head_text text-center">
                            Here are a few reasons...
                        </h2>
                    </div>

                    <div className="vertical_container mt-6 mx-10 max-sm:mx-0">
                        <div className="boxes">
                            <h3 className="desc_percentage">
                                90%
                            </h3>

                            <p className="desc_online desc_stats">
                                Of consumers are online. 
                            </p>
                        </div>

                        <div className="boxes">
                            <h3 className="desc_percentage">
                                70%
                            </h3>

                            <p className="desc_online desc_stats">
                                Increase in reach.
                            </p>
                        </div>

                        <div className="boxes">
                            <h3 className="desc_percentage">
                                25%
                            </h3>

                            <p className="desc_online desc_stats">
                                Increase in sales for local businesses that have an online presence experience.
                            </p>
                        </div>

                        <div className="max-md:hidden">
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="right_container">
                <div className="vertical_container">
                    <div className="text-center">
                        <h2 className="sub_head_text !my-0">
                            How much more can I earn?
                        </h2>

                        <p className="sub_head_text lg:!text-lg">
                            Use this calculator to find out.
                        </p>
                    </div>

                    <div className="calculator_container lg:mx-20 md:mx-10 max-md:mx-0">
                        <div className='vertical_container md:mb-10 max-md:mb-10'>

                            <div className='calculator_item'>
                                <p className='calculator_text !text-white !mt-5 !mb-1'>Product Price</p>
                                <input type='text' className='input_item' defaultValue="£99.99" id='product-price' />
                                <label htmlFor="product-price" className='hidden'>Product Price</label>
                            </div>

                            <div className='calculator_item'>
                                <p className='calculator_text !text-white !mt-5 !mb-1'>Monthly Visitors</p>
                                <input type='text' className='input_item' defaultValue="10,000" id='monthly-visitors' />
                                <label htmlFor="monthly-visitors" className='hidden'>Monthly Visitors</label> 
                            </div>

                            <div className='calculator_item'>
                                <p className='calculator_text !text-white !mt-5 !mb-1'>Conversion Rate</p>
                                <input type='text' className='input_item' defaultValue="2.00%" id='conversion-rate' />
                                <label htmlFor="conversion-rate" className='hidden'>Conversion Rate</label>
                            </div>

                            <div className='calculator_item'>
                                <p className='calculator_text !text-white !mt-5 !mb-1'>Revenue</p>
                                <input type='text' className='input_item' defaultValue="£19,998" id='revenue' disabled/>
                                <label htmlFor="revenue" className='hidden'>Revenue</label>
                            </div>

                        </div>                     
                    </div>

                </div>

            </div>

        </div>
    </section>
    
  )
}

export default OnlinePresence