import React from 'react'
import MyListItems from './myListItems';
import AccountSidebar from '../../components/AccountSidebar';




const MyList = () => {


  return (
    <section className="py-10 w-full">
        <div className="container flex gap-5">
            <div className="col1 w-[20%]">
                <AccountSidebar/>
            </div>

            <div className="col2 w-[70%]">
                 <div className="shadow-md rounded-md bg-black">
                <div className="py-2 px-3 border-b border-[#121212]">
                    <h2 className='text-[#917108]'>My List</h2>
                    <p className="mt-0 text-[#c5a059]">There are <span className="font-bold text-[#ff5252]">2</span> products in your My List</p>
                </div>

               <MyListItems />
               <MyListItems />
               <MyListItems />
               <MyListItems />
            </div>
            </div>
        </div>
    </section>
  )
}


export default MyList;