

export default function Checkbox({className,name, handleCheckBoxChange, min,values}) {



  return (
    <div className={className}>
            <input type="checkbox" id={name} onChange={() => handleCheckBoxChange(name,values)} />
            <label htmlFor={name}>{name}</label>
          </div>
  )
}
