# Calculadora de Edad en TypeScript

Proyecto de práctica con TypeScript y npm: calcula la edad de una persona a partir de su fecha de nacimiento (formato `YYYY-MM-DD`), con validaciones de formato, fechas inexistentes (ej. 29 de febrero en años no bisiestos) y fechas futuras.

## 📂 Estructura
src/
├── app.ts # Punto de entrada, ejecuta pruebas manuales
└── utils/
└── fechas.ts # Lógica de parsearFecha y calcularEdad

## 🚀 Cómo ejecutar

1. Instala las dependencias:
```bash
   npm install
```

2. Compila el proyecto:
```bash
   npx tsc
```

3. Ejecuta el resultado compilado:
```bash
   node dist/app.js
```

   O, alternativamente, ejecuta directo sin compilar (requiere `tsx`):
```bash
   npx tsx src/app.ts
```

## ✅ Casos de prueba cubiertos

- Fecha válida normal
- Fecha futura (rechazada)
- Formato inválido (rechazado)
- Días inexistentes en años no bisiestos, ej. `1995-02-29` (rechazado)
- Años bisiestos válidos, ej. `2000-02-29` (aceptado)
