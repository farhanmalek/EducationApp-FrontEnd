

export default function Checkbox({className,name, handleCheckBoxChange}) {



  return (
    <div className={className}>
            <input type="checkbox" id={name} onChange={() => handleCheckBoxChange(name)} />
            <label htmlFor={name}>{name}</label>
          </div>
  )
}
