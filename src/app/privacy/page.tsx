import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  robots: { index: false, follow: true },
};

/**
 * プライバシーポリシー。フェーズ1プレースホルダー。
 * 本文は法務確定後に差し替える。
 */
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-muted-foreground">
            （プレースホルダー）プライバシーポリシーの本文は、公開前に確定版を反映します。
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
