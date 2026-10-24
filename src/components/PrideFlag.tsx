/**
 * 🏳️‍🌈 Bendera Pelangi LGBT (Pride Flag, 6 garis — Gilbert Baker versi populer):
 * Merah = kehidupan · Jingga = penyembuhan · Kuning = sinar matahari
 * Hijau = alam · Biru = ketenangan · Ungu = semangat
 */
const STRIPES = ["#E40303", "#FF8C00", "#FFED00", "#008026", "#24408E", "#732982"];

export default function PrideFlag({ className = "w-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 96"
      role="img"
      aria-label="Bendera Pelangi LGBT (Pride Flag)"
      className={className}
    >
      <title>Bendera Pelangi LGBT</title>
      {/* Tiang bendera */}
      <rect x="6" y="2" width="4" height="92" rx="2" fill="#94A3B8" />
      <circle cx="8" cy="4" r="4" fill="#FFD60A" stroke="#E6B800" strokeWidth="1" />
      {/* Kain bendera berkibar */}
      <g className="pride-flag-wave">
        {STRIPES.map((color, i) => (
          <rect key={color} x="10" y={6 + i * 11} width="88" height="11" fill={color} />
        ))}
        {/* Lipatan cahaya biar terlihat berkibar */}
        <path d="M10 6 Q 34 0 54 6 T 98 6 V 72 Q 74 78 54 72 T 10 72 Z" fill="#ffffff" opacity="0.08" />
      </g>
    </svg>
  );
}
