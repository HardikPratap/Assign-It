import React from 'react'
import { useForm } from 'react-hook-form'
import { useChangePasswordMutation } from '../redux/slices/api/userApiSlice'
import { changeUserPassword } from '../../../server/controllers/UserControllers'
import { toast } from 'sonner'
import ModalWrapper from './ModalWrapper'
import { DialogTitle } from '@headlessui/react'
import Textbox from './TextBox'
import Loader from './Loading'
import Button from './Button'

function ChangePassword({open,setOpen} ){
    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm()

    const[changeUserPassword,{isLoading}]=useChangePasswordMutation()
    
    const handleOnSubmit=async(data)=>{
        if(data.password!==data.cpass){
            toast.warning("Password Doesn't match")
            return
        }

        try{
            const res= await changeUserPassword(data).unwrap()
            toast.success("New User Added Successfully")

            setTimeout(()=>{
                setOpen(false)
            },1500)
        }catch(error){
            console.log(error)
            toast.error(error?.data?.message || "Unexpected error occured")
        }
    }
  return (
    <>
        <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
                <DialogTitle as='h2'
                    className='text-base font-bold leading-6 text-gray-900 mb-4'
                >
                    Change Password
                </DialogTitle>

                <div className='mt-2 flex flex-col gap-6'>
                    <Textbox
                        placeholder= 'New Passowrd'
                        type= 'password'
                        name= 'password'
                        label= 'New Passowrd'
                        className='w-full rounded'
                        register={register("password", {
                            required: "New Password is required!",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long",
                            },
                        })}
                        error={errors.password? errors.password.message :""}
                    />
                    <Textbox
                        placeholder= 'Confirm New Passowrd'
                        type= 'password'
                        name= 'cpass'
                        label= 'Confirm New Passowrd'
                        className='w-full rounded'
                        register={register ("cpass", {
                        required: "Confirm New Passowrd is required!",
                        })}
                        error={errors.cpass? errors.cpass.message :""}
                    />

                </div>

                {isLoading ?(
                    <div className='py-5'>
                        <Loader/>
                    </div>
                ):(
                    <div className='py-3 mt-4 sm: flex sm: flex-row-reverse'>

                        <Button
                        type='submit'
                        className=' bg-blue-600 px-8 text-sm font-semibold'
                        label='Save'
                        />
                    </div>
                )
            }
            </form>
        </ModalWrapper>
    </>
  )
}

export default ChangePassword
