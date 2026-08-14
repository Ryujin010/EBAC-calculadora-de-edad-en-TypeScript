import { calcularEdad } from "./utils/fechas";

// --- Zona de pruebas manuales ---

const fechasDePrueba: string[] = [
  "1985-07-30", // caso normal
  "2028-01-01", // fecha futura → debe fallar
  "invalid-date", // formato inválido → debe fallar
  "1995-02-29", // año no bisiesto → debe fallar
  "2001-02-29", // año no bisiesto → debe fallar
  "2000-02-29", // año SÍ bisiesto → debe funcionar
];

fechasDePrueba.forEach((fecha: string) => {
  try {
    const edad: number = calcularEdad(fecha);
    console.log(`Fecha de nacimiento : ${fecha} → Edad : ${edad} años`);
  } catch (error : unknown) {
    if (error instanceof Error) {
      console.error(`❌ ${error.message}`);
    } else {
      console.error("Ocurrió un ERROR desconocido:", error);
    }
  }
});