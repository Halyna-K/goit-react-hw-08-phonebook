import Title from '../../Title/Title';
import ContactForm from '../../ContactForm/ContactForm'
import ContactList from "../../ContactList/ContactList";
import Filter from "../../Filter/Filter";


const Contacts = () => {
    return (
      <>
      <Title text="Contacts" />
      <ContactForm/>
      <Filter/>
      <ContactList/>
      </>
    );
  };
  export default Contacts;
