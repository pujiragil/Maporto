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
}

function SkillItem({ src, alt }: SkillItemProps) {
  return (
    <div className="w-full group h-52 overflow-hidden relative cursor-pointer rounded-2xl bg-switch-light dark:bg-switch-dark flex justify-center items-center">
      <img
        className="w-16 h-16 md:w-20 md:h-20 object-cover"
        src={src}
        alt={alt}
      />
      <div className="absolute w-full h-full inset-0 flex flex-col text-center justify-center bg-orange-light dark:bg-orange-dark translate-y-[101%] group-hover:translate-y-0 transition-all duration-300 ease-in-out">
        <h2 className="text-2xl">React JS</h2>
      </div>
    </div>
  );
}
