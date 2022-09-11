import { Link, useNavigate} from "react-router-dom";
import {useState} from "react"
import axios from "axios";
import { toast } from "react-toastify";
import {useContext} from "react";
import {UserContext} from "../Utils/userContext";
function Login() {
  
   const [inputs, setInputs] = useState()
   const navigate = useNavigate();
   const {setUser} = useContext(UserContext)

   
   async function handleOnSubmit(){
    try{
     const res = await axios.post (
          "http://localhost:8000/user/login", inputs
        );
       toast.success(res.data.message)
       localStorage.setItem("token", res.data.token)
       navigate("/")
       setUser(true)
    }catch(e){
      toast.error(e.response.data.message)

    }
  
  }
  
  return  (
    <div class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <div class="space-y-4 md:space-y-6" >
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input 
                      type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                      onChange={(e)=> setInputs({...inputs,email:e.target.value})}
                      
                      />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                      onChange={(e)=> setInputs({...inputs,password:e.target.value})}
                      
                      />
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                     
                  </div>

                  <button type="button"
                     className=" w-full inline-flex items-center  justify-center px-2.5 py-2.5 border border-transparent  font-medium rounded  shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     onClick={handleOnSubmit} >
                     Login
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?
                      <Link to="/signup">
                      <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</a>
                      </Link>
                      
                  </p>
              </div>
          </div>
      </div>
  </div>
</div>
  )

}
 

export default Login;
