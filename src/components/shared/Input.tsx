type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  multiline?: boolean;
};

export default function Input({ label, value, onChange, placeholder, error, multiline }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-brand mb-1.5 text-[11px] tracking-[0.14em] uppercase font-semibold font-display">
        {label}
      </label>
      {multiline ? (
        <textarea
          className={`w-full border rounded-xl px-3 py-3 bg-white min-h-[120px] text-slate-800 placeholder:text-slate-400 ${
            error ? "border-red-500" : "border-slate-300"
          }`}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        />
      ) : (
        <input
          className={`w-full border rounded-xl px-3 py-3 bg-white min-h-12 text-slate-800 placeholder:text-slate-400 ${
            error ? "border-red-500" : "border-slate-300"
          }`}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        />
      )}
      {error ? <p className="text-red-600 text-xs mt-1">{error}</p> : null}
    </div>
  );
}
