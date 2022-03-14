import { Form } from './commponets/Form';
import { PostList } from './commponets/PostList';
import { UserSelector } from './commponets/UserSelector/UserSelector';

function App() {
  return (
    <div className="App">
      <Form />
      <UserSelector />
      <PostList />
    </div>
  );
}

export default App;
