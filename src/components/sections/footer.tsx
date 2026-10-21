import Image from "next/image";
import Link from "next/link";
import { landing } from "@/content/landing";

// Clean X (formerly Twitter) brand vector icon
const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`fill-current ${className}`}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const { footer, nav } = landing;

  return (
    <footer className="w-full bg-white border-t border-zinc-100 py-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 lg:px-12 md:flex-row">
        
        {/* Left: Contact Link */}
        <div className="flex items-center">
          <a
            href={footer.contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#666779] hover:text-[#807EF1] transition-colors"
          >
            {footer.contact.label}
          </a>
        </div>

        {/* Right: Social & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-4">
            {footer.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                aria-label={`${social.platform}（${social.label}）`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-700 hover:text-black transition-colors"
              >
                <XIcon className="w-3.5 h-3.5" />
                <span className="text-sm font-medium text-[#666779]">{social.label}</span>
              </a>
            ))}
          </div>

          <span className="text-xs font-normal text-[#9091A2]">
            {footer.copyright}
          </span>
        </div>

      </div>
    </footer>
  );
}
