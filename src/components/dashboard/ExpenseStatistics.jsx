import SectionCard from "../ui/SectionCard";
import SectionHeading from "../ui/SectionHeading";

const expenseData = [
  { label: "Entertainment", value: 30, color: "#2B3467" },
  { label: "Bill Expense", value: 15, color: "#FF8A00" },
  { label: "Others", value: 35, color: "#1B1BF2" },
  { label: "Investment", value: 20, color: "#EE00EE" },
];

const SIZE = 340;
const CENTER = SIZE / 2;
const RADIUS = 148;
const EXPLODE = 9; 
const LABEL_RADIUS_RATIO = 0.56; 

function pointOnCircle(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function buildSlices(data) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulativeAngle = 0;

  return data.map((item) => {
    const sweep = (item.value / total) * 360;
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + sweep;
    const midAngle = (startAngle + endAngle) / 2;
    cumulativeAngle = endAngle;

    
    const dir = pointOnCircle(0, 0, 1, midAngle);
    const offsetX = dir.x * EXPLODE;
    const offsetY = dir.y * EXPLODE;

    const cx = CENTER + offsetX;
    const cy = CENTER + offsetY;

    const start = pointOnCircle(cx, cy, RADIUS, startAngle);
    const end = pointOnCircle(cx, cy, RADIUS, endAngle);
    const largeArcFlag = sweep > 180 ? 1 : 0;

    const path = [
      `M ${cx} ${cy}`,
      `L ${start.x} ${start.y}`,
      `A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
      "Z",
    ].join(" ");

    const labelPoint = pointOnCircle(
      cx,
      cy,
      RADIUS * LABEL_RADIUS_RATIO,
      midAngle
    );

    return { ...item, path, labelPoint };
  });
}

export default function ExpenseStatistics() {
  const slices = buildSlices(expenseData);

  return (
    <SectionCard className="h-full flex flex-col">
      <SectionHeading title="Expense Statistics" />

      <div className="flex-1 flex items-center justify-center min-h-[260px]">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full max-w-[320px] h-auto"
          role="img"
          aria-label="Expense statistics breakdown by category"
        >
          {slices.map((slice) => (
            <path
              key={slice.label}
              d={slice.path}
              fill={slice.color}
              stroke="#ffffff"
              strokeWidth={2}
              strokeLinejoin="round"
            />
          ))}

          {slices.map((slice) => (
            <text
              key={`${slice.label}-label`}
              x={slice.labelPoint.x}
              y={slice.labelPoint.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#ffffff"
            >
              <tspan x={slice.labelPoint.x} dy="-0.35em" fontSize="17" fontWeight="700">
                {slice.value}%
              </tspan>
              <tspan x={slice.labelPoint.x} dy="1.35em" fontSize="11.5" fontWeight="500">
                {slice.label}
              </tspan>
            </text>
          ))}
        </svg>
      </div>
    </SectionCard>
  );
}