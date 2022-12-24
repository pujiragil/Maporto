export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 w-full max-w-[464px] md:max-w-none md:w-11/12 lg:w-8/12 gap-8">
      <SkillItem
        title="React JS"
        desc="React.js is hands-down the best JavaScript library I've ever used for building gorgeous, smooth-running UI."
        src="/images/react-js.png"
        alt="react-js-icon"
      />
      <SkillItem
        title="Tailwind CSS"
        desc="Tailwind CSS is a game-changer for styling UI, especially for beginners like me. It makes the process so effortless and intuitive!"
        src="/images/tailwind-css.png"
        alt="tailwind-css-icon"
      />
      <SkillItem
        title="Material UI"
        desc="Material UI designed to be used with the React JavaScript framework, and it offers a simple and intuitive API for building user interfaces. "
        src="/images/material-ui.png"
        alt="material-ui-icon"
      />
      <SkillItem
        title="Chakra UI"
        desc="Chakra UI is a modern, modular, and accessible design system for building user interfaces. Designed to be lightweight and easy to use."
        src="/images/chakra-ui.png"
        alt="chakra-ui-icon"
      />
      <SkillItem
        title="Next JS"
        desc="Next.js is an amazing React framework for building SPAs, with features like SSR, SSG, and ISR. It's easy to use, even for beginners like me."
        src="/images/next-js.png"
        alt="next-js-icon"
      />
      <SkillItem
        title="Express JS"
        desc="Although I love working on the frontend, I've been diving into Express.js lately and I've been blown away by how easy and flexible it is to use."
        src="/images/express-js.png"
        alt="express-js-icon"
      />
      <SkillItem
        title="Node JS"
        desc="Node.js is a powerful JavaScript runtime that lets you run JavaScript code outside of a web browser, making it easy to build scalable network applications."
        src="/images/node-js.png"
        alt="node-js-icon"
      />
      <SkillItem
        title="Javascript"
        desc="JavaScript is the first programming language I used to build interactive websites. It's a powerful client-side scripting language."
        src="/images/javascript.png"
        alt="javascript-icon"
      />
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
    <div className="w-full group h-52 lg:h-60 overflow-hidden relative cursor-pointer rounded-2xl bg-switch-light dark:bg-switch-dark flex justify-center items-center">
      <img
        className="w-16 h-16 md:w-20 md:h-20 object-cover"
        src={src}
        alt={alt}
      />
      <div className="absolute p-4 gap-4 w-full h-full inset-0 flex flex-col text-center justify-center items-center bg-gradient-to-br from-orange-dark to-orange-light translate-y-[101%] group-hover:translate-y-0 transition-all duration-300 ease-in-out text-primary-three dark:text-secondary-three">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
}
