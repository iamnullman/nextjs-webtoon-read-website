import { NextSeo } from 'next-seo';
import MiniCard from "@/components/Card/Mini"
import { useEffect, useState } from "react";
import MangaCard from "@/components/Card/MangaCard";
import Tippy from '@tippyjs/react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BrowseMangaCard from '@/components/Card/BrowseCard';

export default function Home() {

    return (
        <>
            <NextSeo title={"All Series"} />
            <div className="lg:px-24 mx-auto justify-center lg:mt-8 pt-10">
                <div className="browse-banner bg-zinc-700/20 rounded-lg">
                    <img id="image" src="/banner.jpg" className="button-animate browse-image" />
                    <div id="black" className="bg-gradient-to-tr from-zinc-900/20 to-black browse-black"></div>
                    <div id="body" className="relative items-center text-center flex mx-auto justify-center">
                        <div className="flex flex-col mt-16">
                            <h1 className="text-white text-2xl font-semibold">All our series</h1>
                            <p className="text-gray-100 text-md">You can see all our translated series in alphabetical order here.</p>
                        </div>
                    </div>
                </div>
                <div className="body mt-4 flex flew-row space-x-4">
                    <div className="w-full">
                        <div id="body" className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-7 gap-4 p-4">
                             {Array.from(Array(18).keys()).map((d) => {
                                return (
                                    <BrowseMangaCard/>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="mx-auto justify-center flex space-x-4">
                    <div className="flex space-x-4 lg:mt-0 mt-2">
                        <Tippy content="Previous Page">
                            <button onClick={() => pageHandler("back")} className="bg-zinc-500/20 p-2 px-4 rounded-md cursor-pointer">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                        </Tippy>
                        <button className="bg-zinc-500/20 p-2 px-4 rounded-md cursor-pointer">1</button>
                        <Tippy content="Next Page">
                            <button onClick={() => pageHandler("next")} className="bg-zinc-500/20 p-2 px-4 rounded-md cursor-pointer">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </Tippy>
                    </div>
                </div>
            </div>
        </>
    )
}