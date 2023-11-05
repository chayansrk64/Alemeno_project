import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const {user, createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);

            updateUserProfile(data.name, data.photo)
            .then(data => {
                console.log(data)
            })
             

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Registration Successfull',
                showConfirmButton: false,
                timer: 1500
              })
              reset();
              navigate("/")
        })


      }
    
      console.log(watch("example")) 

      

    return (
        <div>
           <div className="hero min-h-screen w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Please Register!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" required />
                        {errors.email && <span className="text-red-600">Name field is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                        {errors.email && <span className="text-red-600">Email field is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { 
                            required: true,  
                            minLength:6,
                            maxLength: 20, 
                            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}/ })} placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className="text-red-600">Password at least 6 and not more than 20 characters</span>}
                            {errors.password && <span className="text-red-600">Password should uppercase, lowercase and special characters</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Register;