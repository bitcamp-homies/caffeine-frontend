import FindStore from 'components/stores_test/FindStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cafe/list" element={<FindStore/>}></Route>
        <Route path="/cafe/list/:cafename" element={<FindStore/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
