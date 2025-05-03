import React, { useEffect } from 'react'
import "../App.css"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Textbox from '../components/TextBox';
import  Button  from '../components/Button';
import  {GlobeDemo}  from '../components/ui/GlobeDemo';
import Loading from '../components/Loading';
import { useRegisterMutation } from '../redux/slices/api/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';


function Signup() {
    const {user}= useSelector((state)=>state.auth);
    const{register , handleSubmit,
        formState: { errors },
      } = useForm();
    

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [signup, {isLoading}]= useRegisterMutation()

    const submitHandler = async (data) => {
        console.log(data)
        try{
            const result= await signup(data).unwrap()
            dispatch(setCredentials(result))
            console.log("submited data: " + result); 
            navigate("/")
        }catch(e){
            console.log(e)
            toast.error(e?.data?.message || e.message)

        }
      };
    
      useEffect(() => {
        user && navigate("/dashboard");
      }, [user]);

  return (
    <div className='min-h-full md:flex ' > 
        {/* left Side  */}
        <div className='bg-white w-3/5 hidden md:block'>
            <GlobeDemo />
        </div>


        {/* right Side  */}
       
        <div className='text-white justify-items-center pt-36  md:w-3/5 bg-black min-h-screen '>
            <form
                onSubmit={handleSubmit(submitHandler)}
                className='form-container w-full content-center text-center'
            >
                <div className='flex-col items-center justify-center'>

                    <div className='items-center justify-center w-full font-sans font-bold text-5xl'>Sign Up</div>
                    <div className='text-sm font-normal mt-4 text-gray-400'>How to i get started lorem ipsum dolor at?</div>
                    
                    {/* Name */}
                    <Textbox 
                            placeholder='Hardik Pratap'
                            type='name'
                            name='name'
                            // label='Email Address'
                            className='h-10 w-80 pl-3 text-sm rounded-lg mt-8 bg-neutral-300 text-white placeholder-third '
                            register={register("name", {
                            required: "Name is required!",
                            })}
                            error={errors.name ? errors.name.message : ""}
                    />
                    {/* Role */}
                    <Textbox 
                            placeholder='Dev'
                            type='role'
                            name='role'
                            // label='Email Address'
                            className='h-10 w-80 pl-3 text-sm rounded-lg mt-8 bg-neutral-300 text-white placeholder-third '
                            register={register("role", {
                            required: "Role  is required!",
                            })}
                            error={errors.email ? errors.email.message : ""}
                    />

                    {/* Email */}
                    <Textbox 
                            placeholder='email@example.com'
                            type='email'
                            name='email'
                            // label='Email Address'
                            className='h-10 w-80 pl-3 text-sm rounded-lg mt-8 bg-neutral-300 text-white placeholder-third '
                            register={register("email", {
                            required: "Email Address is required!",
                            })}
                            error={errors.email ? errors.email.message : ""}
                        />
                    {/* Password */}
                    <Textbox
                            placeholder='Password'
                            type='password'
                            name='password'
                            // label='Password'
                            className='pl-3 text-sm  mt-8 h-10 w-80 rounded-lg bg-neutral-300 text-white placeholder-third '
                            register={register("password", {
                            required: "Password is required!",
                            })}
                            error={errors.password ? errors.password.message : ""}
                        />
                        <div className='items-center text-xs mt-4 text-gray-400 hover:cursor-pointer hover:text-blue-600 transition-colors  duration-200'>
                            Forgot Password?
                        </div>

                    
                    {isLoading ? (<Loading />) : (<Button type='submit' 
                        className='mt-10  h-10 w-32 rounded-md font-semibold decoration-1 hover:border-2 border-blue-600 transition-all duration-200 bg-gradient-to-tl from-gray-500 to-white text-white'
                        label="Sign-Up"
                    />)}

                </div>

            </form>

                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-1/2 h-1 my-8 dark:bg-gray-200 border-2 bg-gray-700"/>
                    <span className="absolute px-3 font-medium bg-transparent justify-center text-white dark:bg-black">Login <span className='text-xs text-gray-400'>with Others</span></span>
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/log-in">
                        <Button 
                        className="w-32 max-w-xs h-10 rounded-md font-semibold hover:border-2 border-blue-600 transition-all duration-200 bg-gradient-to-tl from-white to-gray-500 text-white"
                        label="Log-In"
                        onClick={() => navigate("/log-in")}
                        />
                    </Link>
                </div>
        </div>
         
        
       
    </div>
  )
}

export default Signup
