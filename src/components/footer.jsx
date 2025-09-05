const footer = () => {
    return (
        <>
            <footer className="mt-32 border-t border-zinc-700 pt-10 pb-6 px-4 sm:px-6">
                <div className="container mx-auto grid gap-10 items-center">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
                        {/* Brand */}
                        <div className="text-center md:text-left">
                            <h1 className="text-xl sm:text-2xl font-bold mb-2">Portofolio</h1>
                            <p className="text-xs sm:text-sm opacity-60 leading-relaxed">
                                Showcase proyek dan pengalaman saya di bidang Web Development & UI/UX.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="text-center md:text-right lg:text-center">
                            <h2 className="text-base sm:text-lg font-semibold mb-3">Navigasi</h2>
                            <div className="flex flex-wrap gap-4 sm:gap-7 justify-center md:justify-end lg:justify-center text-xs sm:text-sm">
                                <a href="#beranda">Beranda</a>
                                <a href="#tentang">Tentang</a>
                                <a href="#proyek">Proyek</a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="text-center lg:text-right md:col-span-2 lg:col-span-1">
                            <h2 className="text-base sm:text-lg font-semibold mb-3">Hubungi Saya</h2>
                            <div className="flex flex-wrap justify-center lg:justify-end gap-2 sm:gap-3">
                                <a
                                    href="https://wa.me/6281283265843"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 sm:p-3 bg-zinc-800 rounded-full hover:bg-green-600 transition"
                                >
                                    <i className="bi bi-whatsapp text-lg sm:text-xl text-white"></i>
                                </a>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=albinf341@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 sm:p-3 bg-zinc-800 rounded-full hover:bg-red-500 transition"
                                >
                                    <i className="bi bi-envelope-fill text-lg sm:text-xl text-white"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/albin-favian-72b097246"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 sm:p-3 bg-zinc-800 rounded-full hover:bg-blue-600 transition"
                                >
                                    <i className="bi bi-linkedin text-lg sm:text-xl text-white"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/a.vian91_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 sm:p-3 bg-zinc-800 rounded-full hover:bg-pink-500 transition"
                                >
                                    <i className="bi bi-instagram text-lg sm:text-xl text-white"></i>
                                </a>
                                <a
                                    href="https://github.com/Af9103"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 sm:p-3 bg-zinc-800 rounded-full hover:bg-gray-600 transition"
                                >
                                    <i className="bi bi-github text-lg sm:text-xl text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 text-center text-xs sm:text-sm opacity-50">
                    © 2025 Albin Favian. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default footer
