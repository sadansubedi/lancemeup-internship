import React,{useEffect, useRef} from 'react'
import { NavLink,useLocation} from 'react-router-dom'

 import html2pdf from 'html2pdf.js';
// import { html2pdf } from 'html2pdf.js';
// import * as html2pdf from 'html2pdf.js';

const Confirmpay = (props) => {
  const{data}=props
//console.log(data);
// const pdfRef = useRef();

let location = useLocation();// it return an object represent that the current location.
const {Values,clickvalue} = location.state;
//console.log(Values);
//console.log(clickvalue);
const cardsArray = Array.from({ length: clickvalue }, (_, index) => index + 1);

const contentRef = useRef(null);
//console.log(contentRef);
  useEffect(() => {

    const convertToPdf = async () => {
      const content = contentRef.current;
    
      if (content) {
        //const pdfOptions = { margin: 10, filename: 'example.pdf', image: { type: 'jpg', quality: 0.98 } };
    
        try {
        // const pdf = await html2pdf().from(content).set(pdfOptions).outputPdf();
         const pdfOptions = {
          margin: 10,
          filename: 'example.pdf',
          image: { type: 'jpg', quality: 0.98 },
          afterRender: function () {
            console.log('PDF rendering completed.');
          },
        };
          const pdf = await html2pdf().from(content).set(pdfOptions).save();
          //console.log(pdf);
          
          const blob = new Blob([pdf], { type: 'application/pdf' });
         // console.log(blob);

          const url = URL.createObjectURL(blob);
         // console.log(url);

          window.open(url, '_blank');
        } catch (error) {
          console.error('Error generating PDF:', error);
        }
      }
    };
    
    convertToPdf();
    
    convertToPdf();
  }, []);

  return (
    <div className='flex flex-col m-24  bg-gray-700' ref={contentRef} >
      <h1 className='w-full  p-3 text-xl bg-red-500'>TickTicketing</h1>
     <div className='flex flex-col'>
      <h1 className='text-left text-3xl m-1 p-1'>Invoice</h1>
      <p className='flex justify-between text-left text-xl m-1 p-1'><span>invoice to {Values.full_name} </span><span>invoice Id :YCCURW-0000</span></p>
      <p className='flex justify-between text-left text-xl m-1 p-1'><span>{Values.address}</span><span>10/05/2022</span></p>
      <h1 className='text-left text-xl m-1 p-1'>{Values.states},{Values.country}</h1>
     </div>
     <div>
     <table className="w-full border-collapse mt-8 p-8" >
      <thead>
        <tr>
          <th className=" border border-gray-300 py-2 px-4">Event Detail</th>
          <th className=" border border-gray-300 py-2 px-4">Event Type</th>
          <th className=" border border-gray-300 py-2 px-4">Ticket</th>
          <th className=" border border-gray-300 py-2 px-4">Unit Price</th>
          <th className=" border border-gray-300 py-2 px-4">Discount</th>
          <th className=" border border-gray-300 py-2 px-4">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 py-2 px-4">{data.Title}</td>
          <td className="border border-gray-300 py-2 px-4">{data.Type}</td>
          <td className="border border-gray-300 py-2 px-4">X {clickvalue}</td>
          <td className="border border-gray-300 py-2 px-4">$500.00</td>
          <td className="border border-gray-300 py-2 px-4">$0</td>
          <td className="border border-gray-300 py-2 px-4">$ {clickvalue*500+130}.00</td>
        </tr>
      </tbody>
    </table>
    <h1 className='text-right text-xl m-2 px-3'>Invoive Total:USD ${clickvalue*500+130}.00</h1>
     </div>
     <div>
     {/* {clickvalue ? <Cards /> : null} */}
     
     {/*On the basis of cardsArray(number of tickets) data is iterate */}
     {cardsArray.map((cardIndex) => (
      <div className='flex flex-col'key={cardIndex}>
      <div className='flex '>
        <img src= {data.Poster} className='h-40 w-40 p-3' alt="" /> 
       <p className='flex flex-col ml-5'> <h1 className='mt-4'>{data.Title}</h1> 
        <h1 className=''>{data.DVD}</h1> 
        <h1>Ticket : X1</h1>
        <h1>Total :$500.00</h1>
        </p>

      </div>
      <hr />
   </div>
        // <Cards key={cardIndex} value={Values} data={data} />
      ))}{/*here Values means the form details and data means movies details and on the basis of no of ticket cards component render */}
     </div>

    
      {/* {
        clickvalue: <Cards/>*clickValue?
      } */}

    </div>
  )
}

export default Confirmpay