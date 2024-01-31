import { useState } from "react";
import { useEffect } from "react";

const SINGLE_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`

function SelectedContact({ selectedContactId, setSelectedContactId }) {

    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(SINGLE_URL);
                const details = await response.json();
                //console.log(details);
                setContact(details);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
    }, [])

    console.log("Contact: ", contact);

    return (
    <div>Selected Contact View</div>
    );
}

export default SelectedContact;