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
                <div className='ProdImages'></div>

                <div className='ProdInfo'>
                    <div><p>Brand Name</p></div>
                    <div><p>Name</p></div>
                    <div><p>Rating</p></div>

                    <div className='linebreak'></div>

                    <div className='PriceDiv'>
                        <div><p>Rs. MRP</p></div>
                        <div><p>Rs. MRP</p></div>
                        <div><p>Rs. MRP</p></div>
                    </div>

                    <div><span>Select Size</span><span>SIZE CHART</span></div>

                    <div className='SizesDiv'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>

                    <div>
                        <button>ADD TO BAG</button>
                        <button>WISHLIST</button>
                    </div>

                    <div className='PriceDivSmall'>
                        <div><p>Rs. MRP</p></div>
                        <div><p>Rs. MRP</p></div>
                        <div><p>Rs. MRP</p></div>
                    </div>

                    <div>
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
