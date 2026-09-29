import {Form} from "react-router-dom";
import {FormInput, SubmitBtn} from "../components";

const Register = () => {
    return (
        <section className="h-screen grid place-items-center ">
            <Form onSubmit='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
                <h4 className='text-center text-3xl font-bold '>Register</h4>
                <FormInput type='text' label='username' name='username' />
                <FormInput type='email' label='email' name='email' />
                <FormInput type='email' label='password' name='password' />
                <div className="mt-4">
                    <SubmitBtn text='Register' />
                </div>
             <p className="text-center" >Not a member yet?

             </p>
            </Form>
        </section>
    );
};

export default Register;