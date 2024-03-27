"use client"
import React,{useState} from 'react'
import AccountInfo from '../components/AccountInfo';

const page = () => {
    const [openModel, setOpenModel] = useState(false);
    const {name, surname, email, phone} = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : '';
    const {url, market} = sessionStorage.getItem('account') ? JSON.parse(sessionStorage.getItem('account')) : {url: '', market: ''};

    function handleClose() {
        setOpenModel(false)
    }
    
      function handleOpen() {
        setOpenModel(true)
    }

  return (
    <div className='flex flex-col items-center gap-4 justify-center '>
        <AccountInfo openModel={openModel} handleClose={handleClose} />
        <h1 className='text-4xl font-bold'>Hoş Geldin {name} {surname}</h1>
        <p className='text-lg'>Your email: {email} </p>
        <p className='text-lg'>Your phone number: {phone}</p>
        <button onClick={handleOpen} className='bg-blue-500 text-white p-2 rounded-md'>
            Hesap bilgilerini ekle
        </button>
        {
            url && market &&
            <>
                <p className='text-lg'>Your store url: {url}</p>
                <p className='text-lg'>Your market: {market}</p>
            </>
        }
    </div>
    )
}

export default page