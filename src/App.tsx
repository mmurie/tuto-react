import { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import { defaultState, UserContext } from "./UserContext";
const App = () => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>

      <UserContext.Provider value={value ? value : defaultState}>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="*" element={<Home />}> </Route> {/*404*/}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;