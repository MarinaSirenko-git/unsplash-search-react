import './input.css'

function Input({placeholder, handleChange, value}){
  return (
    <input
      type='text'
      className="input"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  )
}

export default Input;