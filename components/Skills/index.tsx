export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 w-full max-w-[464px] md:max-w-none md:w-11/12 lg:w-8/12 gap-8">
      <SkillItem title="React JS" desc="React JS is hands-down the best JavaScript library I've ever used for building gorgeous, smooth-running UI. The only downside is the occasional side effect, but it's a small price to pay for such an amazing tool!" src="/images/react-js.png" alt="react-js-icon" />
      <SkillItem title="Tailwind CSS" desc="Tailwind CSS is a game-changer for styling UI, especially for beginners like me. It makes the process so effortless and intuitive!" src="/images/tailwind-css.png" alt="tailwind-css-icon" />
      <SkillItem title="Material UI" desc="makan bang" src="/images/material-ui.png" alt="material-ui-icon" />
      <SkillItem title="Chakra UI" desc="makan bang" src="/images/chakra-ui.png" alt="chakra-ui-icon" />
      <SkillItem title="Next JS" desc="makan bang" src="/images/next-js.png" alt="next-js-icon" />
      <SkillItem title="Express JS" desc="makan bang" src="/images/express-js.png" alt="express-js-icon" />
      <SkillItem title="Node JS" desc="makan bang" src="/images/node-js.png" alt="node-js-icon" />
      <SkillItem title="Javascript" desc="makan bang" src="/images/javascript.png" alt="javascript-icon" />
    </div>
  );
}

interface SkillItemProps {
  title: string;
  desc: string;
  src: string;
  alt: string;
}

function SkillItem({ src, alt, title, desc }: SkillItemProps) {
  return (
    <div className="w-full group h-52 overflow-hidden relative cursor-pointer rounded-2xl bg-switch-light dark:bg-switch-dark flex justify-center items-center">
      <img
        className="w-16 h-16 md:w-20 md:h-20 object-cover"
        src={src}
        alt={alt}
      />
      <div className="absolute p-4 gap-4 w-full h-full inset-0 flex flex-col text-center justify-center items-center bg-orange-light dark:bg-orange-dark translate-y-[101%] group-hover:translate-y-0 transition-all duration-300 ease-in-out text-primary-three dark:text-secondary-three">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
