import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Actualiza la hora cada segundo

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

  const options = {
    timeZone: 'Europe/Madrid',
    hour12: 'true',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedTime = time.toLocaleTimeString('es-ES', options).toUpperCase();

  const formattedDate = time.toLocaleDateString("es-ES", {
    weekday: "short",
    month: "short",
    day: "2-digit",
  });

  return `${formattedDate}, ${formattedTime}`;
};

export default Clock;
