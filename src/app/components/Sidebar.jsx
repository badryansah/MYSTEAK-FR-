"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../Asset/Assetnavbar/LogoMySteak.svg";
import { IoMenu } from "react-icons/io5";
import { RiFileHistoryLine } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function Sidebar({ drawerOpen, setDrawerOpen, setSelectedCategory }) {
  const [menuOpen, setMenuOpen] = useState(false); // Untuk dropdown menu

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Ubah kategori yang dipilih
    setDrawerOpen(false); // Tutup drawer jika di layar kecil
  };

  return (
    <div>
      {/* Tombol untuk toggle sidebar (mobile) */}
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <IoMenu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-[#363636]`}
        onClick={(e) => e.stopPropagation()}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Logo */}
          <a href="#" className="flex items-center ps-2.5 mb-5">
            <Image
              src={Logo}
              alt="Logo MySteak"
              className="md:w-1/4 me-3 w-1/6"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              My Steak
            </span>
          </a>

          <ul className="space-y-2 font-medium">
            {/* Tombol untuk menampilkan semua menu */}
            <li>
              <button
                onClick={() => {
                  setSelectedCategory("All");  // Tampilkan semua menu
                  setMenuOpen(!menuOpen);       // Toggle dropdown
                }}
                className="flex items-center w-full p-2 rounded-lg text-white hover:bg-[#C59E5F]"
              >
                <IoMenu size={20} className="text-gray-400 group-hover:text-white" />
                <span className="ms-3">Menu</span>
                <IoIosArrowDown
                  className={`ml-auto transition-transform ${
                    menuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {/* Submenu */}
              {menuOpen && (
                <ul className="ml-6">
                  {[
                    "Steak",
                    "Chicken",
                    "Nasi Goreng",
                    "Pasta",
                    "Paket",
                    "Minuman",
                    "Sides",
                    "Desserts",
                  ].map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className="block w-full text-left p-2 text-white hover:bg-[#C59E5F] rounded"
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Menu Tambahan */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-white hover:bg-[#C59E5F] group"
              >
                <RiFileHistoryLine
                  size={20}
                  className="text-gray-400 group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Riwayat Pesanan
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-white hover:bg-[#C59E5F] group"
              >
                <FaRegCalendarCheck
                  size={20}
                  className="text-gray-400 group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Reservasi</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-white hover:bg-[#C59E5F] group"
              >
                <FiLogOut
                  size={20}
                  className="text-gray-400 group-hover:text-white"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
