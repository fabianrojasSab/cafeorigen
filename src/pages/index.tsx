import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";
import { BsWhatsapp } from 'react-icons/bs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main>
        {/* componente menubar */}
        <div className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <div className="font-bold max-sm:text-xs hidden sm:block">
              Café Origen - Tienda en Línea
            </div>
            <div className="ml-auto accent text-white px-4 py-2 rounded">
              <div className="flex items-center justify-center gap-6">
                  <a
                  href="https://m.facebook.com/people/Pijaos-Salud-Eps-Indigena/100072430669698/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="Facebook"
                  >
                  <Facebook className="w-5 h-5" />
                  </a>

                  <a
                  href="https://wa.me/573102133504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="WhatsApp"
                  >
                  <BsWhatsapp className="w-5 h-5" />
                  </a>

                  <a
                  href="https://www.youtube.com/channel/UCwblJFABwBn1NHvAhgxPCIw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="YouTube"
                  >
                  <Youtube className="w-5 h-5" />
                  </a>
              </div>
            </div>

            <div className="flex items-center gap-2  hover:animate-vibrate animate-in fade-in slide-in-from-right-8 duration-800">
              <Link
                href="/shop/cart/page"
                className="mr-4 inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Iniciar sesion
              </Link>
              <Link
                href="/shop/cart/page"
                className="mr-4 inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Registrarse
              </Link>
            </div>
        </div>

        {/* contenido principal */}
        <div className="flex h-screen w-screen">
          <div className="flex flex-1 items-center justify-center p-6">
            <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
              Contenido Principal
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
