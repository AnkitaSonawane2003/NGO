import React, { createContext } from 'react';

export const VolunteerContext = createContext(null);

const VolunteerProvider = ({ children, value }) => {
    return (
        <VolunteerContext.Provider value={value}>
            {children}
        </VolunteerContext.Provider>
    );
};

export default VolunteerProvider;
