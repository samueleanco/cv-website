interface ArrowLinkProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

export function ArrowLink({ href, external = false, children }: ArrowLinkProps) {
  return (
    <a
      className="link"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span className="arrow" aria-hidden="true">↗</span>
    </a>
  );
}
