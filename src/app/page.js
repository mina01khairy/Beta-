import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <div className="bg-[#EDF0FF] ">
        <div className="mx-6 py-10 ">
          <div className=" w-70 ">
            <div className="flex text- items-center gap-2 capitalize rounded-full bg-[#D8E2FF] px-4 py-2 text-[#0058be] font-semibold">
              <i className="fa-regular fa-circle-check"></i>
              AUTHORIZED DISTRIBUTOR
            </div>
          </div>

          <div className="font-inter text-6xl font-bold  mt-10">
            Wholesale Electronics for <br />
            <span className="text-[#0058be]">Modern Businesses</span>
          </div>

          <div className="font-inter text-2xl mb-10 text-gray-600 mt-10">
            Fast supply of tech devices and components in bulk. <br />
            Powering enterprise hardware needs with global logistics and precision engineering.
          </div>

          <Link href="/products" className="bg-[#0058be]  text-3xl text-white me-4 font-semibold py-3 px-6 rounded-xl  hover:bg-[#00449e]">
            View Products <i className="px-2 fa-solid fa-arrow-right"></i>
          </Link>



          <div className="flex gap-10 mt-10">
            <p className="grid font-inter text-2xl font-bold mt-10 border-e border-gray-400 pe-10">
              <span className="text-gray-600"> 500k+</span>
              <span className="text-gray-400 text-sm">UNITS SHIPPED</span>
            </p>

            <p className="grid font-inter text-2xl font-bold mt-10">
              <span className="text-gray-600"> 120k+</span>
              <span className="text-gray-400 text-sm ">GLOBAL PARTNERS</span>
            </p>
          </div>

        </div>
      </div>

      <div className="px-10 w-full text-center pt-10 bg-gray-100">
        <div className="uppercase" >
          Trusted by Global Industry Leaders
        </div>
        <div className="flex  flex-wrap justify-around gap-10 py-10">
          <div className="uppercase text-gray-500 italic text-5xl font-extrabold  ">
            samsung
          </div>
          <div className=" text-gray-500  text-5xl font-bold  ">
            Logitech
          </div> <div className=" text-gray-500  text-5xl font-bold  ">
            intel.
          </div> <div className="uppercase text-gray-500  text-5xl font-bold  ">
            DELL
          </div> <div className=" text-gray-500  text-5xl font-bold  ">
            Apple
          </div>
        </div>
      </div>


      <div className="mx-10">
        <h1 className="font-inter text-4xl font-bold  mt-15">
          Inventory Categories
        </h1>
        <h3 className="font-inter text-md text-gray-600 mt-5">
          Browse our high-capacity stock across critical tech sectors, ready for immediate international dispatch.
        </h3>

        <Link href="/products" className="flex items-center gap-2 text-[#0058be] font-bold w-full my-10 justify-end hover:underline">
          Explore Full Catalog <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-10 gap-y-10 bg-[#EDF0FF]">
        <div className="px-5 col-span-1 rounded-xl ">
          <div className=" relative group rounded-xl p-5 bg-[#f7f8ff] shadow hover:shadow-xl transition-shadow duration-300">

            <div className="absolute top-8 right-8 justify-center z-10 text-[#0058be] bg-white p-3 rounded-xl">
              <i className="fa-solid fa-mobile-screen-button text-xl "></i>
            </div>

            <div className="overflow-hidden rounded-xl">
              <img className=" group-hover:scale-105 transition-transform duration-300 overflow-hidden  " src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQSyhGC5VI-cfNqGf1iQCVR0rEFnUgqYtSpA6fUA12ULUj23iEOli2pZvx4oHGV14iFb48GL16iguoJ2eaIyf4AxRpX5b5eEJciYtP2HksNuamttZa6w0HFVTE48SC2nHqR9Oy6ePP8tO3KFmBC9c2XyQ9byPdGQzAxX3UjxI8Cs6GtUG0Ov8BrzsJ-QleCDBYvrTlVZwlWp1dqJ0n31Tk_6IPkdr5eIRKV2BXe8J3-P_p1xqvfpvP_edD_elyz15_Ev1eCLvx3FVj" />
            </div>

            <div className="font-bold text-2xl mt-4">
              Smart phones
            </div>

            <div className="text-gray-600 text-md mt-2">
              Latest 5G flagship devices and enterprise-fleet handsets.
            </div>

          </div>
        </div>

        <div className="px-5 col-span-1 rounded-xl ">
          <div className=" relative group rounded-xl p-5 bg-[#f7f8ff] shadow hover:shadow-xl transition-shadow duration-300">

            <div className="absolute top-8 right-8 justify-center z-10 text-[#0058be] bg-white p-3 rounded-xl">
              <i className="fa-solid fa-laptop text-xl "></i>
            </div>

            <div className="overflow-hidden rounded-xl">
              <img className=" group-hover:scale-105 transition-transform duration-300 overflow-hidden  " src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4SKGE9MceFRGVVFW-hdrSrE4_D50nV2TrniBySf8vQ5CXPT_UB-Fzg9fEs5hN0RU3eBccjV10LLVAZym-tyakmyEvR3tm0qdoJ-e29Mknfa0m9m_ADBGwn0F9oJYXXU1Di32gjPiDZCYIPFyZCO5hg9vbHwOsILs2v2ARV41K-x0LgMn9P9uUuo2cNI6EhkErZkMzEVAWbqgfwJL5o3QzZvF9jMvriEQpGF4qFW9dDTJ2lDc9on2aFyqez4OyDkOhMPy-ZiuOp6eo" />
            </div>

            <div className="font-bold text-2xl mt-4">
              Laptops
            </div>

            <div className="text-gray-600 text-md mt-2">
              Workstations, ultrabooks, and bulk educational devices.
            </div>

          </div>
        </div>

        <div className="px-5 col-span-1 rounded-xl ">
          <div className=" relative group rounded-xl p-5 bg-[#f7f8ff] shadow hover:shadow-xl transition-shadow duration-300">

            <div className="absolute top-8 right-8 justify-center z-10 text-[#0058be] bg-white p-3 rounded-xl">
              <i className="fa-solid fa-headphones text-xl "></i>
            </div>

            <div className="overflow-hidden rounded-xl">
              <img className=" group-hover:scale-105 transition-transform duration-300 overflow-hidden  " src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD5Jw3XuEx_fIf_TFrpEKyd2ev70aZ0QDfQsYq55wc944jIg88fJ-17XsyJwoKfEkwie0GZawpLJgwW5tXVMRkia-Foieu5gSraHCQWc3aiGHta-Rl3WpDuHa2gWJq0PKLC_QfoD50p_sdDt2z5nAF99_jCg3OsQd-OHvLshm9D0S4kdaLbigcLrBC39xBh8PCWj9t4GliuO1ObLElIQbwtjE8W3uxz7fHf9-JJ1UyVqmV7UtnFiJjw9w02M90Uh9xscqTkkniIf_j" />
            </div>

            <div className="font-bold text-2xl mt-4">
              Accessories
            </div>

            <div className="text-gray-600 text-md mt-2">
              Audio, peripherals, and high-speed networking cables.
            </div>
          </div>
        </div>

        <div className="px-5 col-span-1 rounded-xl ">
          <div className=" relative group rounded-xl p-5 bg-[#f7f8ff] shadow hover:shadow-xl transition-shadow duration-300">

            <div className="absolute top-8 right-8 justify-center z-10 text-[#0058be] bg-white p-3 rounded-xl">
              <i className="fa-solid fa-microchip text-xl "></i>
            </div>

            <div className="overflow-hidden rounded-xl">
              <img className=" group-hover:scale-105 transition-transform duration-300 overflow-hidden  " src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvS5EDYHAU-At3EO0kD9v8pvHA1RsUmAghMh3OFnGXaicU6EEICeYXRkrnOvsooT7yruuOpgjCSZYDwgSpy2Czbca6IwMymTB6CIGd44N3RnvM_cCPAmr-kbxNnwL76ow-VPWjG2Tnz3dQG82GHi7wy0jkg_0WwiLmNtAGjmuxKYZ0SPAjYlQ8uC9_hVokHisvyavb3cu8f2lwpojJ-RY-OvjpWDl9Bbo502taZrg7TCliYHvJRs3t1EIG2NlPMdih5RzptsvMMqkx" />
            </div>

            <div className="font-bold text-2xl mt-4">
              Components
            </div>

            <div className="text-gray-600 text-md mt-2">
              Processors, GPUs, RAM, and essential internal hardware.
            </div>

          </div>
        </div>
      </div>


      <div className="bg-black pt-20 pb-20 text-white px-8">
        <div>
          <div className="bg-[#0F172A] w-15 h-15 rounded-xl flex items-center justify-center">
            <i className="fa-solid fa-earth-americas text-2xl text-[#F8FAFC]"></i>
          </div>

          <div className="font-inter text-2xl font-bold my-5">
            Fast Global Shipping
          </div>

          <div className="text-gray-400 text-md ">
            Strategic logistics hubs in 12 countries ensure your bulk orders arrive in record time via premium carriers.
          </div>

          <div className=" mt-5">
            <i className="fa-regular fa-circle-check me-2"></i>
            <span className="text-gray-400" >48h Dispatch Guarantee</span>


          </div>

          <div className=" mt-2">
            <i className="fa-regular fa-circle-check me-2"></i>
            <span className="text-gray-400" >Real-time Bulk Tracking</span>


          </div>

        </div>

        <div>
          <div className="bg-[#0F172A] w-15 h-15 rounded-xl flex items-center justify-center mt-10">
            <i className="fa-regular fa-credit-card text-2xl text-[#F8FAFC]"></i>
          </div>

          <div className="font-inter text-2xl font-bold my-5">
            Competitive Bulk Pricing
          </div>

          <div className="text-gray-400 text-md ">
            Tiered pricing structures designed for resellers and enterprise buyers. The more you buy, the more you save.
          </div>

          <div className=" mt-5">
            <i className="fa-regular fa-circle-check me-2"></i>
            <span className="text-gray-400" >Direct Manufacturer Pricing</span>
          </div>

          <div className=" mt-2">
            <i className="fa-regular fa-circle-check me-2"></i>
            <span className="text-gray-400" >  Credit Lines for Partners</span>
          </div>

        </div>

        <div>
          <div className="bg-[#0F172A] w-15 h-15 rounded-xl flex items-center justify-center mt-10">
            <i className="fa-solid fa-shield relative text-2xl text-[#F8FAFC]">
              <i className="fa-solid fa-check absolute top-[20%] left-[22%] text-sm  text-[#0F172A] "></i>
            </i>
          </div>

          <div className="font-inter text-2xl font-bold my-5">
            Verified Quality Products
          </div>

          <div className="text-gray-400 text-md ">
            Every single unit undergoes a 12-point inspection in our QA facilities before being cleared for shipment.
          </div>

          <div className=" mt-5">
            <i className="fa-regular fa-circle-check me-2 "></i>
            <span className="text-gray-400" >ISO Certified Facilities</span>
          </div>

          <div className=" mt-2">
            <i className="fa-regular fa-circle-check me-2 "></i>
            <span className="text-gray-400" >Comprehensive Warranty</span>
          </div>

        </div>

      </div>

      <div className="py-32 px-7 bg-[#f5f7ff]">

        <div className="font-inter text-5xl font-bold mb-10">
          Scale Your Hardware Procurement
        </div>

        <div className="text-gray-600 text-xl mb-10">
          TechBulk Wholesale was founded on the principle of bridging the gap between massive manufacturing output and localized retail or enterprise demand.
        </div>

        <div className="text-gray-600 text-xl mb-10">
          We don't just move boxes; we manage complex global logistics for the world's most critical hardware. Our platform offers real-time API access to inventory levels, automated ordering, and dedicated account managers for every wholesale client.
        </div>

        <button className="bg-black text-3xl text-white me-4 font-semibold py-3 px-6 rounded-xl mt-10 hover:bg-[#171717]">
          our Mission <i className="fa-solid fa-city"></i>
        </button>



        <div className="grid grid-cols-2 mt-20 gap-5">
          <div className="col-span-1">
            <div className="h-45 rounded-2xl over ">
              <img className="rounded-2xl  w-full  object-cover h-full  mt-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7I0efvmYXepQagFgGUKdQ_2JrFNCglGVB8IIMGHNozqToxw8FpT0RO8KP-J69pCG1jTE2Lpua6s_L7FTwZpIwqsrPNo8wUeFgtvYvcjC-bLd1-h56UL1pu8bx4p6uimaBSr61FtL8_Y3ouFQyTCrzvPj8p1ZhEmWNfYcG4lFMc5Hf6sD_MyxJKAiN1ZDCFnuxQ3insOpVbPr3y-o6EUM4FrHS7xEEcfDBTaxwhAo3a4s1VvJgpA99OZayoKC9OM2HKzXxvOf-2BJn" alt="Mission Image" />
            </div>

            <div className="text-white bg-[#2573E6] rounded-2xl p-5 mt-6">
              <div className="font-inter text-2xl font-bold my-5">
                15+ Years
              </div>
              <div className=" text-md ">
                Experience in large-scale hardware distribution.
              </div>
            </div>
          </div>


          <div className="col-span-1 ">
            <div className="bg-gray-300 rounded-2xl">
              <div className="font-inter text-xl font-bold p-5">
                <i className="text-[#2573E6] text-4xl mb-2 fa-solid fa-atom"></i>
                Interconnected global supply chain with real-time inventory management.
              </div>
            </div>
            <div className="h-45 rounded-2xl over">
              <img className="rounded-2xl  w-full  object-cover h-full  mt-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgy53B5EtrL0rCPLUSi_--Zx2nll0XpK2u-fPzUZJxyxHDwA4JZYCVaYH08Ncyy45r8WZD1I1YLP2WbFyErrIFqSSKBrLAJLnzdlXzkqB5eIqHYplHI7HVJRsyw0OepkmHm-IMlWLOdOzcr3nWBjV_nbzRRmthgfoVTOab_FjsxmTo74GHzue2Be9pC7iuu2Vg-o9kjWFvLfRgnexl8Xy1wL0tYcbFnPdty7nb5kXWyJkPSb7qNh4ACz-eyjEUGRHnlIEGS89B_mwf" alt="Mission Image" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f7ff] py-20 px-7">
        <div className="bg-linear-to-t rounded-4xl from-[#001A42] to-[#004395] text-white py-15 px-10">
          <div className="font-inter text-5xl text-center font-bold mb-10">
            Ready to optimize your supply chain?
          </div>
          <p className="text-lg text-center text-gray-300">
            Join over 5,000 businesses sourcing high-grade electronics directly from our global hubs. Get your quote in under 4 hours.
          </p>
          <div className="flex-wrap items-center justify-center mt-10">
            <Link href="/products">
              <button className="bg-[#035dcc]  text-2xl hover:scale-105 duration-75 text-white shadow-2xl  hover:shadow-[#035dcc] hover:bg-[#0056bf] font-bold py-6 px-10 rounded-2xl">
                Start
              </button>
            </Link>

            <li className="list-none mt-10">
              <Link href="/contact" className="bg-gray-800 border border-gray-500 text-2xl mt-7 text-white hover:bg-gray-700 font-bold py-6 px-5 rounded-2xl">
                Talk to an Expert
              </Link>
            </li>
          </div>
        </div>
      </div>

      <div className="bg-black  text-white pt-20 px-7">
        <div className="font-inter text-2xl font-bold mb-10">
          TechBulk Wholesale
        </div>
        <div className="text-gray-400 text-md mb-10">
          Professional grade logistics for high-volume electronics distribution.
        </div>
        <div className="flex gap-5">
          <div className="border rounded-full p-2 border-gray-800 hover:border-gray-300">
            <i className=" fa-solid fa-earth-americas"></i>
          </div>
          <div className="border rounded-full p-2 border-gray-800 hover:border-gray-300">
            <i className=" fa-solid fa-at"></i>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-10 gap-x-5'>

          <div>
            <div className="font-inter text-2xl font-bold my-5">
              Solutions
            </div>

            <div className="text-gray-400 text-md mb-2">
              Enterprise Procurement
            </div>

            <div className="text-gray-400 text-md mb-2">
              Retail Supply Chain
            </div>

            <div className="text-gray-400 text-md mb-2">
              Educational Bulk
            </div>

            <div className="text-gray-400 text-md mb-2">
              Refurbished Stock
            </div>

          </div>

          <div>
            <div className="font-inter text-2xl font-bold my-5">
              Quick Links
            </div>

            <div className="text-gray-400 text-md mb-2">
              Shipping Policy
            </div>

            <div className="text-gray-400 text-md mb-2">
              Quality Assurance
            </div>

            <div className="text-gray-400 text-md mb-2">
              Contact Support
            </div>

            <div className="text-gray-400 text-md mb-2">
              Terms of Service
            </div>

          </div>

          <div>
            <div className="font-inter text-2xl font-bold my-5">
              Newsletter
            </div>

            <div className="text-gray-400 text-md mb-2">
              Get monthly inventory updates and bulk deal alerts.
            </div>

          </div>
        </div>

        <div className="text-gray-500 pb-7 text-md mt-20 text-center">
          © 2024 TechBulk Wholesale. Professional Grade Logistics. All rights reserved.
        </div>
      </div>



    </>
  );
}


