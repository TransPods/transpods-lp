import Link from "next/link";
import type { ComponentProps } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * ボタン外観のリンク。
 * base-nova の Button は <button> をレンダリングし `asChild` を持たないため、
 * ナビゲーション用途には buttonVariants を <Link> に適用したこのコンポーネントを使う。
 */
export function ButtonLink({
  className,
  variant = "default",
  size = "default",
  ...props
}: ComponentProps<typeof Link> & VariantProps<typeof buttonVariants>) {
  return (
    <Link
      data-slot="button-link"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
