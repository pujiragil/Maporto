export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 w-full max-w-[464px] md:max-w-none md:w-11/12 lg:w-8/12 gap-8">
      <SkillItem src="/images/react-js.png" alt="react-js-icon" />
      <SkillItem src="/images/tailwind-css.png" alt="tailwind-css-icon" />
      <SkillItem src="/images/material-ui.png" alt="material-ui-icon" />
      <SkillItem src="/images/chakra-ui.png" alt="chakra-ui-icon" />
      <SkillItem src="/images/next-js.png" alt="next-js-icon" />
      <SkillItem src="/images/express-js.png" alt="express-js-icon" />
      <SkillItem src="/images/node-js.png" alt="node-js-icon" />
      <SkillItem src="/images/javascript.png" alt="javascript-icon" />
    </div>
  );
}

interface SkillItemProps {
  src: string;
  alt: string;
  isDark?: boolean;
  darkSrc?: string;
}

function SkillItem({ src, alt, isDark, darkSrc }: SkillItemProps) {
  return (
    <div className="w-full h-52 rounded-2xl bg-switch-light dark:bg-switch-dark flex justify-center items-center">
      {isDark ? (
        <img className="w-16 h-16 md:w-20 md:h-20 object-cover" src={darkSrc} alt={alt} />
      ) : (
        <img className="w-16 h-16 md:w-20 md:h-20 object-cover" src={src} alt={alt} />
      )}
    </div>
  );
}
