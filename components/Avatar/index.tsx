export default function Avatar() {
  return (
    <div className="p-1.5 border-4 border-orange-dark rounded-full w-fit cursor-pointer avatar">
      <img className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 object-cover rounded-full grayscale" src="/images/avatar.jpg" alt="avatar-profile" />
    </div>
  );
}
