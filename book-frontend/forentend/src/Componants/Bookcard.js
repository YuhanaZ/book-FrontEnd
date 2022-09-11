import {Link} from "react-router-dom"
function Bookcard ({book}) {
    return <div className="flex space-x-2">
      <Link to ={`/read/${book._id}`} >
       <div className="w-40 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl break-normal">
        {/* Image */}
        <img className="object-cover  h-25 w-15  rounded-md" 
        src={`http://localhost:8000/${book.image}`} alt="image" />
        <div className="p-2">
        {/* Book name  */}
        <h2 className="font-bold text-md mb-1 ">{book.title}</h2>
        {/* Author  */}
        <p className="text-sm text-gray-600 mt-0"> {book.author} </p>
        </div>
        {/*  btn  */}
        
      </div>
      </Link>
    </div>
  
    
}

export default Bookcard;