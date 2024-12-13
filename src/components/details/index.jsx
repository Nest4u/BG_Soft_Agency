
import { MailCheck } from 'lucide-react';
import React from 'react';
import { useParams } from 'react-router-dom';
import * as variable from '../../variables/index.jsx'
import { useState } from 'react';
import {Main} from '../main/index'
import axios from 'axios';

function VacancyDetailsPage() {

    let { id } = useParams(); // Получаем id из URL
    const vacancy = variable.vacancies.find(vacancy => vacancy.id === id); // Находим вакансию по id
    if (!vacancy) {
      return <div>Vacancy not found</div>; // Если вакансия не найдена
    }

  const [files, setFiles] = useState([]);
  const TOKEN ="6948404678:AAGwfQN5Hh7QAmv8K4W22zmcVnAFpJvmtnw";
  const CHAT_ID="-4109110854"
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`
  const url1 = `https://api.telegram.org/bot${TOKEN}/sendDocument`
  
  const fileUpload = (event) => {
    const uploadedFiles = [...event.target.files];
    setFiles(uploadedFiles);
  };

  async function sendtoTG(e) {
    e.preventDefault();

    const form = e.target.closest('form');
    if (!form.checkValidity()) {
      form.reportValidity();
      alert('ENTER ALL FIELDS');
      return;
    }
   
    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = `Name: ${name} \nEmail: ${email}`;
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const url1 = `https://api.telegram.org/bot${TOKEN}/sendDocument`;

    try {
      await axios.post(url, {
        chat_id: CHAT_ID,
        parse_mode: 'HTML',
        text: message
      });
      for (const file of files) {
      const formData = new FormData();
      formData.append('document', file);
      formData.append('chat_id', CHAT_ID);

      await axios.post(url1, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

    }
      success.innerHTML = "Your message has been sent successfully!";
    } 
    catch (error) {
      console.warn(error);
    } 
    finally {
      console.log('done');
    }
  }


    return (
        
      <div className="  mx-auto container  min-h-[600px]">
        <div className='grid lg:grid-cols-2'>

        
  <div className="lg:order-1 order-3 p-4 w-full ">
    <h1 className="text-2xl font-bold pb-2">{vacancy.title}</h1>
    <p>{vacancy.description}</p>
    <div className='pt-4'>
      <h2 className="text-xl font-bold pb-2">Responsibilities:</h2>
      <ul className='ml-5' style={{ listStyleType: 'square' }}>
              {vacancy.responsibilities.split('  ').map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
    </div>
    <div className='pt-4'>
      <h2 className="text-xl font-bold pb-2">Qualifications:</h2>
      <ul className='ml-5' style={{ listStyleType: 'square' }}>
              {vacancy.qualifications.split('  ').map((qualifications, index) => (
                <li key={index}>{qualifications}</li>
              ))}
            </ul>
      
    </div>
    <div className='pt-4'>
      <h2 className="text-xl font-bold pb-2">What we offer:</h2>
      <ul className='ml-5' style={{ listStyleType: 'square' }}>
              {vacancy.offer.split('  ').map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
      
    </div>
  </div>
  <div className=' lg:order-2 order-1 lg:flex lg:justify-center p-4 '> 
  <div className=" p-7 border-gray-300 border-2  h-[230px] w-[340px] md:w-[420px]  bg-white">
    
    <div className='flex '>
  <ul>
    <li className="flex mb-2">
      <span className="font-bold ml-[20px]">Job:</span>
      
    </li>
    <li className="flex mb-2">
      <span className="font-bold ml-[20px]">Location:</span>
      
    </li>
    <li className="flex mb-2">
      <span className="font-bold ml-[20px]">Language:</span>
      
    </li>
    <li className="flex mb-2">
      <span className="font-bold ml-[20px]">Type:</span>
    
    </li>
    <li className="flex ">
      <span className="font-bold ml-[20px]">Status:</span>
      
    </li>
  </ul>
  <ul>
  <li className="flex mb-2">
      
      <span className='ml-[100px]'> {vacancy.title}</span>
    </li>
    <li className="flex mb-2">
      
      <span className='ml-[100px]'> {vacancy.location}</span>
    </li>
    <li className="flex mb-2">
     
      <span className='ml-[100px]'> {vacancy.language}</span>
    </li>
    <li className="flex mb-2">
      
      <span className='ml-[100px]'> {vacancy.type}</span>
    </li>
    <li className="flex ">
     
      <span className='ml-[100px]'> {vacancy.status}</span>
    </li>
  </ul>
  
</div>
</div>
</div>
<div className="  lg:order-2 order-3 pt-[100px] p-4  ">
      <p className='font-bold  '>Is that about you? Send us your CV right now.</p>

      <div>
        <p className='my-8 text-sm'>Personal Details </p>
      <form className="space-y-6" action="#" id='tg' method="POST">
      <div>
       
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" placeholder="Email address" required className="block w-full bg-transparent border-b-2 border-gray-700 focus:outline-none  text-gray-700 py-2 mt-1 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className ="flex items-center justify-between">
         
         
        </div>
        <div className="mt-2">
          <input id="name" name="name" type="name" autoComplete="current-name" placeholder="Name" required className=" w-full bg-transparent border-b-2 border-gray-700 focus:outline-none  text-gray-700 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="bg-transparent text-gray-700 flex items-center border-b-2 border-gray-700 p-1 min-w-[300px] w-full font-[sans-serif]  overflow-hidden my-8 mx-auto">
        <div className="px-4 flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 612.675 612.675">
            <path d="M581.209 223.007 269.839 530.92c-51.592 51.024-135.247 51.024-186.839 0-51.592-51.023-51.592-133.737 0-184.761L363.248 69.04c34.402-34.009 90.15-34.009 124.553 0 34.402 34.008 34.402 89.166 0 123.174l-280.249 277.12c-17.19 17.016-45.075 17.016-62.287 0-17.19-16.993-17.19-44.571 0-61.587L394.37 161.42l-31.144-30.793-249.082 246.348c-34.402 34.009-34.402 89.166 0 123.174 34.402 34.009 90.15 34.009 124.552 0l280.249-277.12c51.592-51.023 51.592-133.737 0-184.761-51.593-51.023-135.247-51.023-186.839 0L36.285 330.784l1.072 1.071c-53.736 68.323-49.012 167.091 14.5 229.88 63.512 62.79 163.35 67.492 232.46 14.325l1.072 1.072 326.942-323.31-31.122-30.815z" data-original="#000000" />
          </svg>
          <p className="text-sm ml-3">Document.pdf</p>
        </div>
          <label htmlFor="formFile" className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-2.5 outline-none rounded-md cursor-pointer ml-auto w-max block">Upload</label>
         <input type="file" id='formFile' name='document' className="hidden" multiple required onChange={event=>fileUpload(event)} />
      </div>

      <div>
        <button type="submit" id='submit' onClick={e =>sendtoTG(e)} className=" bg-transparent text-center min-w-[100px]  border-2 border-black text-black font-bold py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 rounded-full">Send</button>
      </div>
      
    </form>
      </div>

      
      
   
    </div>
   
  
    </div>
</div>
    );
  }
  
  export default VacancyDetailsPage;