// import { useState } from 'react'
import NameInput from '../../../Inputs/NameInput/NameInput'
import PasswordInput from '../../../Inputs/PasswordInput/PasswordInput'
import SubmitBut from '../../../SubmitBut/SubmitBut'
import StoresInput from '../../../Inputs/StoresInput/StoresInput'
import { FaArrowRightLong } from "react-icons/fa6";



const SignUpForm = () => {

    // const passw_el = document.querySelector(form_name + ' .passw_input')
    // const name_el = document.querySelector(form_name + ' .name_input')


    const handleSignUp = async () => {
        return
    //     const REG_INFO = {
    //         u_name: name_el.value,
    //         u_passw: passw_el.value,
    //         u_device: navigator.userAgent,
    //     }
    //     console.log(REG_INFO)
    }

    return (
        <form id='sign_up-form' className='form cont'>
            <StoresInput />
            <NameInput/>
            <PasswordInput />
            <SubmitBut 
                icon={<FaArrowRightLong className='fa-icon'/>}
                onClick={handleSignUp}
                notSaveUser={true}
            />
        </form>
    )  
}

export default SignUpForm