export default function MainButton() {
  return (
    <div className="w-full flex items-center justify-center gap-3.5 py-5">
      <button className="flex-1 flex gap-2 items-center justify-center bg-orange-light dark:bg-orange-dark text-primary-three dark:text-secondary-three rounded-xl p-3.5">
        Download
        <img className="w-4 h-4 object-cover" src="/download.svg" alt="download-icon" />
      </button>
      <button className="flex-1 bg-switch-light dark:bg-switch-dark text-primary-three dark:text-secondary-two rounded-xl p-3.5">
        Contact
      </button>
    </div>
  )
}