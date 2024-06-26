import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TurboEscala from '../../components/ui/turboEscala';
import Footer from '../../components/shared/footer/footer';
import { auth } from '../../FireBase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const EmployeeLogin = ({ setShowNavBarAndFooter }) => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setShowNavBarAndFooter(false);

        return () => setShowNavBarAndFooter(true);
    }, [setShowNavBarAndFooter]);

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = 'http://localhost:5173/employeeView';
        } catch (error) {
            console.error(error);
            setError('Credenciales incorrectas. Verifica tu email y contraseña.');
            clearFormFields();
        }
    };

    const clearFormFields = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <div className="hide-navbar-footer">
            <nav className="bg-white p-4">
                <div className="flex justify-center">
                    <div className="text-2xl">
                        <TurboEscala className="w-32 h-32" />
                    </div>
                </div>
            </nav>

            <div className="container mx-auto p-4">
                <div className="flex flex-col items-start w-full max-w-sm mx-auto">
                    <h2 className="text-2xl mb-4 border-b-2 font-bold border-black w-full">Iniciar sesión como empleado</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <label className="text-gray-700 w-full font-bold">Email</label>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4 p-4 border border-gray-300 rounded w-full"
                    />
                    <label className="text-gray-700 w-full font-bold">Contraseña</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 p-4 border border-gray-300 rounded w-full"
                    />
                    <button 
                        onClick={handleSignIn}
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

EmployeeLogin.propTypes = {
    setShowNavBarAndFooter: PropTypes.func.isRequired,
};

export default EmployeeLogin;
