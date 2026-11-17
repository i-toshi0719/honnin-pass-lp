/**
 * 吹き出し用のイラストアイコン。
 * 実在の人物に見えないよう、写真や似顔絵ではなく単純化したフラットな絵柄にしている。
 * 画像に差し替える場合も、実在の人物と誤解されない絵柄にすること。
 */

type Hair = "short" | "long" | "bun" | "cap" | "bob";

type Preset = {
  bg: string;
  skin: string;
  hair: string;
  clothes: string;
  style: Hair;
  glasses?: boolean;
};

const presets: readonly Preset[] = [
  { bg: "#DCE8FA", skin: "#F6D2B8", hair: "#2B2B33", clothes: "#0B2358", style: "short" },
  { bg: "#E3F1E8", skin: "#EFC09F", hair: "#5A3E2B", clothes: "#3F7D5A", style: "cap" },
  { bg: "#FCE9D6", skin: "#F9DCC4", hair: "#7A4E32", clothes: "#2E63BE", style: "long" },
  { bg: "#F6E3EA", skin: "#F6D2B8", hair: "#2B2B33", clothes: "#B4556E", style: "bun" },
  { bg: "#E8E4F6", skin: "#EFC09F", hair: "#4A4A55", clothes: "#475569", style: "short", glasses: true },
  { bg: "#DFF2F2", skin: "#F9DCC4", hair: "#3A2A22", clothes: "#2A7F86", style: "bob" },
];

const FRINGE = "M15 19.5c0-6.2 4-10.5 9-10.5s9 4.300 9 10.500c-2.200-3.400-5.200-5-9-5s-6.800 1.600-9 5z";

function HairBack({ style, color }: { style: Hair; color: string }) {
  if (style === "long") {
    return <path d="M12 21c0-7.500 5.300-12.500 12-12.500S36 13.500 36 21v15H12z" fill={color} />;
  }
  if (style === "bob") {
    return <path d="M13 20.500c0-7 4.900-11.500 11-11.500s11 4.500 11 11.500V29H13z" fill={color} />;
  }
  if (style === "bun") {
    return <circle cx="24" cy="7.500" r="3.800" fill={color} />;
  }
  return null;
}

function HairFront({ style, color, cap }: { style: Hair; color: string; cap: string }) {
  if (style === "cap") {
    return (
      <>
        <path d="M14.500 18.500c0-6 4.200-10 9.500-10s9.500 4 9.500 10z" fill={cap} />
        <rect x="12.500" y="17.300" width="23" height="2.800" rx="1.400" fill={cap} />
      </>
    );
  }
  return <path d={FRINGE} fill={color} />;
}

export default function Avatar({ index }: { index: number }) {
  const preset = presets[index % presets.length];

  return (
    <span
      aria-hidden="true"
      className="block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-900/5 sm:h-11 sm:w-11"
    >
      <svg viewBox="0 0 48 48" className="h-full w-full">
        <rect width="48" height="48" fill={preset.bg} />
        <HairBack style={preset.style} color={preset.hair} />
        <path d="M7 48c0-9.500 7.400-15 17-15s17 5.500 17 15z" fill={preset.clothes} />
        <rect x="21" y="27" width="6" height="8" rx="2.500" fill={preset.skin} />
        <circle cx="24" cy="20" r="9" fill={preset.skin} />
        <HairFront style={preset.style} color={preset.hair} cap={preset.clothes} />
        <circle cx="20.600" cy="21.200" r="1.050" fill="#2B2B33" />
        <circle cx="27.400" cy="21.200" r="1.050" fill="#2B2B33" />
        <path
          d="M21.600 25q2.400 1.900 4.800 0"
          fill="none"
          stroke="#2B2B33"
          strokeWidth="1.100"
          strokeLinecap="round"
        />
        {preset.glasses ? (
          <g fill="none" stroke="#2B2B33" strokeWidth="0.900">
            <circle cx="20.600" cy="21.200" r="2.700" />
            <circle cx="27.400" cy="21.200" r="2.700" />
            <path d="M23.300 21.200h1.400" />
          </g>
        ) : null}
      </svg>
    </span>
  );
}
