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
    <section id="cta" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50/60 p-12 text-center shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Join us</p>
          <h2 className="mt-4 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            朝習慣を、今ここから始めよう
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600">
            事前登録すると、リリース情報や先行特典をメールでお届けします。
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            noValidate
          >
            <label htmlFor="cta-email" className="sr-only">
              メールアドレス
            </label>
            <input
              id="cta-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="メールアドレスを入力"
              className="flex-1 rounded-full border border-slate-200 bg-white px-6 py-4 text-base transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-describedby="cta-message"
              aria-invalid={status === "error"}
              required
            />
            <Button type="submit" variant="primary" disabled={status === "loading"} className="px-10 py-4 text-base shadow-sm">
              {status === "loading" ? "送信中..." : "事前登録する"}
            </Button>
          </form>
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span>個人情報は暗号化して管理します</span>
            <span>登録はいつでも解除できます</span>
            <span>最新情報と先行アクセスを受け取れます</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
