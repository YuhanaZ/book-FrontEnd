/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from '@heroicons/react/solid'

export default function Feature({book}) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">SAMPLE SUMMERY</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
             {book.title}

            </h3>
            <div class="flex items-center space-x-4 pt-4">
              <img class="w-10 h-10 rounded-full" src={`http://localhost:8000/${book.User.image}`}alt=""/> 
             <div class="font-medium ">
               <div>{book.User.name}</div> 
              <div class="text-sm text-gray-500 dark:text-gray-400">{book.User.email}</div>
             </div>
           </div>
          </div>
         
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2 ">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none ">
              <figure>
                <div className="aspect-w-10 aspect-h-4 lg:aspect-none flex justify-center ">
                  <img
                    className="rounded-md shadow-lg  object-center h-full"
                  src={`http://localhost:8000/${book.image}`}
                    alt="img"
                    // width={1184}
                    // height={1376}
                  />
                </div>
                
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            {/* <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi.
              </p>
            </div> */}
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                {book.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
