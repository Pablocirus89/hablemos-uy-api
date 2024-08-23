import React, { useEffect, useContext} from 'react';
import { Context } from "../store/appContext";

const ElegirEspecialidad = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.fetchEspecialidades();  // Fetch specialties on component mount
    }, []);

    return (
        <div>
            <h1>Elegir Especialidad</h1>
            <select>
                {store.especialidades && store.especialidades.map((especialidad) => (
                    <option key={especialidad.id} value={especialidad.id}>
                        {especialidad.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ElegirEspecialidad;
