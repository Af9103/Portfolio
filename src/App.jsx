import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data";
import Download from "./components/Download";

function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1-5s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.ImageKecil} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Satu baris kode, sejuta kemungkinan. ✨</q>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 overflow-hidden border-r-4 border-violet-700 whitespace-nowrap max-w-full sm:max-w-[90vw] animate-typing">
            Hi, Saya Albin Favian
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify mb-6 opacity-50">
            Saya memiliki ketertarikan yang mendalam dalam dunia programming, khususnya dalam perancangan dan pengembangan sistem informasi berbasis web. Dengan pengalaman satu tahun Internship, saya terbiasa menganalisis kebutuhan pengguna, merancang arsitektur database, dan mengembangkan program yang efisien serta terstruktur.
          </p>

          {/* Kontak singkat */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-4 mb-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=albinf341@gmail.com"
              target="_blank"
              className="flex items-center gap-2 text-sm sm:text-base opacity-70 hover:opacity-100"
            >
              <i className="ri-mail-send-line"></i> albinf341@gmail.com
            </a>

            <a
              href="https://wa.me/6281283265843"
              target="_blank"
              className="flex items-center gap-2 text-sm sm:text-base opacity-70 hover:opacity-100"
            >
              <i className="ri-whatsapp-line"></i> 0812-8326-5843
            </a>

            <div className="flex items-center gap-2 text-sm sm:text-base opacity-70">
              <i className="ri-map-pin-line"></i> Tambun Selatan, Kabupaten Bekasi
            </div>
          </div>

          <div className="flex items-center sm:gap-4 gap-2">
            <Download />
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Proyek Saya <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className='w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s' loading="lazy" />
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg flex flex-col relative pt-18 md:pt-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {/* Gambar */}
          <img
            src={DataImage.ImageKecil}
            alt="Hero Image"
            className="w-10 rounded-md absolute top-4 left-4 md:top-auto md:bottom-4"
            loading="lazy"
          />

          <p className="text-base sm:text-lg opacity-70 text-justify mb-4">
            Lulusan Sistem Informasi Industri Otomotif dengan pengalaman Internship 1 tahun sebagai Full Stack Web Developer. Terampil di PHP, Laravel, JavaScript, database design, dan UI/UX.
          </p>
          <p className="text-base sm:text-lg opacity-70 text-justify">
            Pernah memimpin organisasi mahasiswa, mengasah kemampuan kepemimpinan dan manajemen tim.
          </p>

          {/* Bagian kanan bawah */}
          <div className="flex gap-8 mt-10 md:mt-auto justify-end">
            <div className="text-center">
              <p className="text-3xl font-bold opacity-70">
                10 <span className="text-blue-500">+</span>
              </p>
              <p className="text-sm opacity-70">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold opacity-70">
                1 <span className="text-blue-500">+</span>
              </p>
              <p className="text-sm opacity-70">Tahun Pengalaman</p>
            </div>
          </div>
        </div>

        {/* pengalaman */}
        <div className="pengalaman mt-22 py-10" id="pengalaman">
          <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Pengalaman
          </h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Berikut ini pengalaman saya baik di dunia profesional
          </p>

          {/* Internship */}
          <div className="internship mt-10 xl:w-3/4 lg:w-4/5 w-full mx-auto grid gap-6">
            <h2 className="text-2xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Pengalaman Internship</h2>

            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
              <div className="flex items-center gap-4 mb-3">
                <img src={DataImage.ImageIntern} alt="Internship" className="w-12 h-12 rounded-md object-cover" loading="lazy" />
                <h3 className="text-xl font-semibold">PT Kayaba Indonesia – Cikarang, Indonesia</h3>
              </div>
              <span className="text-sm opacity-50">Feb 2024 – Jan 2025 | Full Stack Web Developer</span>
              <ul className="list-disc list-inside mt-3 text-justify text-base sm:text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed opacity-70">
                <li>Mengembangkan aplikasi web (Full Stack)</li>
                <li>Membuat dokumentasi & tutorial</li>
                <li>Koordinasi tim & presentasi sistem</li>
              </ul>
            </div>
          </div>

        </div>
        {/* pengalaman */}

        <div className="tools mt-22" id="tools">
          <h1 className="text-4xl/snug font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Tools yang dipakai
          </h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 text-center mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Berikut ini beberapa tools yang biasa saya pakai
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div >
      {/* tentang */}

      {/* proyek */}
      <div className="proyek mt-22 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa proyek yang telah saya buat:</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md overflow-visible group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="proyek image" loading="lazy" />
              <div>
                <h1 className="text-xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-justify text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}

      {/* sertifikat */}
      <div className="sertifikat mt-22 py-10" id="sertifikat">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Sertifikat</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" data-aos-once="true">Beberapa sertifikat yang pernah diraih:</p>

        <div className="sertifikat-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listSertifikat.map((sertif, index) => (
            <div
              key={sertif.id}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 200}
              data-aos-once="true"
            >
              <img
                src={sertif.gambar}
                alt={sertif.nama}
                className="rounded-md mb-4"
                loading="lazy"
              />
              <h2 className="text-lg font-bold">{sertif.nama}</h2>
              <p className="opacity-70">{sertif.lembaga}</p>
              <span className="text-sm opacity-50">{sertif.tahun}</span>
            </div>
          ))}
        </div>
      </div>
      {/* sertifikat */}

      {/* kontak */}
      <div className="kontak mt-22 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/albinf341@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama lengkap</label>
              <input type="text" name="nama" placeholder="Masukan nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}

    </>
  );
}

export default App;
