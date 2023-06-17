import { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-hot-toast'

export default function AuthComponent({ isOpen, setIsOpen }) {

    const [type, setType] = useState("null")
    const [mail, setMail] = useState(null)
    const [password, setPassword] = useState(null)
    const [username, setUsername] = useState(null)

    const postRegister = async () => {
        const res = await fetch("/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                mail: mail,
                password: password
            }),
        })
        const data = await res.json()
        if (data.success) {
            toast.success(data.data.message)
            if (data.data.type == "login") {
                setType("login")
            }
        }
        return data

    }

    const postLogin = async () => {
        const res = await fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        const data = await res.json()
        if (data.success) {
            toast.success(data.data.message)
            localStorage.setItem("token", data.data.token)
            window.location.reload()
        }
        return data
    }

    const postUsername = async () => {
        const res = await fetch("/api/v1/auth/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
            }),
        })
        const data = await res.json()
        if (data.success) {
            if (data.data.type == "login") {
                setType("login")
            } else if (data.data.type == "register") {
                setType("register")
            }
        }
        return data
    }

    async function handlePost() {
        if (type == "null") {
            postUsername()
        } else if (type == "login") {
            postLogin()
        } else if (type == "register") {
            postRegister()
        }
    }


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/60 bg-opacity-25" />
                </Transition.Child>

                <div style={{ zIndex: "90" }} className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-md bg-[#111112] p-4 text-left align-middle shadow-2xl transition-all">
                                <img className="mt-12 w-[80px] h-[80px] justify-center mx-auto rounded-full" src="logo.png" />
                                <h3 className="mt-4 text-[#e3e3e3] text-[18px] font-semibold text-center">Welcome!</h3>
                                {type == "null" && (
                                    <p className="mt-2 text-[#b9b9b9] text-[12px] text-center">You can enter your username and continue with the login or registration process!</p>
                                )}
                                {type == "login" && (
                                    <p className="mt-2 text-[#b9b9b9] text-[12px] text-center">All that's missing is your account password! You can enter it and log in!</p>
                                )}
                                {type == "register" && (
                                    <p className="mt-2 text-[#b9b9b9] text-[12px] text-center">You can register by filling out the form below!</p>
                                )}
                                <div className="mt-6 justify-center mx-auto text-center">
                                    <div className="px-[50px]">
                                        {type == "null" && (
                                            <div className="mt-4">
                                                <p className="text-[12px] text-[#b9b9b9]" style={{ textAlign: "left" }}>
                                                    Username
                                                </p>
                                                <input
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    type="text"
                                                    placeholder="iamnullman"
                                                    className={`focus:border-zinc-700/40 border-zinc-700/20 mt-1 h-[32px] w-full text-[12px] outline-none px-3 duration-200 transition-all bg-zinc-700/20 border text-[#e3e3e3] rounded-[4px]`}
                                                />
                                            </div>
                                        )}
                                        {type == "register" && (
                                            <div className="mt-4">
                                                <p className="text-[12px] text-[#b9b9b9]" style={{ textAlign: "left" }}>
                                                    Mail
                                                </p>
                                                <input
                                                    onChange={(e) => setMail(e.target.value)}
                                                    type="text"
                                                    placeholder="example@gmail.com"
                                                    className={`focus:border-zinc-700/40 border-zinc-700/20 mt-1 h-[32px] w-full text-[12px] outline-none px-3 duration-200 transition-all bg-zinc-700/20 border text-[#e3e3e3] rounded-[4px]`}
                                                />
                                            </div>
                                        )}
                                        {type == "register" && (
                                            <div className="mt-4">
                                                <p className="text-[12px] text-[#b9b9b9]" style={{ textAlign: "left" }}>
                                                    Password
                                                </p>
                                                <input
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    type="password"
                                                    placeholder="*********"
                                                    className={`focus:border-zinc-700/40 border-zinc-700/20 mt-1 h-[32px] w-full text-[12px] outline-none px-3 duration-200 transition-all bg-zinc-700/20 border text-[#e3e3e3] rounded-[4px]`}
                                                />
                                            </div>
                                        )}

                                        {type == "login" && (
                                            <div className="mt-4">
                                                <p className="text-[12px] text-[#b9b9b9]" style={{ textAlign: "left" }}>
                                                    Şifre
                                                </p>
                                                <input
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    type="password"
                                                    placeholder="*********"
                                                    className={`focus:border-zinc-700/40 border-zinc-700/20 mt-1 h-[32px] w-full text-[12px] outline-none px-3 duration-200 transition-all bg-zinc-700/20 border text-[#e3e3e3] rounded-[4px]`}
                                                />
                                            </div>
                                        )}
                                        <div className="flex justify-center mt-4">
                                            <button onClick={handlePost} className={`button-animate w-28 h-10 text-sm flex text-center justify-center items-center cursor-pointer mt-2 rounded-lg bg-zinc-700/40 border border-zinc-700/20 hover:bg-zinc-700/60`}>
                                                {type == "null" ? "Continue" : type == "login" ? "Login" : type == "register" ? "Register" : "Continue"}
                                            </button>
                                        </div>

                                        <p className="text-[12px] text-[#b9b9b9] mt-4">
                                            By registering, you agree to our <span className="text-[#e3e3e3]">Terms of Use</span> and <span className="text-[#e3e3e3]">Privacy Policy</span>.
                                        </p>

                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    )
}