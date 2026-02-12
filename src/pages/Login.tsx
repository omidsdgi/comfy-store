import {FormInput, SubmitBtn} from "../components";
import {Form, Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="h-screen grid place-items-center">
            <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className='text-center font-bold text-3xl '>Login</h4>
                <FormInput name='identifier' type='email' defaultValue='test@test.com' label='email'/>
                <FormInput name='password' type='password' defaultValue='secret' label='password'/>
                <div className="mt-4">
                    <SubmitBtn text="Login"/>
                </div>
                <button type='button' className=' btn btn-block btn-secondary'>guest user</button>
                <p className=' text-center'>Not a member yet? <Link to='/register' className=' ml-2 link-hover link-primary capitalize'>Register</Link></p>
            </Form>
        </section>
    )
};

export default Login;