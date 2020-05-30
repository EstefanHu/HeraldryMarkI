import React, { useState } from 'react';

export const LocationContext = React.createContext({
  community: null,
  setCommunity: () => null
});

export const LocationProvider = ({ children }) => {
  const [community, setCommunity] = useState(null);

  return (
    <LocationContext.Provider value={{
      community,
      setCommunity: newCommunity => setCommunity(newCommunity),
      updateCommunity: () => {
        fetch('http://ip-api.com/json')
          .then(res => res.json())
          .then(res => {
            setCommunity(res.city)
          })
          .catch(console.error)
      }
    }}>
      {children}
    </LocationContext.Provider>
  )
}