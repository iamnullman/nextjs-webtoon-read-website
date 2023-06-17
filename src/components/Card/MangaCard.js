import { useState } from "react"
import Link from "next/link"

export default function MangaCard() {

    return (
        <>
            <div className="lg:w-full w-[420px] h-full flex">
                <div className="card-image">
                    <img className="cursor-pointer h-[250px] lg:w-[175px] w-[100px] object-cover rounded-b-lg rounded-l-lg rounded-r-none" src="https://www.mangaread.org/wp-content/uploads/2022/12/Read-Manhwa-6-193x278.jpg" />
                </div>
                <div className="bg-zinc-800/20 border-zinc-700/20 flex h-[250px] lg:w-[500px] w-[250px] rounded-lg">
                    <div className="overflow-hidden">
                        <div className="h-[205px] relative">
                            <div id="info" className="relative ml-3 overflow-hidden">
                                <div id="content">
                                    <div className="card-info transition duration-300 w-full">
                                        <div className="card-info-item overflow-hidden flex flex-col w-full">
                                            <div className="card-info-item-title">
                                                <h1 className="ml-2 mt-4 font-semibold text-2xl line-clamp-1">I Picked A Hammer To Save The World</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-x-hidden overflow-y-auto h-[190px]">
                                    <p className={`px-4 text-sm mt-3 italic -ml-2 mb-2 transition duration-200 card-description-opacity opacity-100 line-clamp-6 overflow-auto`}>
                                        Tiny, who is in danger of dying after crushing the head of the 7th corps captain, Demonic Beast King, with the last blow. In a despaired situation where the destruction of mankind can’t be prevented, the only comrade who was still alive, the “Sword emperor,” uses the power of his family treasure to regress Tiny.
                                        <br />
                                        Tiny, who returned to being a slum orphan from being one of the continent’s best knights, now possesses strong potential by gaining new powers that he did not have in his previous life. Can he indeed prevent the fall of mankind in this life?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-700/10 h-11 rounded-r-lg rounded-t-none">
                            <div className="flex flex-row w-full justify-between items-center px-2">
                                <p className="text-sm text-gray-400 inline-block py-4 p-2">
                                    <span className="rounded-full bg-green-500 w-2 h-2 inline-block mr-1"></span> Ongoing
                                </p>
                                <p className="text-sm text-gray-400 inline-block p-2">
                                    <span className="rounded-full bg-gray-500 w-2 h-2 inline-block mr-1"></span> 52 Chapter
                                </p>
                                <p className="text-sm text-gray-400 inline-block p-2">
                                    <span className="rounded-full bg-blue-500 w-2 h-2 inline-block mr-1"></span> Manhwa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}