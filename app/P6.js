import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center text-gray-900">
      
      {/* Navbar dengan Rounded dan Highlight Aktif */}
      <nav className="w-full max-w-4xl bg-gray-300 bg-opacity-70 backdrop-blur-md rounded-full shadow-lg flex justify-center space-x-4 p-3 mt-6">
        <a href="#home" className="px-4 py-2 rounded-full bg-gray-400 text-white font-semibold">
          Home
        </a>
        <a href="#about" className="px-4 py-2 rounded-full hover:bg-gray-300 transition">About</a>
        <a href="#projects" className="px-4 py-2 rounded-full hover:bg-gray-300 transition">Projects</a>
        <a href="#skills" className="px-4 py-2 rounded-full hover:bg-gray-300 transition">Skills</a>
        <a href="#experience" className="px-4 py-2 rounded-full hover:bg-gray-300 transition">Experience</a>
        <a href="#contact" className="px-4 py-2 rounded-full hover:bg-gray-300 transition">Contact</a>
      </nav>

      {/* Hero Section */}
      <div id="home" className="text-center mt-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
          Hello, I'm Farhan!
        </h2>
        
        {/* Gambar Profil */}
        <div className="flex justify-center items-center mt-4">
          <Image
            src="/Farhan.jpeg"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <p className="mt-4 text-lg max-w-lg mx-auto text-gray-700">
          Saya seorang mahasiswa Dari Prodi Komputerisasi Akuntansi Semester 4 dengan minat dalam pengembangan web dan analisis data.
        </p>
      </div>
    </div>
  );
}
