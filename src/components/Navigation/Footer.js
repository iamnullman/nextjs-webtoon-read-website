import Link from "next/link";
export default function Footer() {
    return (
        <div className="w-full flex justify-center">
            <footer className="px-24 w-full py-6 pt-12">
                <footer className="rounded-lg md:py-8">
                    <div className="col-span-4 text-center flex flex-col lg:flex-row justify-between items-center pt-6 border-t border-zinc-500/40 mt-6">
                        <p className="text-zinc-300 font-normal">© {new Date().getUTCFullYear()} {" "}All rights reserved.</p>
                        <p className="text-zinc-400 font-normal">
                            Powered with{" "}
                            <span className="text-red-500">
                                <i className="fa-solid ml-1 mr-1 text-pink-600 fa-heart"></i>
                            </span>{" "}
                            by{" "}
                            <Link href="https://nullman.dev" target="_blank" className="text-primary">
                                NullMan
                            </Link>
                        </p>
                    </div>
                </footer>
            </footer>
        </div>
    );
}
