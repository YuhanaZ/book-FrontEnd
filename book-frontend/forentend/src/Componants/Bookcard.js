
function Bookcard () {
    return <div className="flex space-x-2">
       <div class="w-40 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        {/* Image */}
        <img class="object-cover rounded-xl h-25  rounded-md" 
        src="https://thestoryexchange.org/app/uploads/2022/06/fellowship-point.jpeg" alt="" />
        <div class="p-2">
        {/* Book name  */}
        <h2 class="font-bold text-lg mb-1 ">Atomic Habits</h2>
        {/* Author  */}
        <p class="text-sm text-gray-600 mt-0"> by James Clear </p>
        </div>
        {/*  btn  */}
        
      </div>
      
    </div>
       
    
}

export default Bookcard;