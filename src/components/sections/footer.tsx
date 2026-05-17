import Image from "next/image";
import Link from "next/link";
import { landing } from "@/content/landing";

/**
 * 7. フッターセクション。
 * フェーズ1プレースホルダー。
 */
export function Footer() {
  const { footer, nav } = landing;

  return (
    <footer className="w-full border-t bg-muted/40 px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Image
              src="/transpods-text.png"
              alt={nav.logoAlt}
              width={132}
              height={28}
              className="h-7 w-auto"
            />
            <p className="mt-3 text-sm text-muted-foreground">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
