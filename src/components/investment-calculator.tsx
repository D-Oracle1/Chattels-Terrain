"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Calculator } from "lucide-react";
import { formatGBP } from "@/lib/utils";

export function InvestmentCalculator() {
  const [amount, setAmount] = useState(100000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(12);

  const { projected, profit, schedule } = useMemo(() => {
    const r = rate / 100;
    const projected = amount * Math.pow(1 + r, years);
    const schedule = Array.from({ length: years + 1 }, (_, y) => ({
      year: y,
      value: amount * Math.pow(1 + r, y),
    }));
    return { projected, profit: projected - amount, schedule };
  }, [amount, years, rate]);

  const max = schedule[schedule.length - 1].value;

  return (
    <div className="grid gap-8 rounded-3xl border border-gold-100/60 bg-white p-8 shadow-luxe dark:border-white/10 dark:bg-navy-950 lg:grid-cols-2 lg:p-10">
      <div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-300">
          <Calculator className="h-5 w-5" /> Investment Calculator
        </span>
        <h3 className="mt-3 font-heading text-2xl text-navy dark:text-white">
          Model your projected returns
        </h3>

        <div className="mt-8 space-y-7">
          <Field
            label="Investment amount"
            value={formatGBP(amount)}
            min={10000}
            max={2000000}
            step={5000}
            raw={amount}
            onChange={setAmount}
          />
          <Field
            label="Investment term"
            value={`${years} years`}
            min={1}
            max={15}
            step={1}
            raw={years}
            onChange={setYears}
          />
          <Field
            label="Projected annual return"
            value={`${rate}% p.a.`}
            min={4}
            max={20}
            step={0.5}
            raw={rate}
            onChange={setRate}
          />
        </div>
      </div>

      <div className="flex flex-col rounded-2xl bg-navy-950 p-8 text-white">
        <p className="text-sm text-light-grey/60">Projected portfolio value</p>
        <p className="mt-2 font-heading text-4xl text-gold-300 sm:text-5xl">
          {formatGBP(projected)}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-emerald-300">
          <TrendingUp className="h-4 w-4" />
          {formatGBP(profit)} total return
        </div>

        <div className="mt-8 flex flex-1 items-end gap-2">
          {schedule.map((s) => (
            <div key={s.year} className="flex flex-1 flex-col items-center gap-2">
              <motion.div
                className="w-full rounded-t-md bg-gold-sheen"
                initial={{ height: 0 }}
                animate={{ height: `${(s.value / max) * 100}%` }}
                transition={{ duration: 0.5, delay: s.year * 0.04 }}
                style={{ minHeight: 4 }}
              />
              <span className="text-[10px] text-light-grey/45">Y{s.year}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-light-grey/40">
          Illustrative only. Returns are projections, not guarantees. Capital is
          at risk. Past performance does not indicate future results.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  raw,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  raw: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-charcoal/70 dark:text-light-grey/65">
          {label}
        </label>
        <span className="font-heading text-lg text-navy dark:text-white">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-gold-100 accent-gold-500 dark:bg-white/10"
      />
    </div>
  );
}
