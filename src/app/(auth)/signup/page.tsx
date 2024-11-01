"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Frame from '/public/image/Frame.png';
import Logo from '/public/image/Logo.png'
import React from 'react';
import Link from 'next/link';
import Icon from '/public/image/icon.svg';

const SignupPage = () => {
  const router = useRouter();

  const handleCreatedAccount =(e:any)=>{
    e.preventDefault();
    router.push('/onboarding');
  }
  
  return (
    <div className="grid grid-cols-5 min-h-screen bg-gray-50 font-plus">
     
      <div className="col-span-2 lg:flex  md:hidden hidden relative bg-gradient-to-br from-[#131314] to-[#74747A] m-3 rounded-xl text-white p-6">
        <div className="">
          <div className='flex items-center  pb-16' >
            <Image src={Logo} alt='ChatXpress' className='h-14 w-20 '/>
            <span className='font-bold text-xl ml-2'>ChatXpress</span>
          </div>
          <h1 className="text-3xl w-3/4  font-normal mb-4"> <span className='text-[#F17550] font-bold'>The Future </span> of Customer Service</h1>
          <p className="text-base font-medium w-3/4 mb-6">
            Start delivering exceptional customer experiences with ChatXpress today!
          </p>
          
          <div className="mt-8 absolute flex justify-end bottom-0 md:right-0 right-0">
            <Image 
              src={Frame} 
              alt="Decorative Graphic"
              className=" w-3/4  object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

     
      <div className="lg:col-span-3 md:col-span-5 col-span-5 flex items-center justify-center md:p-8">
        <div className="w-full md:max-w-md md:p-8 p-4 rounded-lg">
          <h2 className="text-3xl font-normal text-[#2D2D2D] text-center mb-2">Create your account</h2>
          <p className="text-center text-sm font-normal text-gray-600 mb-6">Get started with zero costs.</p>

          <form className="space-y-4">
            <div className='space-y-3'>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                className="mt-1 text-black px-4 py-2 bg-[#F0F1F3] w-full rounded-md outline-none "
              />
            </div>

            <div className='space-y-3'>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password*
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="mt-1 px-4 py-2 text-black  w-full bg-[#F0F1F3] rounded-md outline-none"
              />
            </div>

            <div className='space-y-3'>
              <label className="block text-sm font-medium text-gray-700" htmlFor="website">
                Website link*
              </label>
              <input
                type="text"
                id="website"
                placeholder="Paste or enter link here"
                className="mt-1 px-4 py-2 text-black  w-full bg-[#F0F1F3] rounded-md outline-none"
              />
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By creating an account, you agree to ChatXpress <br />
              <a href="#" className="text-[#F17550] ">Terms of Use</a> and <a href="#" className="text-[#F17550] ">Privacy Policy</a>.
            </p>
            <div className='space-y-7'>

            <button
              type="submit"
              onClick={handleCreatedAccount}
              className="w-full text-sm py-2 mt-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none"
            >
              Create account
            </button>

            <div className="text-center text-sm text-gray-600 mt-4">Or</div>

            <button
              type="button"
              className="w-full py-2 mt-2 text-sm bg-[#F0F1F3] text-gray-700 font-medium rounded-md flex items-center justify-center hover:bg-gray-200 focus:outline-none"
            >
              <Image src={Icon} alt="Google logo" className="w-8 h-8 mr-2" />
              Sign up with Google
            </button>

            <p className="text-center text-sm text-gray-600 mt-8">
              I already have an account? <Link href="/login" className="text-[#F17550]">Log in</Link>
            </p>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
