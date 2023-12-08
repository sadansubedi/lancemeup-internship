import React,{useState}from 'react'
import { NavLink,useLocation} from 'react-router-dom'
const CheckOut = () => {
  let location = useLocation();
  // let clickValue = location.state.clickValue;
   const {clickValue} = location.state;
   
 // console.log(clickValue);
  const [data,Setdata] = useState({
    full_name:"",
    phone:"",
    email:"",
    address:"",
    states:"",
    zipcode:"",
  });

  const InputEvent=(e)=>{
    const { name, value } = e.target;
    console.log(name +":", value); //name indicate the respective input field and value contain the data enter into that input field ok 
    Setdata((preVal) => {

      const updatedState = {  //this is what chatgpt give the codesnippet so that we can debug that what the preVal and [name]: value contain ok
        ...preVal,
        [name]: value,
      };
      console.log("Updated state:", updatedState); // Log the updated state
      return updatedState;
    });
  }
 
  

  return (
    <>
<h1 className='text-center w-full mt-10 text-3xl inline-block'> Order Confirmation</h1>
<form>
<div className="p-16 m-10 flex items-center justify-between">
 {/*static form  */}
      <div className="bg-gray-500 rounded p-4 mx-6 mb-6">
        <div className="text-sm ">
          <div className="">
            <div className="grid gap-4 gap-y-2 text-xl">
              <div className="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full " onChange={InputEvent} value={data.full_name} />
              </div>

              <div className="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full " onChange={InputEvent} value={data.email} placeholder="email@domain.com" />
              </div>

              <div className="md:col-span-3">
                <label for="address">Address / Street</label>
                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full " onChange={InputEvent} value={data.address} placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label for="city">Phone</label>
                <input type="number" name="phone" id="phone" className="h-10 border mt-1 rounded px-4 w-full" onChange={InputEvent} value={data.phone} placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label for="country">Country / region</label>
                <div className="h-10  flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" onChange={InputEvent} value={data.country} />
                 
                </div>
              </div>

              <div className="md:col-span-2">
                <label for="states">State / province</label>
                <div className="h-10 flex border border-gray-200 rounded items-center mt-1">
                  <input name="states" id="states" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" onChange={InputEvent} value={data.states} />
                  
                </div>
              </div>

              <div className="md:col-span-1">
                <label for="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full " placeholder="enter code" onChange={InputEvent}value={data.zipcode}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className='bg-gray-700 text-gray-400 text-left flex flex-col w-80 h-70 m-3'>
            <h1 className='m-4 text-xl ' >CheckOut Summary</h1>
            <hr />
            <p className='mx-5 my-3'><h1> Guardians of the Galaxy Vol2</h1></p>
            <hr />
            <p className='flex flex-col m-4 '><h1> Location</h1>Kathmandu,Nepal</p>
            <hr />
            <div className='flex flex-col m-3 my-3'>
              <p className='flex justify-between'><h1>Normal</h1> <span>X{clickValue}</span> <span>$500.00</span></p>
              <p className='flex justify-between'><h1>Sub Total</h1> <span>${clickValue*500}.00</span></p>
              <p className='flex justify-between'><h1>Tax(13%)</h1> <span>$130.00</span></p>
              <p className='flex justify-between'><h1>Discount(0%)</h1> <span>0.00</span></p>
              <hr />
              <p className='flex justify-between'><h1>Total</h1> <span>USD {clickValue*500+130}.00</span></p>
              <hr />
              {/* <button type='submit' className='w-full bg-red-700 text-center text-xl rounded-xl cursor-pointer'>Confirm and Pay</button> */}
              
              {/* <NavLink type='submit' to={{pathname:'/confirmpay' }}
                       state={{Values:data}}  className='w-full bg-red-700 text-center text-xl rounded-xl cursor-pointer'><span>Confirm and Pay</span></NavLink>
            */}
            <NavLink
               to={{ pathname: '/confirmpay' }}
               state={{ Values: data,clickvalue: clickValue }}
                className={`w-full bg-red-700 text-center text-xl rounded-xl cursor-pointer ${Object.values(data).some(value => value === "") ? "pointer-events-none opacity-50" : ""}`}
              >{/*try to implement if all data isnot fill up it shouldnot submit for that take help from chatgpt and stackflow */}
              <span>Confirm and Pay</span>
            </NavLink>
            {/*chat-gpt aka helper haha */}

            </div>
          </div>
  </div>
  </form>

  </>
  )
}


export default CheckOut