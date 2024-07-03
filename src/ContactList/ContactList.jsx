import Contact from "../Contact/Contact"

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul> 
  );
} 