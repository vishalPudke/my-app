import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavHome } from "./Pages/NavHome";
import LoginHome from "./Pages/LoginHome";
import Homepage from "./Pages/Homepage";
import Registration from "./Pages/Registration";
import AppDatabase from "./Pages/AppDatabase";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavHome />

        <Routes>
          
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/login" element={<LoginHome />} />

         
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
         
        
          {/* <Route
            path="/todo-list"
            element={
              <ProtectedRoute>
                <MyTodoList />
              </ProtectedRoute>
            }
          /> */}

          <Route
            path="/user-list"
            element={
              <ProtectedRoute>
                <AppDatabase />
              </ProtectedRoute>
            }
          />

          <Route path="/registration" element={<Registration />} />
         

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default App;
