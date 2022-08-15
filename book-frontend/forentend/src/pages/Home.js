
import Bookcard from "../Componants/Bookcard";
function Home() {
    return (
		<div>
<div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Expand Knowledge by reading
				<span className="dark:text-violet-400"> books</span> 
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Reading is important because it develops your mind and gives you excessive knowledge and lessons of life </p>
				{/* <p className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem </p>
			</p> */}
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:dark:bg-violet-400 fade-aute">Explore</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-xl">
			<img src="https://img.freepik.com/free-vector/book-readers-concept_74855-6263.jpg?w=826&t=st=1660466734~exp=1660467334~hmac=f7edf44d1624bcb13f39e605b083ed673896391a2cccc04ed156d09ffcd7c5ba" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</div>

 <div className="p-5 bg-gray-100">
 <div className="flex justify-between items-center ">
	<div className="mx-auto flex sm:justify-center">
	 <div className=" flex justify-center items-center flex-col mt-10">
		<h1 className="font-bold text-2xl">Popular Book Summeries</h1>
	     <p>
	       Below, you'll find the best books the Insider Reviews team has read so far.<br/>
		  
	    </p>
	 </div>
	
	</div>
   
	 <div className="flex items-center">
	   <h3>View All</h3>
	  
	 </div>
  
 </div>
 <div className=" ">
  <div className=" flex justify-center items-center  space-x-4 mt-7 mb-5 flex-wrap ">
     <Bookcard  />
	 <Bookcard  />
	 <Bookcard  />
	 <Bookcard  />
	 <Bookcard  />
  </div>
	
  
 </div>
</div>
</div>
    )
        
    
}
export default Home;