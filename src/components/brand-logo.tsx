import Image from "next/image";

export function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/elite-logo.png"
      alt="Elite Solution"
      width={839}
      height={288}
      priority={priority}
      className={`brand-logo ${className}`.trim()}
      style={{ width: "auto", height: "auto" }}
    />
  );
}
