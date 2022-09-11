import {useEffect, useState} from "react";
import{useParams} from "react-router-dom";
import axios from "axios";


function ReadSummery() {
  const {id} = useParams();
  const [book, setBook]= useState({
    User:{}
  });
  useEffect(()=>{
    axios.get(`http://localhost:8000/book/${id}`)
    .then((res)=>setBook(res.data.book));
  });
    return (
      <div>
      <div className="p-10 flex space-x-5 bg-gray-100 ">
        <div className="w-4/5 bg-white drop shadow-md rounded-md">
            <div className="p-6 ">
                <div className="flex flex-col">
                <h1 className="font-bold text-lg "> {book.title}</h1>
                <p className="gray-50 text-sm text-slate-600">{book.author}</p>
            </div>
            <div className="mt-4">
               <p>{book.content}</p>

              
        </div>      
         
            </div>

         

         </div>
        <div className="w-2/5 h-80 flex bg-white p-5 rounded-md space-x-6">
          <div className=" ">
          <img class="object-cover h-60 rounded-md shadow-lg"  
            src={`http://localhost:8000/${book.image}`} alt="" />
           <h2 className="p-2 font-bold ">{book.title}</h2>
        </div>
        <div>
        <div class="flex items-center flex-col">
           
           <div class="flex items-center space-x-4">
             <img class="w-10 h-10 rounded-full" src={`http://localhost:8000/${book.User.image}`}alt=""/>
             <div class="font-medium ">
               <div>{book.User.name}</div>
               <div class="text-sm text-gray-500 dark:text-gray-400">{book.User.email}</div>
             </div>
           </div>

          
        <div className="flex mt-3">
          <p>Rating:</p>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  
        
           </div>
           <div>

           <p>Language: English</p>
           <p>puplished: 9/10/2022</p>
           </div>
        </div>
        </div>
        </div>
      </div>
      
      <div>
   {/* <div class="mb-4 w-1/2 rounded-lg border border-gray-200  dark:border-gray-600">
       <div class="py-2 px-4 rounded-t-lg ">
           <label for="comment" class="sr-only">Your comment</label>
           <textarea id="comment" rows="4" class="px-0 w-full text-sm text-gray-900 bg-white   focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required=""></textarea>
       </div>
       <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
           <button type="submit" class="inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </button>
          
   </div>
</div> */}
</div>
  </div>
    );
  }
  
  export default ReadSummery;
  