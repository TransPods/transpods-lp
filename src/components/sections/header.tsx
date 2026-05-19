import Image from "next/image";
import Link from "next/link";
import { landing } from "@/content/landing";
import { Apple, Play } from "lucide-react";

export function Header() {
  const { nav } = landing;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 lg:h-24 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={nav.logoAlt}>
          {/* Logo icon */}
          <Image src="/logo.png" alt="TransPods Logo" width={300} height={100} className="h-10 lg:h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-white text-zinc-950 font-medium text-sm transition-transform hover:scale-105 active:scale-95"
        >
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
