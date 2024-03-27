"use client";

import React, { useState } from 'react'
import { Modal, Select, Input } from 'antd'

const AccountInfo = ({openModel, handleClose}) => {
    const [data, setData] = useState({
        url: '',
        market: '',
    });

    const options = [
        { value: 'amazon', label: 'Amazon' },
        { value: 'Trendyol', label: 'Trendyol' },
        { value: 'Hepsiburada', label: 'Hepsiburada' },
        { value: 'woocommerce', label: 'WooCommerce' },
    ];

    function handleSave () {
        sessionStorage.setItem('account', JSON.stringify(data));
        handleClose();
        setData({
            url: '',
            market: '',
        });
    }

  return (
    <Modal
        title="Account Info"
        open={openModel}
        footer={null}
        onCancel={handleClose}
        className='flex items-center justify-center w-full'
        >
        <div className='flex flex-col w-full h-full items-center gap-4 justify-center '>
            <Input className='w-[20rem]' onChange={(e) => setData({...data, url: e.target.value})} placeholder='Your store url' />
            <Select className='w-[20rem]' onChange={(value) => setData({...data, market: value})} options={options} placeholder='Select your market' />
            <button onClick={handleSave} className='bg-blue-500 text-white p-2 rounded-md'>
                Save
            </button>
        </div>
    </Modal>
  )
}

export default AccountInfo