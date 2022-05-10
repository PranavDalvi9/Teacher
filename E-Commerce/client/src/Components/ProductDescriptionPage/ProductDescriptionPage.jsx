import React from 'react'
import "./ProductDescriptionPage.css"

export default function ProductDescriptionPage() {
    return (
        <div>

            <div className='CategoryHeading'>
                <p>Product Details</p>
                <p>
                    <span>Home |</span>
                    <span> Category</span>
                </p>
            </div>

            <div className='ProdDetails'>
                <div className='ProdImages'><img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10064529/2019/8/23/e2101e71-8707-4110-961a-14b675a574481566552597315-Roadster-Men-Jeans-4211566552597089-1.jpg" alt="" /></div>

                <div className='ProdInfo'>
                    <div><p>Brand Name</p></div>
                    <div><p>Name Lorem ipsum dolor sit amet, consectetur auam!</p></div>
                    <div><p>4.4 <span class="fa fa-star checked"></span></p></div>

                    <div className='linebreak'></div>

                    <div className='PriceDiv'>
                        <div><p>Rs. 00</p></div>
                        <div><p>Rs. 11</p></div>
                        <div><p>( 22% OFF )</p></div>
                    </div>

                    <div className='SelectSizeDiv'><span>Select Size</span><span>SIZE CHART</span></div>

                    <div className='SizesDiv'>
                        <div><p>S</p></div>
                        <div><p>M</p></div>
                        <div><p>L</p></div>
                        <div><p>XL</p></div>
                        <div><p>XXL</p></div>
                    </div>

                    <div className='AddButton'>
                        <button>ADD TO BAG</button>
                        <button>WISHLIST</button>
                    </div>

                    <div className='PorductDetailDiv'>
                        <p>PRODUCT DETAILS</p>
                    </div>

                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit libero dolorum magni illo veniam est possimus ex quia velit consectetur.</p>
                    </div>

                </div>
            </div>


        </div>
    )
}
