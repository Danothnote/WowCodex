import { FC, useRef } from "react";
import { styleClasses } from "../strings/styleClasses";

interface props {
  title: string;
  src: string;
  alt: string;
}

export const SelectionComponent: FC<props> = ({ title, src, alt }) => {
  const componentImg = useRef<HTMLImageElement>(null);
  const componentTitle = useRef<HTMLHeadingElement>(null);

  const handleOnMouseEnter = () => {
    componentTitle.current?.classList.add("text-shadow-[0_0_12px]");
    componentImg.current?.classList.add("drop-shadow-[0_0_20px]");
  };

  const handleOnMouseLeave = () => {
    componentTitle.current?.classList.remove("text-shadow-[0_0_12px]");
    componentImg.current?.classList.remove("drop-shadow-[0_0_20px]");
  };

  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={styleClasses.selectionComponent}
    >
      <img
        ref={componentImg}
        className={styleClasses.selectionImg}
        src={src}
        alt={alt}
      />
      <h2 ref={componentTitle} className={styleClasses.selectionTitle}>
        {title}
      </h2>
    </div>
  );
};
