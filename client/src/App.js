import './App.css';
import { Form } from 'reactstrap';
import TitleField from './components/title-field';
import DescriptionField from './components/description-field';
import SubmitButton from './components/submit-button';
import NotesGroup from './components/notes-group';

function App() {
  return (
    <>
      <Form className="form">
        <TitleField></TitleField>
        <DescriptionField></DescriptionField>
        <SubmitButton></SubmitButton>
      </Form>
      <NotesGroup></NotesGroup>
    </>
  );
}

export default App;
