import { Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp(){
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  async function handleOnSubmit() {
    try{
     const formData = new FormData();
     formData.append("name", inputs.name);
     formData.append("email", inputs.email);
     formData.append("password", inputs.password);
     formData.append("confirmPassword", inputs.confirmPassword);
     formData.append("image", inputs.image);
 
        const res = await axios.post (
          "http://localhost:8000/user/signup", formData
        );
        localStorage.setItem("token", res.data.token)
        console.log(res.data.message)
        toast.success(res.data.message)
        navigate("/")
       
      
    }catch(e){
      toast.error(e.response.data.message)
    }
 }
    return <div>


      <div className="min-h-full flex  p-10 bg-gray-50 dark:bg-gray-700 ">
        
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 lg:bg-white  ">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome to BookClub</h2>
            </div>

            <div className="mt-8">
                {/* <div className="mt-6 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
              </div> */}

              <div className="mt-4">
                <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        // id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                     />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        // id="email"
                        name="email"
                        type="email"
                        // autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        // id="password"
                        name="password"
                        type="password"
                        // autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                     />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                       Confirm Password
                    </label>
                    <div className="mt-1">
                      <input
                        // id="password"
                        name="password"
                        type="password"
                        // autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                     />
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        // id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div> */}
                     <input type="file" className="w-full"
                      onChange={(e)=> setInputs({...inputs,image:e.target.files[0]})} />

          <p className="text-sm text-gray-400">
            You already have an account?
            <Link to="/login" className="text-black font-bold">
               Login
            </Link>
          </p>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleOnSubmit}
                    >
                       Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover  "
            src="https://preview.pixlr.com/images/800wm/1210/1/1210100336.jpg"
            alt=""
          />
        </div>
      </div>
    

      </div>
 
}

export default SignUp;