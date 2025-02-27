import css from "./SearchBox.module.css"


export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input className={css.input} type="text" value={value} 
      onChange={(event) => onSearch(event.target.value)}></input>      
    </div>
  )
} 