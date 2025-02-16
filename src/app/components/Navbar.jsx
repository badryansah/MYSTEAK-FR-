import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Asset/Assetnavbar/Logomysteak.jpg';

const Navbar = () => {
  return (
    <header className="w-full bg-black bg-opacity-70 py-4 mb shadow-md z-10 mb-10 ">
      <nav className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link href="/">
          <div className="w-12 h-12 relative ">
            <Image src={Logo} alt="My Steak Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-white text-base hover:text-gray-300">Beranda</Link>
          <Link href="/tentang-kami" className="text-white text-base hover:text-gray-300">Tentang Kami</Link>
          <Link href="/menu" className="text-white text-base hover:text-gray-300">Menu</Link>
          <Link href="/events" className="text-white text-base hover:text-gray-300">Events</Link>
          <Link href="/gallery" className="text-white text-base hover:text-gray-300">Gallery</Link>
          <Link href="/reservasi" className="text-white text-base hover:text-gray-300">Reservasi</Link>
          <Link href="/kontak" className="text-white text-base hover:text-gray-300">Kontak</Link>
        </div>

        {/* Login Button */}
        <Link href="/login" className="bg-transparent text-white border-2 border-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 transition">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;