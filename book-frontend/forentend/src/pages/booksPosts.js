import Bookcard from "../Componants/Bookcard"
import { useEffect, useState } from "react"
  import axios from "axios"
  import { SearchIcon } from '@heroicons/react/solid'
  export default function BookPosts() {
    const [loading, setLoading] = useState(true);
    // const[posts, setPosts] = useState([]);
    const [search, setSearch] = useState("")
    
    const[books,setBooks] = useState({
      found:null,
      books:[],
    })
    useEffect(() =>{
      
      axios.get("http://localhost:8000/book").then((res)=>setBooks(res.data));
      // setLoading(false)
    }, []);
    return (
        <div className="pt-14  bg-gray-50 dark:bg-gray-800">

       
      <div className="relative pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8 ">
      <div className=" ">
 <div className="flex justify-between items-center mx-24">
	<div className="mx-auto flex sm:justify-center">
	 <div className=" flex justify-center items-center flex-col  ">
   <div className="flex-1 flex items-center justify-center px-2 lg:ml-6  md:items-center md:justify-center  w-full lg:w-full">
                <div className="max-w-lg w-full lg:max-w-xs">
                  {/* <label className="sr-only">
                    Search
                  </label> */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 my-4 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      onChange={(e)=>setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
		<h1 className="font-bold text-3xl pb-2 dark:text-white">Popular Book Summeries</h1>
	     <p className="dark:text-white">
	       Below, you'll find the best books the Insider Reviews team has read so far.<br/>
		  
	    </p>
	 </div>
	
	</div>
   
	 
  
 </div>
 <div className=" flex justify-center items-center">
  <div className=" flex justify-center items-center  space-x-6 space-y-2 mt-7 mb-5 flex-wrap w-3/4  pt-2 rounded-md ">
	{ loading ? ( books.books.filter((value)=>{
      if(search == ""){
        return value
      }else if (value.title.toLowerCase().includes(search.toLowerCase())){
        return value
      }
    }).map((book)=>(
      <Bookcard  book={book} />
     ))
      ): ( 
        
        <div class="text-center">
        <div role="status">
            <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
        </div>
        
  )};
     
	
	 
  </div>
	
  
 </div>
 <div className="">
  
 </div>
 
</div>
      </div>
      </div>
    )
  }
  