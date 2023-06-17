import { useState, useEffect } from "react";
import { Transition } from '@headlessui/react'
import Tippy from "@/components/Tippy";

export default function MiniCard({ admin, item }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Tippy placement="right" content={
      <div className="p-2 w-full">
        <h3 className="line-clamp-1">I Picked A Hammer To Save The World</h3>
        <div id="genres" className="flex flex-wrap">
          <span className="text-xs bg-blue-400 rounded-full px-2 py-1 mr-2 mb-2">Action</span>
          <span className="text-xs bg-purple-400 rounded-full px-2 py-1 mr-2 mb-2">Adventure</span>
          <span className="text-xs bg-green-400 rounded-full px-2 py-1 mr-2 mb-2">Comedy</span>
        </div>
        <p className={`text-sm mt-3 italic transition duration-200 card-description-opacity opacity-100 line-clamp-6 overflow-auto`}>
          Tiny, who is in danger of dying after crushing the head of the 7th corps captain, Demonic Beast King, with the last blow. In a despaired situation where the destruction of mankind can’t be prevented, the only comrade who was still alive, the “Sword emperor,” uses the power of his family treasure to regress Tiny.
          <br />
          Tiny, who returned to being a slum orphan from being one of the continent’s best knights, now possesses strong potential by gaining new powers that he did not have in his previous life. Can he indeed prevent the fall of mankind in this life?

        </p>
      </div>
    }>
      <div className="w-full h-full flex" onMouseEnter={(event) => setIsHover(true)} onMouseLeave={(event) => setIsHover(false)} >
        <img style={{
          width: "58px",
          height: "80px"
        }} className="rounded-l-lg bg-cover object-cover" src={"https://www.mangaread.org/wp-content/uploads/2022/12/Read-Manhwa-6-193x278.jpg"} />

        <div className="bg-zinc-800/20 border-zinc-700/20 w-full min-h-full rounded-r-lg">
          <h1 className="ml-2 mt-4 w-[300px] line-clamp-1">I Picked A Hammer To Save The World</h1>
          <p className="ml-2 text-sm text-gray-400 bg-gray-800/20 rounded-full px-2 py-1 inline-block">
            <span className="rounded-full bg-green-500 w-2 h-2 inline-block mr-1"></span> Ongoing
          </p>
          <p className="ml-2 text-sm text-gray-400 bg-gray-800/20 rounded-full px-2 py-1 inline-block">
            <span className="rounded-full bg-gray-500 w-2 h-2 inline-block mr-1"></span> 52 Chapter
          </p>
          <p className="ml-2 text-sm text-gray-400 bg-gray-800/20 rounded-full px-2 py-1 inline-block">
            <span className="rounded-full bg-blue-500 w-2 h-2 inline-block mr-1"></span> Manhwa
          </p>
        </div>

      </div>
    </Tippy>
  )
}