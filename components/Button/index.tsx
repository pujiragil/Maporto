export default function MainButton() {
  return (
    <div className="w-full md:w-8/12 flex items-center justify-center gap-3.5 md:gap-7 py-5 text-xs md:text-xl">
      <button className="w-full max-w-[200px] md:max-w-none flex gap-2 items-center justify-center bg-orange-light dark:bg-orange-dark text-primary-three dark:text-secondary-three rounded-xl p-3.5 md:p-5">
        Download
        <img className="w-4 h-4 md:w-6 md:h-6 object-cover" src="/download.svg" alt="download-icon" />
      </button>
      <button className="w-full max-w-[200px] md:max-w-none bg-switch-light dark:bg-switch-dark text-primary-three dark:text-secondary-two rounded-xl p-3.5 md:p-5">
        Contact
      </button>
    </div>
  )
}