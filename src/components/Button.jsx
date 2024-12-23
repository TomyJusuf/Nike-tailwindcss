const Button = ({ label, iconURL }) => {
  return (
    <button className=" flex justify-center items-center gap-2 px-7 py-4 bg-coral-red text-white font-montserrat  leading-none rounded-full">
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" />}
    </button>
  )
}
export default Button
