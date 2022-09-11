import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Componants/Header"; 
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import WriteSummery from "./pages/profile/WriteSummery";
import Feature from "./pages/Feature"
import ReadSummery from "./pages/ReadSummery";
import Test from "./pages/Footer"
import { useState, useEffect } from "react";
import {UserContext} from "./Utils/userContext";
import Protect from "./protect";
import BookPosts from "./pages/booksPosts";
import PostList from "./pages/profile/PostList";
import About from "./pages/About"
import Footer from "./pages/Footer"
import Profile from "./pages/profile/Profile"

function App() {
  const [user, setUser]= useState(false)
     const [loading, setLoading] = useState(true)
     
useEffect(()=>{
  const token =  localStorage.getItem('token');
  if (token){
    setUser(true);
    console.log("user is loged in")
  }
 
  setLoading(false);
 },[])
 if (loading) return <h1>loading ....</h1>
  return <UserContext.Provider value={{ user,setUser}}>
     <BrowserRouter>
      <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/feature" element={<Feature />} />
         <Route path="/posts" element={<BookPosts/>} />
         <Route path="/read/:id" element={<ReadSummery />} />
         <Route path="/test" element={<Test />} />
         <Route path="/book" element={<book />} />
         <Route path="/about" element={<About />} />
         <Route path="/footer" element={<Footer />} />
       





       <Route path="/admin" element={<Protect />} >
         <Route path="postlist" element={<PostList />} />
         <Route path="postlist/write" element={<WriteSummery />} />
         <Route path="postlist/edit/:id" element={<WriteSummery />} />
         <Route path="changePassword" element={<Profile />} />

       </Route>
   </Routes>
   <Footer/>
   <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
 </BrowserRouter>
 </UserContext.Provider>
 
}

export default App;
