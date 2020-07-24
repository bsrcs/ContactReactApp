import React from "react";
import contacts from "../contacts";
import Card from "./Card";
import Avatar from "./Avatar";

// when this function called it gets passed over a single contact
// such as contact[0]
function createCard(contact) {
  //return a custom card component
  // get hold of the properties
  // key property must be unique across all the repeated components
  return( 
    <Card 
      id={contact.id}
      key= {contact.id}
      name={contact.name}
      img={contact.imageURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar img="https://image.flaticon.com/icons/png/512/53/53094.png" />

      {/* 
       tap into "contacts" array & pass entire "createCard" func into map func
       map func loops through the array "contacts" & for every single item that
       exists in the array, it calls "createCard" func & pass over each of the objects
      */} 
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
