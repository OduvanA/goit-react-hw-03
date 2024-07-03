export default function Contact({ data: { name, number } }) {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button>Delete</button>
    </div>
  )

} 