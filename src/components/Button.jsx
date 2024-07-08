export default function Button({text,func}) {
  return (
    <button onClick={func} className="py-2 px-4 bg-blue-500 shadow-md text-white cursor-pointer rounded-lg font-medium duration-200 hover:bg-blue-700 hover:scale-105">{!text?"Contact Us":text}</button>
  )
}
