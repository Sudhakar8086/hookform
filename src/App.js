 
import {useForm} from "react-hook-form";

import "./index.css";

export default function App() {
const {register, formState:{errors}, handleSubmit } = useForm({
  mode:"all",
});
console.log("errors", errors)

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit((data)=> {
        console.log(data)
      })}>
        
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
            {...register("firstName", {required:"First Name is required",
            minLength: {value:3, 
              message:"Firstname must be atleast 3 characters long"},
              maxLength :{value:15,
              message:"Firstname cannot exceed 15 characters",
           } })}/>
          <p>{errors.firstName?.message }</p> 

       <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          {...register("lastName", {required:"Last Name is required" , 
          minLength: {value:3, 
          message:"Lastname must be atleast 3 characters long"},
          maxLength :{value:15,
          message:"Lastname cannot exceed 15 characters",
       }})} />

         <p>{errors.lastName?.message}</p> 
        <input
          id="email"
          className="form-field"s
          type="text"
          placeholder="Email"
          name="email" {...register("email", {required:"Email is required",
          pattern: {value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ,message:"Email must be Valid",
         },})} />
          <p>{errors.email?.message}</p>
    
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}