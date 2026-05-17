import { cn } from "@/lib/utils";

/**
 * セクション共通ラッパー。最大幅・左右パディング・縦リズムを統一する。
 * 各セクションコンポーネントはこれを使って中身だけを記述する。
 */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("w-full px-6 py-20 md:py-28", className)}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

/** セクション見出し（タイトル + サブタイトル）の共通レイアウト */
export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-muted-foreground md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
