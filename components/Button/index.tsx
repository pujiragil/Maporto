export default function MainButton() {
  return (
    <div className="w-full md:w-7/12 lg:w-5/12 flex items-center justify-center gap-3.5 md:gap-7 py-2 md:py-2.5 text-xs md:text-sm lg:text-base">
      <button className="primary-button">
        Download
        <img className="w-4 h-4 md:w-5 md:h-5 object-cover" src="/download.svg" alt="download-icon" />
      </button>
      <button className="secondary-button">
        Contact
      </button>
    </div>
  )
}