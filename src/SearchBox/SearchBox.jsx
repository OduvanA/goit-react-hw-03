export default function SearchBox({value, onSearch }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} 
      onChange={(event) => onSearch(event.target.value)}></input>      
    </div>
  )
} 