import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { landing } from "@/content/landing";

/**
 * サイトヘッダー（ナビゲーション）。
 * フェーズ1プレースホルダー — モバイルメニュー等はフェーズ2で実装。
 */
export function Header() {
  const { nav } = landing;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label={nav.logoAlt}>
          <Image
            src="/transpods-text.png"
            alt={nav.logoAlt}
            width={132}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#cta" size="sm">
          {nav.cta}
        </ButtonLink>
      </div>
    </header>
  );
}
