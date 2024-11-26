import React from 'react'
import "../App.css"
import { GlobeDemo } from '../components/ui/GlobeDemo'

function Login() {
  return (
    <div className='min-h-screen flex ' > 
        <div className='text-white  text-center pt-36  w-3/5 bg-black min-h-screen'>
            <div className='font-sans font-bold text-5xl'>Login</div>
            <div className='text-sm font-normal mt-4 text-gray-400'>How to i get started lorem ipsum dolor at?</div>
            <div>
            <input type="text"
                placeholder='Username' 
                className='pl-3 text-sm text-black mt-8 h-10 w-80 rounded-lg bg-gray-300 placeholder-black'  
            />
            </div>
            <div>
            
            <input type="text"
                placeholder='Password' 
                className='pl-3 text-sm text-black mt-8 h-10 w-80 rounded-lg bg-gray-300 placeholder-black'  
            />
            </div>

            <div className='mt-14 text-black'>
                <button className='bg-gradient-to-tl from-gray-500 to-white h-10 w-32 rounded-md font-semibold decoration-1'>Login Now</button>
            </div>

            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-1/2 h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <span class="absolute px-3 font-medium bg-transparent justify-center text-white dark:bg-black">Login <span className='text-xs text-gray-400'>with Others</span></span>
            </div>


        </div>

        <div className='bg-white w-2/5'>
            <GlobeDemo />
        </div>   
    </div>
  )
}

export default Login
