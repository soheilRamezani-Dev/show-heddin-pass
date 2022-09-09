import './form.css';
import { useFormik} from 'formik';
import { useState } from 'react';
import * as yup from 'yup'

const Form = ()=>{

    const [isshow , setisshow] =useState(false)

    const formik = useFormik({
        initialValues:{
            password:''
        },
        validateYupSchema: yup.object({
            password: yup.string().min(5).required()
        }),
        onSubmit: values =>{
            console.log(values);
        }

    });

    function showPass(){
        if(isshow === false){
            setisshow(true);
         }else{
            setisshow(false);
         }
        
    }

    return <>
        <form>
            <div className="form-group justify-content-center d-flex">
                <label htmlFor="password">
                    <input onBlur={formik.handleBlur} 
                    value={formik.values.password} 
                    onChange={formik.handleChange} 
                    className='form-control' 
                    type={(isshow)? 'text' : 'password'} 
                    name="password" 
                    placeholder="password"/>
                    <i className="show-password-icon award-icon fa-solid fa-lg" onClick={showPass}></i>
                </label>           
            </div>
        </form>
    </>
}

export default Form;