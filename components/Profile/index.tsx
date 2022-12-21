import Avatar from "../Avatar";
import Switch from "../Switch";

export default function Profile() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <Switch/>
      <div className="flex flex-col gap-10 items-center">
        <Avatar/>
        <Information/>
      </div>
    </div>
  )
}

const Information = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center">
        <h1 className="text-primary-one dark:text-secondary-one text-2xl mb-2">Puji Ragil Setyo G</h1>
        <p className="text-primary-two dark:text-secondary-two text-sm">Frontend Engineer</p>
      </div>
    </div>
  )
}