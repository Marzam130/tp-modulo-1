/* Registro.js */
import './styles.css';
import React, { useState } from 'react';
const Registro = () => {
    const [formData, setFormData] = useState ({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        contraseña: '',
        confirmarContraseña: '',
    });

    const[mostrarContraseña, setMostrarContraseña] = useState (false);
    const[mostrarConfirmacion, setMostrarConfirmacion] = useState (false);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
    <div className="registro-container">
        <h1>Create an account</h1>
        <p>Enter your information to register</p>
        <form onSubmit={handleSubmit} className="registro-form">
            <label htmlFor="nombre">First Name</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder= "John" />
            
            <label htmlFor="apellido">Last Name</label>
            <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required placeholder= "Doe" />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder= "john.doe@email.com" />
            
            <label htmlFor="telefono">Phone</label>
            <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required placeholder= "+1(555) 000-0000" />
            
            <label htmlFor="contraseña">Password</label>
            <div className="input-password">
            <input type={mostrarContraseña ? "text" : "password"} id="contraseña" name="contraseña" value={formData.contraseña} onChange={handleChange} required placeholder= "********" />
            <span onClick={() => setMostrarContraseña(!mostrarContraseña)} style={{ cursor: 'pointer' }}>
                {mostrarContraseña ? '👁️' : '👁‍🗨' }
                </span>
                </div>
            <label htmlFor="confirmarContraseña">Confirm Password</label>
            <div className="input-password">
            <input type={mostrarConfirmacion ? "text" : "password"} id="confirmarContraseña" name="confirmarContraseña" value={formData.confirmarContraseña} onChange={handleChange} required placeholder= "********" />
            <span onClick={() => setMostrarConfirmacion(!mostrarConfirmacion)} style={{ cursor: 'pointer' }}>
                {mostrarConfirmacion ? '👁️' : '👁‍🗨' }
            </span>
            </div>
            <button type="submit" className="register-button">Register</button>
        </form>
    </div>
    );
};

export default Registro;