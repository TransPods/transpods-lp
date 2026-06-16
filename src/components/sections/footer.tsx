import Link from "next/link";
import { landing } from "@/content/landing";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export function Footer() {
  const { footer } = landing;

  return (
    <footer className="w-full border-t border-white/5 bg-zinc-950 py-12 mt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        
        {/* Links */}
        <div className="flex items-center gap-6">
          {footer.links.map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center gap-4 md:items-end md:gap-2">
          <div className="flex items-center gap-4">
            {footer.socials.map((social) => (
              <a 
                key={social.platform}
                href={social.href}
                aria-label={social.platform}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                {social.icon === "Instagram" ? <InstagramIcon /> : <XIcon />}
              </a>
            ))}
          </div>
          <span className="text-xs text-zinc-600 font-medium tracking-wide">
            {footer.copyright}
          </span>
        </div>

      </div>
    </footer>
  );
}
