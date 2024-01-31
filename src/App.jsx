import { useState } from "react";
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact";
import './App.css'



function App() {

const [selectedContactId, setSelectedContactId]=useState(null);

  return (
    <>
      {selectedContactId ? (
      < SelectedContact selectedContactId={setSelectedContactId}/>)
      : ( <ContactList />)
}
    </>
  );
}

export default App
