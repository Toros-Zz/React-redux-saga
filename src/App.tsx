import { Route, Routes } from 'react-router';
import { Form } from './commponets/Form';
import { Header } from './commponets/Header';
import { Home } from './commponets/Home';
import { PostList } from './commponets/PostList';
import { UserSelector } from './commponets/UserSelector/UserSelector';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPost" element={<Form />} />
        <Route
          path="/list"
          element={
            <>
              <UserSelector />
              <PostList />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
