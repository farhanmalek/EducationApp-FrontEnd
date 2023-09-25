

export default function Checkbox({className,name}) {



  return (
    <div className={className}>
            <input type="checkbox" id={name} />
            <label htmlFor={name}>{name}</label>
          </div>
  )
}
