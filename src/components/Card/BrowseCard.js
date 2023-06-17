import { useState } from "react"
import Link from "next/link"
import Tippy from "@/components/Tippy"

export default function BrowseMangaCard() {

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

      <Link href={`/manga/test`}>
        <div className="cursor-pointer flex flex-col group">
          <div className="flex w-full h-full">
            <img loading="lazy" src="https://www.mangaread.org/wp-content/uploads/2022/12/Read-Manhwa-6-193x278.jpg" alt="anime_image" width={300} height={300} className="w-[300px] h-[260px] object-cover rounded-lg group-hover:opacity-50 button-animate" />
          </div>
          <div className="mt-3">
            <p className="font-medium text-[16px] text-white capitalize line-clamp-1">I Picked A Hammer To Save The World</p>
            <p className="font-medium text-zinc-300 text-sm">10 Chapter</p>
          </div>
        </div>
      </Link>
    </Tippy>
  )
}