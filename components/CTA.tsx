"use client";

import { useState } from "react";
import { submitLead } from "@/lib/form";
import { validateEmail } from "@/utils/validators";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("有効なメールアドレスを入力してください。");
      return;
    }

    try {
      setStatus("loading");
      await submitLead(email.trim());
      setStatus("success");
      setMessage("仮登録を受け付けました。最新情報をお送りします。");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-brand/10 via-blue-50/30 to-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-brand/10 px-6 py-2 text-sm font-semibold text-brand">
            事前登録受付中
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            今すぐ朝を変えませんか
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            事前登録で最新情報をお届けします。<br />
            リリース時期や特典情報をいち早く受け取れます。
          </p>
          <div className="relative mt-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand to-blue-500 rounded-2xl blur opacity-25"></div>
            <form onSubmit={handleSubmit} className="relative flex flex-col gap-4 rounded-2xl border-2 border-brand/20 bg-white p-8 shadow-xl sm:flex-row sm:gap-3" noValidate>
              <label htmlFor="cta-email" className="sr-only">
                メールアドレス
              </label>
              <input
                id="cta-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="メールアドレスを入力"
                className="flex-1 rounded-lg border-2 border-slate-300 bg-white px-6 py-4 text-base shadow-sm transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-describedby="cta-message"
                aria-invalid={status === "error"}
                required
              />
              <Button type="submit" variant="primary" disabled={status === "loading"} className="px-8 py-4 text-lg shadow-lg">
                {status === "loading" ? "送信中..." : "事前登録する"}
              </Button>
            </form>
          </div>
          <p
            id="cta-message"
            aria-live="polite"
            className={`mt-4 text-sm ${
              status === "success"
                ? "text-emerald-600"
                : status === "error"
                  ? "text-rose-600"
                  : "text-slate-500"
            }`}
          >
            {message}
          </p>
          <div className="mt-12 flex justify-center gap-8 text-center">
            <div>
              <div className="mb-2 flex justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-600">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="currentColor" />
                </svg>
              </div>
              <div className="text-xs text-slate-600">個人情報保護</div>
            </div>
            <div>
              <div className="mb-2 flex justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-600">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" fill="currentColor" />
                </svg>
              </div>
              <div className="text-xs text-slate-600">無料登録</div>
            </div>
            <div>
              <div className="mb-2 flex justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-600">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                </svg>
              </div>
              <div className="text-xs text-slate-600">最新情報</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
