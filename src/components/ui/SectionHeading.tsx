import React from "react";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  subtitle,
  title,
  align = "center",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const alignStyle = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = light ? "text-white" : "text-text-main";
  
  return (
    <div className={`flex flex-col gap-2 ${alignStyle} ${className}`}>
      <span className="text-primary font-semibold text-sm uppercase tracking-wider">
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} max-w-2xl leading-tight`}>
        {title}
      </h2>
    </div>
  );
}
