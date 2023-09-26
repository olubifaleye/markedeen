'use client'

//imports
import '@styles/globals.css';
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
            const productPrice = parseFloat(productPriceInput.value.replace("$", "").replace(",", ""));
            const monthlyVisitors = parseFloat(monthlyVisitorsInput.value.replace(",", ""));
            const conversionRate = parseFloat(conversionRateInput.value.replace("%", ""));
            
            // Calculate the revenue
            let revenue = productPrice * monthlyVisitors * (conversionRate / 100);
            
            // Format the revenue and update the revenue field
            revenue = "$" + revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
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
                const formattedValue = "$" + parseFloat(value.replace(/[^0-9\.]/g, "")).toLocaleString("en-US", {maximumFractionDigits:2, minimumFractionDigits:2});
                productPriceInput.value = formattedValue;
            }
        }

        // Function to format the monthly visitors input
        function formatMonthlyVisitorsInput() {
            const value = monthlyVisitorsInput.value;
            if (value) {
                const formattedValue = parseFloat(value.replace(/[^0-9]/g, "")).toLocaleString("en-US");
                monthlyVisitorsInput.value = formattedValue;
            }
        }

        // Function to format the conversion rate input
        function formatConversionRateInput() {
            const value = conversionRateInput.value;
            if (value) {
                const formattedValue = parseFloat(value.replace(/[^0-9\.]/g, "")).toLocaleString("en-US", {maximumFractionDigits:2, minimumFractionDigits:2}) + "%";
                conversionRateInput.value = formattedValue;
            }
        }
    })

  return (
    <section className="main section-4" id='OnlinePresence'>
        <div className='top_head_section'>
            <p className="head_text_span ml-24 text-left max-md:text-center max-md:ml-0">
                Why is my online presence important?
            </p>
        </div>

        <div className="online_presence_container">
            <div className="left_container md:!pt-0">
                <div className="vertical_container">
                    <div>
                        <p className="sub_head_text text-center">
                            Here are a few reasons...
                        </p>
                    </div>

                    <div className="vertical_container mt-6 mx-10 max-sm:mx-0">
                        <div className="boxes">
                            <p className="sub_head_text !font-extrabold !text-white max-sm:my-12">
                                100%
                            </p>

                            <p className="desc !text-white pl-auto desc_online">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="boxes">
                            <p className="sub_head_text !font-extrabold !text-white max-sm:my-12">
                                60%
                            </p>

                            <p className="desc !text-white pl-auto desc_online">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="boxes">
                            <p className="sub_head_text !font-extrabold !text-white max-sm:my-12">
                                150%
                            </p>

                            <p className="desc !text-white pl-auto desc_online">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                        <p className="sub_head_text !my-0">
                            How much more can I earn?
                        </p>

                        <p className="sub_head_text lg:!text-lg">
                            Use this calculator to find out.
                        </p>
                    </div>

                    <div className="calculator_container lg:mx-20 md:mx-10 max-md:mx-0">
                        <div className='vertical_container md:mb-10 max-md:mb-10'>

                            <div className='calculator_item'>
                                <p className='sub_head_text !text-white !mt-10 !mb-3'>Product Price</p>
                                <input type='text' className='input_item' defaultValue="$99.99" id='product-price' />
                            </div>

                            <div className='calculator_item'>
                                <p className='sub_head_text !text-white !mt-10 !mb-3'>Monthly Visitors</p>
                                <input type='text' className='input_item' defaultValue="10,000" id='monthly-visitors' /> 
                            </div>

                            <div className='calculator_item'>
                                <p className='sub_head_text !text-white !mt-10 !mb-3'>Conversion Rate</p>
                                <input type='text' className='input_item' defaultValue="2.00%" id='conversion-rate' />
                            </div>

                            <div className='calculator_item'>
                                <p className='sub_head_text !text-white !mt-10 !mb-3'>Revenue</p>
                                <input type='text' className='input_item' defaultValue="$19,998" id='revenue' disabled/>
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