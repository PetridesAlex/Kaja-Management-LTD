type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export default function Select({ label, value, options, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-brand mb-1.5 text-[11px] tracking-[0.14em] uppercase font-semibold font-display">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 min-h-12 text-slate-800"
        aria-label={label}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
