import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SubjectListPage from './pages/SubjectListPage';
import SubjectDetailsPage from './pages/SubjectDetailsPage';
import SectionDetailsPage from './pages/SectionDetailsPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import background from "./05b.jpg";
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat', backgroundSize: "cover", minHeight: "940px", backgroundAttachment: "fixed"
        }}>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>
                    } />
                    <Route
                        exact
                        path="/subjects"
                        element={
                            <PrivateRoute>
                                <SubjectListPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        exact
                        path="/subjects/:id"
                        element={
                            <PrivateRoute>
                                <SubjectDetailsPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        exact
                        path="/sections/:id"
                        element={
                            <PrivateRoute>
                                <SectionDetailsPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        exact
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <ProfilePage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        exact
                        path="/signup"
                        element={
                            <AnonRoute>
                                <SignupPage />
                            </AnonRoute>
                        }
                    />
                    <Route
                        exact
                        path="/login"
                        element={
                            <AnonRoute>
                                <LoginPage />
                            </AnonRoute>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}
export default App;
