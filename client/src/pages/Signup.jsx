import React, { useEffect } from 'react'
import "../App.css"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Textbox from '../components/TextBox';
import  Button  from '../components/Button';
import { GlobeDemo } from '../components/ui/globeDemo';


function Signup() {
    const user ="";
    const{register , handleSubmit,
        formState: { errors },
      } = useForm();
    

    const navigate = useNavigate();
    const submitHandler = async (data) => {
        console.log("submit");
      };
    
      useEffect(() => {
        user && navigate("/dashboard");
      }, [user]);

  return (
    <div className='min-h-full md:flex ' > 
        {/* left Side  */}
        <div className='text-white justify-items-center pt-36  md:w-3/5 bg-black min-h-screen '>
            <form
                onSubmit={handleSubmit(submitHandler)}
                className='form-container w-full md:w-[400px] content-center text-center'
            >
                <div className='font-sans font-bold text-5xl'>Signup</div>
                <div className='text-sm font-normal mt-4 text-gray-400'>How to i get started lorem ipsum dolor at?</div>
                <Textbox
                        placeholder='Username'
                        type='input'
                        name='username'
                        // label='Email Address'
                        className='h-10 w-80 '
                        register={register("username", {
                        required: "username is required!",
                        })}
                        error={errors.username ? errors.username.message : ""}
                    />
                <Textbox
                        placeholder='email@example.com'
                        type='email'
                        name='email'
                        // label='Email Address'
                        className='h-10 w-80 '
                        register={register("email", {
                        required: "Email Address is required!",
                        })}
                        error={errors.email ? errors.email.message : ""}
                    />
                     <Textbox
                        placeholder='Password'
                        type='password'
                        name='password'
                        // label='Password'
                        className='h-10 w-80 '
                        register={register("password", {
                        required: "Password is required!",
                        })}
                        error={errors.password ? errors.password.message : ""}
                    />
                    <div className='text-right mr-10 text-xs mt-2 text-gray-400 hover:cursor-pointer hover:text-blue-600 transition-colors  duration-200'>
                        Forgot Password?
                    </div>

                
                <Button type='submit' 
                    className='mt-10 text-black h-10 w-32 rounded-md font-semibold decoration-1 hover:border-2 border-blue-600 transition-all duration-200'
                    lable="Signup"
                />


                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-1/2 h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <span className="absolute px-3 font-medium bg-transparent justify-center text-white dark:bg-black">Login <span className='text-xs text-gray-400'>with Others</span></span>
                </div>
            </form>
        </div>


        {/* right Side  */}
        <div className='bg-white w-2/5 hidden md:block'>
            <GlobeDemo />
        </div>   
    </div>
  )
}

export default Signup
