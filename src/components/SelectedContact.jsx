import { useState } from "react";
import { useEffect } from "react";
import ContactList from "./ContactList";

const dummyContact = [
    {id: 1, name: "Suffy", username: "Jellyroll", website: "gaston.us"}
]

function SelectedContact({ selectedContactId, setSelectedContactId }) {

    const SINGLE_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`

    const [contact, setContact] = useState(dummyContact);

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
    <div>
        <table>
            <thead>
                <tr>
                    <th colSpan="10">{contact.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{contact.username}</td>
                </tr>
                <tr>
                    <td>{contact.email}</td>
                </tr>
                <tr>
                    <td>{contact.website}</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default SelectedContact;