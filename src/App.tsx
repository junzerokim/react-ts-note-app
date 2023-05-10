import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hi</h1>} />
      <Route path="/new" element={<h1>New</h1>} />
      <Route path="/:id">
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} /> {/*잘못된 경로로 들어갔을 경우 홈으로 이동*/}
    </Routes>
  );
}

export default App;
