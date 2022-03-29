import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Eren",
      phone_number: "05079654423",
    },
    {
      fullname: "Erol",
      phone_number: "05078949225",
    },
    {
      fullname: "Deneme",
      phone_number: "05558496512",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container"> 
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}
export default Contacts;
