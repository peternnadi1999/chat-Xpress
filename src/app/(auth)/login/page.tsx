import React from 'react';
import Image from 'next/image';
import Logo from '/public/image/Logo.png'
import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center font-plus justify-center min-h-screen bg-gray-50">
      <div className="w-full my-10 max-w-sm p-5 bg-white rounded-lg shadow-lg">
       <div className='p-3 border rounded-lg'>
        <div className="flex justify-center mb-6">
        <Image src={Logo} alt='ChatXpress' className='h-14 w-20 '/>
        </div>

       
        <h2 className="text-xl font-normal text-center mb-1">Welcome Back!</h2>
        <p className="text-center font-normal  text-sm text-gray-600 mb-6">Sign in to your account to continue.</p>

        <form className="space-y-4">
          <div className='space-y-3'>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="mt-1 px-4 py-2 w-full bg-[#F0F1F3] focus:outline-none focus:ring-1 focus:ring-[#F17550] rounded-md outline-none"
            />
          </div>

          
          <div className='space-y-3'>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password*
            </label>
            <div className="flex ">
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="mt-1 px-4 py-2 w-full border bg-[#F0F1F3] focus:outline-none focus:ring-1 focus:ring-[#F17550] rounded-md outline-none"
              />
            </div>
              <Link href="/forget-password" className="text-sm text-[#F17550] hover:underline flex justify-end">
                Forgot password?
              </Link>
          </div>

          <button
            type="submit"
            className="w-full text-sm py-2 mt-4 bg-black font-medium text-white rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Log in
          </button>

        
          <div className="text-center text-sm text-gray-600 mt-4">Or</div>

          
          <button
            type="button"
            className="w-full py-2 mt-2 bg-[#F0F1F3] text-gray-700 font-medium rounded-md flex items-center justify-center hover:bg-gray-200 focus:outline-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        </form>

        </div>
      </div>
        <p className="text-center text-sm text-gray-600 my-9">
          Don’t have an account? <Link href="/signup" className="text-[#F17550] hover:underline">Create one</Link>
        </p>
    </div>
  );
};

export default LoginForm;
