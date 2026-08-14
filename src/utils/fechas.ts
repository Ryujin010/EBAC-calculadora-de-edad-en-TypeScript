/**
 * Valida el formato YYYY-MM-DD y descompone la fecha en sus partes numéricas.
 * @param fechaTexto - Fecha en formato "YYYY-MM-DD"
 * @returns Un objeto con año, mes (1-12) y día
 */

export function parsearFecha(fechaTexto: string): { anio: number; mes: number; dia: number } {
  const formatoValido: RegExp = /^\d{4}-\d{2}-\d{2}$/;

  if (!formatoValido.test(fechaTexto)) {
    throw new Error(`Formato inválido : "${fechaTexto}". Usa el formato YYYY-MM-DD.`);
  }

  const [anioTexto, mesTexto, diaTexto] = fechaTexto.split("-");
  const anio: number = Number(anioTexto);
  const mes: number = Number(mesTexto);
  const dia: number = Number(diaTexto);

  return { anio, mes, dia };
}

/**
 * Calcula la edad de una persona a partir de su fecha de nacimiento.
 * @param fechaNacimiento - Fecha en formato "YYYY-MM-DD"
 * @returns La edad en años completos
 */

export function calcularEdad(fechaNacimiento: string): number {
  const { anio, mes, dia } = parsearFecha(fechaNacimiento);

  // new Date usa mes en base 0 (enero = 0), por eso restamos 1
  
  const nacimiento: Date = new Date(anio, mes - 1, dia);

  // Detecta días inexistentes (ej. 29 de febrero en año no bisiesto).
  // Ya que si JS "corrigió" la fecha silenciosamente, los valores no coincidirán.
  
  const fechaFueCorregida: boolean =
    nacimiento.getFullYear() !== anio ||
    nacimiento.getMonth() !== mes - 1 ||
    nacimiento.getDate() !== dia;

  if (fechaFueCorregida) {
    throw new Error(`La fecha "${fechaNacimiento}" no existe en el calendario.`);
  }

  const hoy: Date = new Date();

  // Rechazo de fechas de nacimiento futuras.
  
  if (nacimiento > hoy) {
    throw new Error(`La fecha "${fechaNacimiento}" está en el futuro.`);
  }

  let edad: number = hoy.getFullYear() - nacimiento.getFullYear();

  const mesActual: number = hoy.getMonth();
  const mesNacimiento: number = nacimiento.getMonth();
  const diaActual: number = hoy.getDate();
  const diaNacimiento: number = nacimiento.getDate();

  const aunNoCumpleAnios: boolean =
    mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && diaActual < diaNacimiento);

  if (aunNoCumpleAnios) {
    edad--;
  }

  return edad;
}