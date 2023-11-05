import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = {email, password}
        console.log(data);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfull',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        })

    };

    return (
        <div>
        <div className="hero min-h-screen w-full bg-base-200">
             <div className="hero-content flex-col lg:flex-row-reverse ">
                 <div className="text-center lg:text-left w-1/2">
                 <h1 className="text-5xl font-bold">Please Login!</h1>
                 <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                 </div>
                 
                 <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
                 <form onSubmit={handleLogin} className="card-body">
                 
                     <div className="form-control">
                     <label className="label">
                         <span className="label-text">Email</span>
                     </label>
                     <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
                    
                     </div>
                     <div className="form-control">
                     <label className="label">
                         <span className="label-text">Password</span>
                     </label>
                     <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                     <label className="label">
                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                     </div>
                     <div className="form-control mt-6">
                     <input type="submit" value="Login" className="btn btn-primary"/>
                     </div>
                 </form>
                 </div>
             </div>
             </div>
     </div>
    );
};

export default Login;