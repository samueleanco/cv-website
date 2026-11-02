export function Tags({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li className="tag" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
