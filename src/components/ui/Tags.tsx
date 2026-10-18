interface TagsProps {
  items: string[];
  subtle?: boolean;
}

export function Tags({ items, subtle = false }: TagsProps) {
  return (
    <ul className={`tag-list${subtle ? " tag-list--subtle" : ""}`} aria-label="Technologies and topics">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
