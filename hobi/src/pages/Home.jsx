import { useState } from 'react';

import Navbar from '../components/NavBar';
import SideBar from '../components/Sidebar';
import ListChat from '../components/ListChat';
import ListPost from '../components/ListPost';


export default function Home() {



  return (
    <div className="bg-gray-100 min-h-screen flex flex-col gap-10">

      <Navbar/>

      <div className="max-w-7xl px-4 py-20 pt-16 mt-10 flex-1 flex gap-20"> {/* mx-auto */}
        <ListChat/>
        <div className="flex-2 px-4">
          <div className="grid grid-cols-1 gap-4">

            <ListPost/>

          </div>
        </div>
        
      </div>
    </div >
  );
}

