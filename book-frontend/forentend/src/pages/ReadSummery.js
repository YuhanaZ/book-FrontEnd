import {useEffect, useState} from "react";
import{useParams, Link} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import date from 'date-and-time';

function ReadSummery() {
 
  const [inputComment, setInputComment] = useState({})
  const {id} = useParams()
  async function submitComment(event){
//submit comment

    const token= localStorage.getItem("token");
   try{
      const res= await axios.post (
            `http://localhost:8000/comment/createComment/${id}`, inputComment,
            {
              headers: {
                authorization: token,
                },
            })
         
         toast.success(res.data.message)
         event.preventDefault(); 

         // 👇️ clear all input values in the form
        
         setInputComment({});
      }catch(e){
        toast.error(e.response.data.message)
  console.log(e)
      }
    
    }
  
 
 //get book
  const [book, setBook]= useState({
    User:{}
  });
  useEffect(()=>{
    axios.get(`http://localhost:8000/book/${id}`)
    .then((res)=>setBook(res.data.book));
  });
  //latest books
  const[books,setBooks] = useState([])
  useEffect(() =>{
  axios.get("http://localhost:8000/book/").then((res)=>{setBooks(res.data.books.slice(-5))
  // setLoading(true)

})
  }, []);


  //get comment 
  const [comment, setComment]= useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8000/comment/${id}`)
    .then((res)=>{setComment(res.data.comments)
    console.log(res.data.comments)});
  },[]);
  
    return (
      <div className="dark:bg-gray-500 ">
      <div>
      <div className="p-10 flex space-x-10">
         {/* content */}
        <div className="w-3/5 bg-white lg:h-288 border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 rounded-md  sm:flex-1 overscroll-contain">
         
            <div className="p-6 ">
                <div className="flex flex-col">
                <h1 className="font-bold text-lg text-gray-900 dark:text-white  "> {book.title}</h1>
                <p className="gray-50 text-sm text-sltext-gray-900 dark:text-white ate-600">{book.author}</p>
            </div>
            <div className="mt-4  text-lg text-gray-900 dark:text-white max-h-screen overflow-y-auto">
               <p className="overscroll-contain" >{book.content}</p>  
            </div>      
          </div>
        </div>
          {/* end of content */}

          {/* book description */}
          <div className="hidden lg:flex bg-green rounded-md space-y-6 lg:flex-col  " >

         
        <div className=" w-full flex bg-white  rounded-md space-x-6 border shadow-md mt-0 p-6 dark:bg-gray-800 dark:border-gray-700">
          <div className=" w-1/2  flex-1">
            <img class="object-cover h-60 rounded-md shadow-lg  w-full"  
            src={`http://localhost:8000/${book.image}`} alt="" />
           <h2 className="p-2 font-bold text-gray-900 dark:text-white">{book.title}</h2>
          </div>

      
        <div class="flex items-center flex-col ">
           
           <div class=" flex items-center space-x-4">
             <img class="w-10 h-10 rounded-full" src={`http://localhost:8000/${book.User.image}`}alt=""/>
             <div class="text-gray-900 dark:text-white ">
               <div>{book.User.name}</div>
               <div class="text-sm text-gray-500 dark:text-gray-400">{book.User.email}</div>
               <hr class="my-1 w-30 h-1 bg-gray-200 rounded border-0 md:my-2 "/>
             </div>
           </div>
           
          
        <div className="flex mt-3 text-gray-900 dark:text-white">
          <p>Rating:</p>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  
        
           </div>
           <div>

           <p className="text-gray-900 dark:text-white">Language: English</p>
           <p className="text-gray-900 dark:text-white">Puplished: 9/10/2022</p>
           </div>
       
       
        </div>
        <div>
      
        </div>
        </div>
          {/* book description */}
     <div>
     <div class="p-4 w-full max-w-lg bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Posts</h5>
        <Link to="/posts">
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
        </Link>
   </div>
   <div class="flow-root">
    {
      books.map((book)=>(
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={`http://localhost:8000/${book.image}`} alt="Neil image"/>
                </div>
                <div class="flex-1 min-w-0">
                  {/* <Link to={`/read/${book._id}`}> */}
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {book.title}
                    </p>
                    {/* </Link> */}
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {book.User.name}
                    </p>
                    <hr class="mt-2 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
                </div>
                
            </div>
        </li>
  
    
     
    </ul>
      ))
    }
      
    
       
   </div>
</div>
   </div>

        </div>
       
      </div> 
  </div>
  <div>
    
<div>
  


    <label for="chat" class="sr-only">Your message</label>
    <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700 w-2/5  ml-8">
        <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Add emoji</span>
        </button>
        <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Comment..."
              onChange={(e)=> setInputComment({...inputComment, comment:e.target.value})}
        ></textarea>
            <button onClick={submitComment} type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            <span class="sr-only">Post Comment</span>
        </button>
    </div>
    {/* <!-- This is an example component --> */}
    <div class="antialiased mx-auto w-2/5  ml-8 py-4">
  <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

  <div class="space-y-3">
    {/* {comment.map((comm)=> (console.log(comm.createdAt.split("T")[1])))} */}
{
  comment.map((com)=>(
    
<div class="flex">
      <div class="flex-shrink-0 mr-3">
        <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={`http://localhost:8000/${com.User.image}`} alt=""/>
      </div>
      <div class="flex-1 dark:border dark:border-gray-700 rounded-lg px-4 py-1 sm:px-6 sm:py-1 leading-relaxed">
        <strong>{com.User.name}</strong> <span class="text-xs text-gray-400">{com.createdAt.split("T")[0]}</span>
        <p class="text-sm">
          {com.comment}
        </p>
       
      </div>
    </div>
  ))
}
    

    </div>
    </div>
   
</div>

  </div>
  </div>
    );
  }
  
  export default ReadSummery;
  