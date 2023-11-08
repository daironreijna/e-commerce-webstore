import React from 'react';

function Footer() {
  return (
        <footer
          className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
          
          {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* <!-- Elements section --> */}
              <div className="">
                <h6
                  className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-4 w-4">
                    <path
                      d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                  </svg>
                  About Us
                </h6>
                <p>
                  DAAK! The ecommerce webpage you can trust!
                  </p> 
                <br/>
                  <p>
                  Our shopping page has been offering customers the best choices at unbeatable prices. 
                  The brands we have on offer are of the highest quality with products built to last. 
                  Browse through our vast selection today.
                  
                </p>
              </div>
              {/* <!-- Products section --> */}
              <div className="">
                <h6
                  className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Powered By
                </h6>
                <p className="mb-4">
                  <a className="text-neutral-600 dark:text-neutral-200"
                  >React</a>
                </p>
                <p className="mb-4">
                  <a className="text-neutral-600 dark:text-neutral-200"
                  >Vite</a>
                </p>
                <p className="mb-4">
                  <a className="text-neutral-600 dark:text-neutral-200"
                  >Tailwind</a>
                </p>
             
              </div>
              {/* <!-- Useful links section --> */}
              <div className="">
                <h6
                  className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Useful links
                </h6>
                <p className="mb-4">
                  <a className="text-neutral-600 dark:text-neutral-200"
                  >Github </a>
                </p>
                <p className="mb-4">
                  <a className="text-neutral-600 dark:text-neutral-200"
                  >Netlify</a>
                </p>
            
              </div>
              {/* <!-- Contact section --> */}
              <div>
                <h6
                  className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Contact
                </h6>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  West Midlands, GB
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  smartshopper@daak.com
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd" />
                  </svg>
                  + 44 234 567 88
                </p>
                
              </div>
            </div>
          </div>
    
          {/* <!--Copyright section--> */}
          <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
            <span>© 2023 Copyright: </span>
            <a
              className="font-semibold text-neutral-600 dark:text-neutral-400"
              href="https://tailwind-elements.com/"
            > DAAK! Smart Shopper</a>
          </div>
        
    

    </footer>
  );
}

export default Footer;





// ***********

// import  {
//   Card,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
// } from 'react';

// function Footer() {
//   return (
//      <Card color="transparent" shadow={false}>
//       <Typography variant="h4" color="blue-gray">
//         Sign Up
//       </Typography>
//       <Typography color="gray" className="mt-1 font-normal">
//         Nice to meet you! Enter your details to register.
//       </Typography>
//       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//         <div className="mb-1 flex flex-col gap-6">
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Your Name
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="name@mail.com"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Your Email
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="name@mail.com"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Password
//           </Typography>
//           <Input
//             type="password"
//             size="lg"
//             placeholder="********"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//           />
//         </div>
//         <Checkbox
//           label={
//             <Typography
//               variant="small"
//               color="gray"
//               className="flex items-center font-normal"
//             >
//               I agree the
//               <a
//                 href="#"
//                 className="font-medium transition-colors hover:text-gray-900"
//               >
//                 &nbsp;Terms and Conditions
//               </a>
//             </Typography>
//           }
//           containerProps={{ className: "-ml-2.5" }}
//         />
//         <Button className="mt-6" fullWidth>
//           sign up
//         </Button>
//         <Typography color="gray" className="mt-4 text-center font-normal">
//           Already have an account?{" "}
//           <a href="#" className="font-medium text-gray-900">
//             Sign In
//           </a>
//         </Typography>
//       </form>
//     </Card>
//   );
// }