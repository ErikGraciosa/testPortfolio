import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Main() {

  return (
    <>
      <h1>Projects</h1>
      <p>Below are descriptions of accomplishments while working within Healthcare and Government industries.</p>
      <h3>Healthcare Industry</h3>
      <p>
        <List sx={{ listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}>Updated front end code base to include location cards of physical therapy centers and link to user form.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Built user intake form for users to input contact information with input validations, error messages, and success/error flow.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Enabled mobile experience to have standard softkey board flow.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Integrated FormStack to a client intake flow with custom validation to gather user data</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Enabled user success/error flow and status indicators for enabled Proxy access to another patients health records.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Unit tested and integration tested features using Jest.</ListItem>
        </List>
      </p>
      <h3>State Government Agency</h3>
      <p>
        <List  sx={{ listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}>Built a front end application to enable a disease tracking application used by healthcare workers and state health workers.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Built standard library components using Bootstrap and React to enable resuability and simple updating across the application.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Built buttons, navigation, menus, autocomplete dropdowns, inputs, radio buttons, check boxes to follow specified figma created designs.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Used Mui V5 to build grids and tables to display large schema strict datasets.</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Estimated project epics and stories to meet client defined requirements.</ListItem>
        </List>
      </p>
    </>
  );
}
