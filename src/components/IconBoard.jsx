const IconBoard = ({ size = "18px", color = "#fff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-table"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
    <path d="M3 10h18" />
    <path d="M10 3v18" />
  </svg>
);

export default IconBoard;
