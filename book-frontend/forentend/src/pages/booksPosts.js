import Bookcard from "../Componants/Bookcard"
import { useEffect, useState } from "react"
  import axios from "axios"
  import { SearchIcon } from '@heroicons/react/solid'
  export default function BookPosts() {
    const [loading, setLoading] = useState(false);
    // const[posts, setPosts] = useState([]);
    const [search, setSearch] = useState("")
    
    const[books,setBooks] = useState({
      found:null,
      books:[],
    })
    useEffect(() =>{
      // setLoading(true)
      axios.get("http://localhost:8000/book").then((res)=>setBooks(res.data))
  
    }, []);
    return (
        <div className="pt-14">

       
      <div className="relative pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8 ">
      <div className=" ">
 <div className="flex justify-between items-center mx-24">
	<div className="mx-auto flex sm:justify-center">
	 <div className=" flex justify-center items-center flex-col ">
   <div className="flex-1 flex items-center justify-center px-2 lg:ml-6  md:items-center md:justify-center  w-full">
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
		<h1 className="font-bold text-3xl pb-2">Popular Book Summeries</h1>
	     <p>
	       Below, you'll find the best books the Insider Reviews team has read so far.<br/>
		  
	    </p>
	 </div>
	
	</div>
   
	 
  
 </div>
 <div className=" flex justify-center items-center">
  <div className=" flex justify-center items-center  space-x-6 space-y-2 mt-7 mb-5 flex-wrap w-3/4 bg-gray-200  pt-2 rounded-md">
	{ loading ? (
    <h4>loading....</h4>
  ): (
    books.books.filter((value)=>{
      if(search == ""){
        return value
      }else if (value.title.toLowerCase().includes(search.toLowerCase())){
        return value
      }
    }).map((book)=>(
      <Bookcard  book={book} />
     ))
  )
   }
     
	
	 
  </div>
	
  
 </div>
 <div className="">
  
 </div>
 
</div>
      </div>
      </div>
    )
  }
  