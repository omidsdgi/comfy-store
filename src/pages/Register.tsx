import {Form, Link} from "react-router-dom";
import {FormInput, SubmitBtn} from "../components";

const Register = () => {
    return (
        <section className='grid place-items-center h-screen'>
            <Form className='card w-96  bg-base-100 shadow-lg flex flex-col gap-y-4'>
                <h4 className='text-center text-3xl font-bold'>Register</h4>
                <FormInput name='username' label='usertname'  type='text'/>
                <FormInput name='email' label='email'  type='email'/>
                <FormInput name='password' label='password'  type='password'/>
                <div className="mt-4">
                    <SubmitBtn text="Register"/>
                </div>
                <p className='text-center'>Already a member?
                <Link to='/login' className=' ml-2 link-hover link-primary capitalize'> Login </Link>
                </p>
            </Form>
        </section>
    );
};

export default Register;