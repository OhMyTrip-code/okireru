"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const features = [
  {
    title: "起こす",
    description: "アラームと通知で徹底的に起こす。ベッドから離脱を強制します。"
  },
  {
    title: "証明する",
    description: "QRコードスキャンで起床を証明。ベッドから離れないと止まりません。"
  },
  {
    title: "続ける",
    description: "成功すればキャッシュバック。失敗すればお金が減る。この仕組みで続けられます。"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="border-y border-slate-100 bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">Features</p>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
              3つの仕組みで
              <br className="hidden sm:block" />
              朝のスタートを整える
            </h2>
            <p className="text-base leading-7 text-slate-600">
              オキレルは派手な機能ではなく、毎朝の行動を徹底的にデザインしています。起こす、証明する、続ける。3つのステップが揃うことで、寝ぼけた意志をシステム化します。
            </p>
          </div>
          <motion.ul
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => (
              <motion.li
                key={feature.title}
                variants={itemVariants}
                className="group flex items-start gap-4 sm:gap-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition hover:border-brand/50 hover:bg-white hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-white text-xl sm:text-2xl font-bold shadow-sm text-slate-900">
                  0{index + 1}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-dark">
                      0{index + 1}
                    </span>
                    <span className="text-sm text-slate-400">/ メソッド</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-base sm:text-lg leading-7 text-slate-600">{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
