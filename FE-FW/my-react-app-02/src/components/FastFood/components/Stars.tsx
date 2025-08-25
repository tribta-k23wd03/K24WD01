type StarProps = {
  value: number;
  max?: number;
  size?: number;
  title: string;
};
function Stars({ value, max = 5, size = 18, title }: StarProps) {
  const full = Math.round(value);
  return (
    <span>
      <span title={title}>{title ?? `Rating ${full}/${max}`}</span>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          style={{ fontSize: size, lineHeight: 1 }}
          dangerouslySetInnerHTML={{
            __html: i < full ? "&starf;" : "&star;",
          }}></span>
      ))}
    </span>
  );
}

export default Stars;
