import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Download from "./components/Download";
import ReactTypingEffect from 'react-typing-effect';

function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1-5s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Satu baris kode, sejuta kemungkinan. ✨</q>
          </div>
          <h1 className="text-5xl font-bold mb-6 overflow-hidden border-r-4 border-violet-700 whitespace-nowrap animate-typing">
            Hi, Saya Albin Favian
          </h1>

          <p className="text-base/loose mb-6 opacity-50">Saya memiliki ketertarikan yang mendalam dalam dunia programming, khususnya dalam perancangan dan pengembangan sistem informasi berbasis web. Dengan pengalaman 1 tahun, saya terbiasa menganalisis kebutuhan pengguna, merancang arsitektur database, dan mengembangkan program yang efisien serta terstruktur.</p>

          {/* Kontak singkat */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=albinf341@gmail.com"
                target="_blank"
                className="flex items-center gap-2 text-base/loose opacity-70 hover:opacity-100"
              >
                <i className="ri-mail-send-line"></i> albinf341@gmail.com
              </a>

              <a
                href="https://wa.me/6281283265843"
                target="_blank"
                className="flex items-center gap-2 text-base/loose opacity-70 hover:opacity-100"
              >
                <i className="ri-whatsapp-line"></i> 0812-8326-5843
              </a>

              <div className="flex items-center gap-2 text-base/loose opacity-70">
                <i className="ri-map-pin-line"></i> Bekasi, Indonesia
              </div>

            </div>
          </div>

          <div className="flex items-center sm:gap-4 gap-2">
            <Download />
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Proyek Saya <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className='w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s' loading="lazy" />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-5">Saya adalah lulusan Program Studi Sistem Informasi Industri Otomotif di Politeknik STMI Jakarta dengan pengalaman sebagai Full Stack Web Developer. Terampil dalam membangun aplikasi web menggunakan PHP Native maupun Framework Laravel, serta menguasai JavaScript. Memiliki kemampuan dalam UI/UX Design, manajemen basis data, analisis sistem, serta pemodelan sistem menggunakan Use Case, Activity, dan Sequence Diagram, termasuk desain serta pemodelan database.</p>
          <p className="text-base/loose">Selain pengalaman akademis dan profesional, saya juga pernah menjabat sebagai Kepala Divisi PSDM HIMASIS, yang memperkuat kemampuan saya dalam kepemimpinan, manajemen tim, serta pengembangan sumber daya manusia.</p>
        </div>

        {/* pengalaman */}
        <div className="pengalaman mt-22 py-10" id="pengalaman">
          <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000">Pengalaman</h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Berikut ini pengalaman saya baik di dunia profesional maupun organisasi
          </p>

          {/* Internship */}
          <div className="internship mt-10 xl:w-3/4 lg:w-4/5 w-full mx-auto grid gap-6">
            <h2 className="text-2xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Pengalaman Internship</h2>
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <h3 className="text-xl font-semibold">PT Kayaba Indonesia – Cikarang, Indonesia</h3>
              <span className="text-sm opacity-50">Feb 2024 – Jan 2025 | Full Stack Web Developer</span>
              <ul className="list-disc list-inside mt-3 text-base/loose opacity-70">
                <li>Mengembangkan Sistem Informasi Berbasis Web (Full Stack Developer)</li>
                <li>Melakukan review mingguan bersama pengguna untuk mengevaluasi progres dan menyesuaikan fitur sistem sesuai kebutuhan</li>
                <li>Melaksanakan sosialisasi sistem kepada end user melalui presentasi</li>
                <li>Membuat panduan penggunaan dalam bentuk dokumentasi PDF dan video tutorial untuk membantu pengguna memahami dan mengoperasikan sistem dengan efektif</li>
                <li>Melaksanakan kegiatan stock opname sebagai anggota tim filling, dengan tugas mengelola dan menyusun formulir berdasarkan nomor, serta memastikan kesesuaian data fisik dan sistem</li>
              </ul>
            </div>
          </div>

          {/* Organisasi */}
          <div className="organisasi mt-16 xl:w-3/4 lg:w-4/5 w-full mx-auto grid gap-6">
            <h2 className="text-2xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Pengalaman Organisasi</h2>

            {/* Kepala Divisi */}
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <h3 className="text-xl font-semibold">Himpunan Mahasiswa Sistem Informasi (HIMASIS) – Jakarta, Indonesia</h3>
              <span className="text-sm opacity-50">Feb 2024 – Feb 2025 | Kepala Divisi – Pengembangan Sumber Daya Manusia</span>
              <ul className="list-disc list-inside mt-3 text-base/loose opacity-70">
                <li>Memimpin proses rekrutmen anggota baru</li>
                <li>Berhasil melaksanakan program magang untuk calon penerus HIMASIS, dengan 70% peserta magang menjadi anggota tetap</li>
                <li>Menyelenggarakan acara Buka Puasa Bersama anggota dan alumni, serta memimpin program sosial “HIMASIS Berbagi” untuk mendukung masyarakat sekitar selama bulan Ramadan</li>
                <li>Mengevaluasi kinerja anggota melalui laporan penilaian terstruktur, yang berkontribusi pada peningkatan efektivitas organisasi</li>
                <li>Melaksanakan fungsi perencanaan, pengorganisasian, pelaksanaan, dan pengawasan seluruh kegiatan di Divisi Pengembangan Sumber Daya Manusia</li>
              </ul>
            </div>

            {/* Staff Divisi Kewirausahaan */}
            <div className="p-6 bg-zinc-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <h3 className="text-xl font-semibold">Himpunan Mahasiswa Sistem Informasi (HIMASIS) – Jakarta, Indonesia</h3>
              <span className="text-sm opacity-50">Mar 2023 – Feb 2024 | Staff – Divisi Kewirausahaan</span>
              <ul className="list-disc list-inside mt-3 text-base/loose opacity-70">
                <li>Mendesain pamflet dan materi promosi untuk program kewirausahaan</li>
                <li>Merencanakan dan menjual produk HIMASIS seperti merchandise dan makanan untuk mendukung kegiatan HIMASIS</li>
              </ul>
            </div>
          </div>
        </div>
        {/* pengalaman */}


        <div className="tools mt-22" id="tools">
          <h1 className="text-4xl/snug font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000">
            Tools yang dipakai
          </h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 text-center mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Berikut ini beberapa tools yang biasa saya pakai
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      {/* tentang */}

      {/* proyek */}
      <div className="proyek mt-22 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat:</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="proyek image" loading="lazy" />
              <div>
                <h1 className="text-xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
              </div>
              {/* <div className="mt-8 text-center">
                <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat website</a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}

      {/* kontak */}
      <div className="kontak mt-22 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/albinf341@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
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

export default App