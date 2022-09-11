import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function PostsList(){
   
 const [posts, setPosts] = useState([])
   useEffect(() => {
    const token= localStorage.getItem("token");

    axios.get("http://localhost:8000/book/usersPosts",{
        headers:{
            authorization: token,
            },
}).then((res)=>setPosts(res.data.books))
})

async function handleOnDelete(id){
await axios.delete(`http://localhost:8000/book/${id}`)
}
    return (
        <div className=" bg-slate-600 h-screen ">
    <div className="flex justify-center">
     <div class="overflow-x-auto relative shadow-md sm:rounded-lg w-3/4 my-10 rounded-lg ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 z-10">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        <Link to="/admin/postlist/write">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Make summery</button>
        
                </Link>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Book name
                </th>
                <th scope="col" class="py-3 px-6">
                   Summerized by
                </th>
                
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                </th>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Delete</span>
                </th>
            </tr>
        </thead>
       
        <tbody>
       {posts.map((post)=>(
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
         
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {post.title}  
                </th>
                <td class="py-4 px-6">
                   {post.author}  
                </td>
                <td class="py-4 px-6 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={()=>handleOnDelete(post._id)}
                    >Delete</a>
                </td>
                <Link to={`/admin/postlist/edit/${post._id}`}>	
                <td class="py-4 px-6 text-right">
                    
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                   
                </td>
                </Link>
            </tr>
      ))}
        </tbody>
       
    </table>
</div>
</div>
</div>
    )
    
}
export default PostsList;