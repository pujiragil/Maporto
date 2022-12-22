export default function Menu() {
  return (
    <div className="py-2.5 flex flex-col items-center justify-center gap-8">
      <MenuSwitch />
    </div>
  );
}

function MenuSwitch() {
  return (
    <div className="flex items-center justify-center p-2 bg-switch-light dark:bg-switch-dark rounded-xl">
      <button className="rounded-xl p-4 flex-1">Portfolio</button>
      <button className="rounded-xl p-4 flex-1">Skills</button>
    </div>
  );
}
