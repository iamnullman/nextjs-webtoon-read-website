import { NextSeo } from 'next-seo';
import MiniCard from "@/components/Card/Mini"
import { useEffect, useState } from "react";
import MangaCard from "@/components/Card/MangaCard";
import Tippy from '@tippyjs/react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import moment from 'moment/moment';
import BrowseMangaCard from '@/components/Card/BrowseCard';
import Link from 'next/link';

export default function Home() {

    return (
        <>
            <NextSeo title={"I Picked A Hammer To Save The World"} />

            <div className="max-w-7xl pt-12 mx-auto">
                <div className="browse-banner !w-[100rempx] bg-zinc-700/20 rounded-lg">
                    <img id="image" src="https://otakukart.com/wp-content/uploads/2023/05/I-Picked-A-Hammer-To-Save-The-World-Chapter-28-scaled.jpg" className="button-animate browse-image" />
                    <div id="black" className="bg-gradient-to-tr from-zinc-900/20 to-zinc-900/50 browse-black"></div>
                </div>
                <div id="body2" className="block lg:hidden">
                    <div className="flex justify-center">
                        <img alt="anime" src="https://www.mangaread.org/wp-content/uploads/2022/12/Read-Manhwa-6-193x278.jpg" className="flex-shrink-1 rounded-lg w-[250px] h-[380px] relative object-cover bg-cover -mt-32" />
                    </div>
                    <h1 className="text-xl font-semibold text-white text-center mt-3">
                        I Picked A Hammer To Save The World
                    </h1>
                    <div className="grid grid-cols-2 gap-2 py-4 px-8">
                        <div className="bg-zinc-700/30 border-zinc-700/20 border px-3 cursor-pointer text-sm py-1 text-center items-center rounded-md">Romance</div>
                        <div className="bg-zinc-700/30 border-zinc-700/20 border px-3 cursor-pointer text-sm py-1 text-center items-center rounded-md">Comedy</div>
                        <div className="bg-zinc-700/30 border-zinc-700/20 border px-3 cursor-pointer text-sm py-1 text-center items-center rounded-md">Action</div>
                        <div className="bg-zinc-700/30 border-zinc-700/20 border px-3 cursor-pointer text-sm py-1 text-center items-center rounded-md">Adventure</div>
                    </div>

                    <div className="mt-4">
                        <p className="mt-2 line-clamp-5 text-center w-[450px]">
                            Tiny, who is in danger of dying after crushing the head of the 7th corps captain, Demonic Beast King, with the last blow. In a despaired situation where the destruction of mankind can’t be prevented, the only comrade who was still alive, the “Sword emperor,” uses the power of his family treasure to regress Tiny.
                            <br />
                            Tiny, who returned to being a slum orphan from being one of the continent’s best knights, now possesses strong potential by gaining new powers that he did not have in his previous life. Can he indeed prevent the fall of mankind in this life?
                        </p>
                    </div>


                    <div className="mt-4 p-8">
                        <h1 className="text-xl text-zinc-200 font-semibold mb-4">Chapters</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-zinc-700/40 rounded-lg border border-zinc-700/20 px-4 py-4 text-center items-center">
                                <div className="flex justify-between">
                                    <p className="text-[15px] opacity-80">Chapter 1</p>
                                    <div className="flex">
                                        <p className="text-[15px]">
                                            <Link href="/read/1">
                                                <i className="fas fa-arrow-right text-gray-500 mr-1"></i>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-zinc-700/40 rounded-lg border border-green-500/30 px-4 py-4 text-center items-center">
                                <div className="flex justify-between">
                                    <p className="text-[15px] opacity-80">Chapter 2</p>
                                    <div className="flex">
                                        <p className="text-[15px]">
                                            <Link href="/read/1">
                                                <i className="fas fa-arrow-right text-green-500/60 mr-1"></i>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 p-8">
                        <div class="mt-6 w-full">
                            <h1 class="text-xl text-white opacity-90">Comments</h1>
                            <div class="flex mt-4">
                                <div class="flex-shrink-0 w-[3.5rem] h-[3.5rem]">
                                    <img
                                        alt="avatar"
                                        src="/logo.png"
                                        class="rounded-full"
                                    />
                                </div>
                                <div class="w-full ml-5">
                                    <textarea
                                        id="comment"
                                        type="text"
                                        spellcheck="false"
                                        autocomplete="off"
                                        rows="2"
                                        maxlength="512"
                                        placeholder="Write a comment..."
                                        class="-mt-[2px] focus:text-zinc-500 focus:dark:text-zinc-500 focus:border-zinc-500/100 disable-arrows transition-all duration-200 col-span-6 w-full bg-black/10 hover:bg-black/20 rounded-xl border border-white/10 outline-none py-4 px-6"
                                    />
                                    <p class="hidden" />
                                    <div class="lg:flex items-center justify-end w-full">
                                        <div>
                                            <button class="hover:bg-zinc-600/40 flex text-center justify-center items-center bg-zinc-600/20 backdrop-blur-xl transition-all duration-200 py-2 mt-2 px-6 text-sm rounded-xl text-white">
                                                Send Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="mt-5 backdrop-filter backdrop-blur-lg border border-zinc-300/10 text-zinc-300 transition-all duration-200 rounded-lg p-5"
                            >
                                <div class="flex w-full">
                                    <div class="flex-shrink-0 w-[4rem] h-[4rem]">
                                        <img
                                            alt="logo"
                                            class="rounded-full"
                                            src="https://avatars.githubusercontent.com/u/73245847?v=4"
                                        />
                                    </div>
                                    <div class="ml-3 w-full">
                                        <div class="flex items-center">
                                            <p class="text-lg font-medium mr-2">NullMan</p>
                                            <p class="ml-2 text-xs text-white/50">{moment(new Date()).from()}</p>

                                            <div class="ml-auto">
                                                <button class="hover:bg-zinc-600/40 flex text-center justify-center items-center bg-zinc-600/20 backdrop-blur-xl transition-all duration-200 py-2 mt-2 px-6 text-sm rounded-xl text-white">
                                                    <i class="fas fa-reply mr-2"></i>
                                                    <p class="text-xs">Reply</p>
                                                </button>
                                            </div>
                                        </div>
                                        <p class="text-sm">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="body" className="hidden lg:block">
                    <div id="user-info" className="flex -mt-2 space-x-8">
                        <div className="ml-12 -mt-24">
                            <img alt="anime" src="https://www.mangaread.org/wp-content/uploads/2022/12/Read-Manhwa-6-193x278.jpg" className="flex-shrink-1 rounded-lg w-[250px] min-h-[280px] max-h-[340px] relative object-cover bg-cover" />
                            <div className="mt-2">
                                <div className="flex space-x-2 w-[250px]">
                                    <Tippy content={"Yakında..."} placement="bottom" arrow={false} theme="dark">
                                        <div onClick={() => favorite()} className={`w-full mt-2 py-2.5 group button-animate p-2 px-6 text-md flex text-center justify-center items-center cursor-pointer rounded-lg bg-zinc-700/30 border border-zinc-700/10 hover:bg-zinc-700/40`}>
                                            <i className={`fas fa-plus mr-2 mt-0.5 text-xl button-animate`}></i> <p className="mr-2 button-animate mt-0.5 text-sm text-white">Listeye Ekle</p>
                                        </div>
                                    </Tippy>
                                    <Tippy content={"Yakında..."} placement="bottom" arrow={false} theme="dark">
                                        <div onClick={() => like()} className={`mt-2 px-6 py-2.5 group button-animate  text-md flex text-center justify-center items-center cursor-pointer rounded-lg bg-zinc-700/30 border border-zinc-700/10 hover:bg-zinc-700/40`}>
                                            <i className={`fas fa-heart text-red-600 mt-0.5 text-lg button-animate`}></i>
                                        </div>
                                    </Tippy>
                                </div>
                                <div className="mt-4">
                                    <h1 className="text-lg text-gray-100 font-semibold mb-2">Tags</h1>
                                    <div className="grid grid-cols-2 gap-2 ">
                                        <div className="bg-zinc-700/30 border-zinc-700/20 border px-3 cursor-pointer text-sm py-1 text-center items-center rounded-md">Action</div>
                                        <div className="bg-zinc-700/30 border-zinc-700/20 border px-3 cursor-pointer text-sm py-1 text-center items-center rounded-md">Comedy</div>
                                        <div className="bg-zinc-700/30 border-zinc-700/20 border px-3 cursor-pointer text-sm py-1 text-center items-center rounded-md">Adventure</div>
                                        <div className="bg-zinc-700/30 border-zinc-700/20 border px-3 cursor-pointer text-sm py-1 text-center items-center rounded-md">Romance</div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h1 className="text-lg text-gray-100 font-semibold mb-2">Detailed Information</h1>

                                    <div className="bg-zinc-700/20 mt-2 w-full rounded-lg border border-zinc-700/20 px-4 space-y-4 py-4 text-center items-center">
                                        <div className="flex justify-between">
                                            <p className="text-[15px] opacity-80">Serie</p>
                                            <div className="flex">
                                                <p className="text-[15px]">
                                                    50
                                                    <span className="opacity-60 ml-1 mr-1">/</span>
                                                    <span className="opacity-60">55</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-[15px] opacity-80">Release Date</p>
                                            <div className="flex">
                                                <p className="text-[15px]">11.06.2023</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-[15px] opacity-80">Number of Reads</p>
                                            <div className="flex">
                                                <p className="text-[15px]">10</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-[15px] opacity-80">Time</p>
                                            <div className="flex">
                                                <p className="text-[15px]">24 min. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-4xl">
                            <h1 className="text-4xl font-semibold text-white">
                                I Picked A Hammer To Save The World
                            </h1>
                            <div className="mt-4">
                                <h1 className="text-xl text-zinc-200 font-semibold">Synopsis</h1>
                                <p className="mt-2 line-clamp-3">
                                    Tiny, who is in danger of dying after crushing the head of the 7th corps captain, Demonic Beast King, with the last blow. In a despaired situation where the destruction of mankind can’t be prevented, the only comrade who was still alive, the “Sword emperor,” uses the power of his family treasure to regress Tiny.
                                    <br />
                                    Tiny, who returned to being a slum orphan from being one of the continent’s best knights, now possesses strong potential by gaining new powers that he did not have in his previous life. Can he indeed prevent the fall of mankind in this life?
                                </p>
                            </div>

                            <div className="mt-4">
                                <h1 className="text-xl text-zinc-200 font-semibold mb-4">Chapters</h1>
                                {/** Chapter card */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-zinc-700/40 rounded-lg border border-zinc-700/20 px-4 py-4 text-center items-center">
                                        <div className="flex justify-between">
                                            <p className="text-[15px] opacity-80">Chapter 1</p>
                                            <div className="flex">
                                                <p className="text-[15px]">
                                                    <Link href="/read/1">
                                                        <i className="fas fa-arrow-right text-gray-500 mr-1"></i>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-zinc-700/40 rounded-lg border border-green-500/30 px-4 py-4 text-center items-center">
                                        <div className="flex justify-between">
                                            <p className="text-[15px] opacity-80">Chapter 2</p>
                                            <div className="flex">
                                                <p className="text-[15px]">
                                                    <Link href="/read/1">
                                                        <i className="fas fa-arrow-right text-green-500/60 mr-1"></i>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div class="mt-6 w-full">
                                    <h1 class="text-xl text-white opacity-90">Comments</h1>
                                    <div class="flex mt-4">
                                        <div class="flex-shrink-0 w-[3.5rem] h-[3.5rem]">
                                            <img
                                                alt="avatar"
                                                src="/logo.png"
                                                class="rounded-full"
                                            />
                                        </div>
                                        <div class="w-full ml-5">
                                            <textarea
                                                id="comment"
                                                type="text"
                                                spellcheck="false"
                                                autocomplete="off"
                                                rows="2"
                                                maxlength="512"
                                                placeholder=" Write a comment..."
                                                class="-mt-[2px] focus:text-zinc-500 focus:dark:text-zinc-500 focus:border-zinc-500/100 disable-arrows transition-all duration-200 col-span-6 w-full bg-black/10 hover:bg-black/20 rounded-xl border border-white/10 outline-none py-4 px-6"
                                            />
                                            <p class="hidden" />
                                            <div class="lg:flex items-center justify-end w-full">
                                                <div>
                                                    <button class="hover:bg-zinc-600/40 flex text-center justify-center items-center bg-zinc-600/20 backdrop-blur-xl transition-all duration-200 py-2 mt-2 px-6 text-sm rounded-xl text-white">Comment Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="mt-5 backdrop-filter backdrop-blur-lg border border-zinc-300/10 text-zinc-300 transition-all duration-200 rounded-lg p-5"
                                    >
                                        <div class="flex w-full">
                                            <div class="flex-shrink-0 w-[4rem] h-[4rem]">
                                                <img
                                                    alt="logo"
                                                    class="rounded-full"
                                                    src="https://avatars.githubusercontent.com/u/73245847?v=4"
                                                />
                                            </div>
                                            <div class="ml-3 w-full">
                                                <div class="flex items-center">
                                                    <p class="text-lg font-medium mr-2">NullMan</p>
                                                    <p class="ml-2 text-xs text-white/50">{moment(new Date()).from()}</p>

                                                    <div class="ml-auto">
                                                        <button class="hover:bg-zinc-600/40 flex text-center justify-center items-center bg-zinc-600/20 backdrop-blur-xl transition-all duration-200 py-2 mt-2 px-6 text-sm rounded-xl text-white">
                                                            <i class="fas fa-reply mr-2"></i>
                                                            <p class="text-xs">Reply</p>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p class="text-sm">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}