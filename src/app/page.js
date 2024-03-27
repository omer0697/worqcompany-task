"use client";

import HomePage from "./components/Navbar";
import { message } from 'antd';
import Message from './components/Message';
import React , { useState } from 'react';
import Register from "./components/Register";


export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const name = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).name : '';

  console.log(name);

  function handleClose() {
    setOpenModal(false)
  }

  function handleOpen() {
    setOpenModal(true)
  }

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Başarılı bir şekilde kayıt oldunuz!'
    });
  };

  return (
    <> 
      <Message contextHolder={contextHolder} />
      <Register openModal={openModal} handleClose={handleClose} success={success}/>
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            {
              name ? (
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Hoş Geldin {name}
                </a>
              ) : <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={handleOpen}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kayıt Olun
              </button>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Giriş Yap <span aria-hidden="true">→</span>
              </a>
            </div>
            }
        </div>
    </>
  );
}
