import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./BabyWear.css"

export default function BabyWear() {
  const navigate = useNavigate()
  return (
    <div>
 
      <div className='CategoryHeading'>
          <p>Baby Wear Category</p>
          <p>
              <span onClick={() => {navigate("/")}}>Home |</span>
              <span> Baby Wear Category</span>
          </p>
      </div>

      <div className='CategoryBelowCategory'>

          <div className='FilterDiv'></div>

          <div className='ProductsDiv'>

              <div className='IndividualProd' onClick={() => {navigate("/description")}}>
                <div className='IndividualProdImg'>
                    <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/7e6e72d5-7823-4563-b6e3-7da68e67bc551578911632787-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-3.jpg" alt="" />
                </div>
                <div className='IndividualProdTitle'>
                    <p>Name</p>
                    <p>
                        <span>₹ 200</span>
                        <span>₹ 300</span>
                    </p>
                </div>
              </div>







              <div className='IndividualProd'>
                <div className='IndividualProdImg'>
                <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/7e6e72d5-7823-4563-b6e3-7da68e67bc551578911632787-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-3.jpg" alt="" />
                </div>
                <div className='IndividualProdTitle'>
                    <p>Name</p>
                    <p>
                        <span>₹ 200</span>
                        <span>₹ 300</span>
                    </p>
                </div>
              </div>

              <div className='IndividualProd'>
                <div className='IndividualProdImg'>
                <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/7e6e72d5-7823-4563-b6e3-7da68e67bc551578911632787-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-3.jpg" alt="" />
                </div>
                <div className='IndividualProdTitle'>
                    <p>Name</p>
                    <p>
                        <span>₹ 200</span>
                        <span>₹ 300</span>
                    </p>
                </div>
              </div>      <div className='IndividualProd'>
                <div className='IndividualProdImg'>
                <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11066858/2020/1/13/7e6e72d5-7823-4563-b6e3-7da68e67bc551578911632787-Popnetic-Women-Pink--White-Block-Printed-Straight-Kurta-9771-3.jpg" alt="" />
                </div>
                <div className='IndividualProdTitle'>
                    <p>Name</p>
                    <p>
                        <span>₹ 200</span>
                        <span>₹ 300</span>
                    </p>
                </div>
              </div>



          </div>

      </div>

    </div>
  )
}
