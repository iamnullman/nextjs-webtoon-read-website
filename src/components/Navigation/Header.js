import Link from "next/link";
import { useRouter } from "next/router";
import { navbarItems } from "@/configs/ui.config";
import AuthComponent from "./Content/Auth";
import { Fragment, useState } from "react";
import { useUser } from "@/context/user";
import { Menu, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Header({ data }) {
  const router = useRouter();
  const { user } = useUser();

  return (
    <header className="mx-auto justify-center lg:px-24 px-6 relative w-full h-24 lg:mb-0 mb-8 lg:grid grid-cols-1 lg:grid-cols-12">
      <div className="flex col-span-2 lg:justify-start justify-center items-center mx-auto mt-6">
        <Link href="/">
          <img className="w-12 h-12 lg:ml-8 rounded-full" src="/logo.png" />
        </Link>
      </div>
      <div className="col-span-8 space-x-8 lg:mt-0 mt-4 justify-center flex items-center text-center mx-auto">
        {navbarItems.map((item, index) => {
          if (!item.web) return;
          return (
            <Link href={item.href}>
              <div class={`relative ${item.href === router.asPath ? "text-white" : "text-gray-400"}  font-medium transition-all duration-200 hover:text-white cursor-pointer`} href="/">
                {item.title}
              </div>
            </Link>
          )
        })}
      </div>
      <div className="col-span-2 hidden lg:flex">
        <div className="flex mt-8 space-x-4 ">
          {!user ? (
            <div onClick={(e) => data.setIsOpen(!data.isOpen)} className="bg-zinc-700/20 border border-zinc-700/20 hover:bg-zinc-700/40 transition duration-200 cursor-pointer w-10 h-10 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-md"></i>
            </div>
          ) : (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="text-white transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full">

                  <div className=" cursor-pointer h-10 rounded-full flex items-center justify-center">
                    <p className="text-xs ml-2">{user.username}</p>
                    <img className="w-8 h-8 rounded-full ml-2" src={user.avatar || `https://avatars.dicebear.com/api/initials/${user.username}.png`} />
                  </div>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute -right-8 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item disabled>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Profil (Yakında)
                        </a>
                      )}
                    </Menu.Item>

                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </div>
    </header>
  );
};