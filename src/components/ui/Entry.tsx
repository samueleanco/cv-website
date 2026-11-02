import { Tags } from "@/components/ui/Tags";

interface EntryProps {
  period: string;
  title: string;
  organization: string;
  meta?: string;
  description: string;
  tags?: string[];
  tagsLabel?: string;
}

export function Entry({ period, title, organization, meta, description, tags, tagsLabel }: EntryProps) {
  return (
    <article className="entry">
      <p className="mono entry__period">{period}</p>
      <div>
        <h3>
          {title} <span className="entry__org">· {organization}</span>
        </h3>
        {meta && <p className="mono entry__meta">{meta}</p>}
        <p className="desc">{description}</p>
        {tags && tags.length > 0 && <Tags items={tags} label={tagsLabel} />}
      </div>
    </article>
  );
}
