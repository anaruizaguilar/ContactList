import { useState } from "react";
import { useEffect } from "react";
import ContactList from "./ContactList";
import ContactRow from "./ContactRow";


function SelectedContact({ selectedContactId, setSelectedContactId }) {

    const SINGLE_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`

    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(SINGLE_URL);
                const data = await response.json();
                //console.log(data);
                setContact(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
    }, [])

    console.log("Contact: ", contact);

    <ContactList selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>

    return (
    <div className={selectedContactId}>
         <h1>{contact.name}</h1>
    </div>
    );
}

export default SelectedContact;