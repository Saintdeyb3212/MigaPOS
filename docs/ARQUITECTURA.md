# Arquitectura del Proyecto POS SaaS

## Estructura General

- **backend/**: Lógica de backend, configuración de Firebase Functions, documentación de base de datos.
- **frontend/**: Aplicación React (PWA), módulos de negocio, assets, configuración y conexión a Firebase.
- **shared/**: Utilidades o recursos compartidos (si se requieren).
- **docs/**: Documentación del proyecto.

## Tecnologías
- React (PWA)
- Firebase (Firestore, Auth, Functions, Hosting, Offline)

## Descripción de Carpetas

### backend/
- `src/`: Código fuente de funciones (si se usan Firebase Functions).
- `modules/`: Lógica de negocio reutilizable.
- `config/`: Configuración de Firebase.
- `database/`: Documentación de la estructura de Firestore y reglas.

### frontend/
- `src/`: Código fuente React, punto de entrada y componentes principales.
- `modules/`: Módulos de negocio y vistas.
- `assets/`: Imágenes, íconos, recursos estáticos.
- `config/`: Configuración específica del frontend.

### shared/
- Utilidades, tipos o recursos compartidos.

## Notas
- No se requiere backend propio, todo se gestiona con Firebase.
- Los reportes se generan en frontend, pero pueden migrar a funciones si crecen en complejidad.
- El soporte offline se logra con Firestore y PWA.
