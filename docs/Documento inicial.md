Documento de Requerimientos: Sistema POS SaaS para Pastelerías, Panaderías y Cafeterías (Pequeños Negocios)
Versión: 1.0
Fecha: 20/02/2026
Elaborado para: Desarrollo de aplicación web/móvil
Mercado objetivo: Negocios pequeños en Huancayo, Concepción y zonas similares.

1. Objetivo del sistema
Desarrollar una aplicación web progresiva (PWA) o app móvil/tablet que funcione como Punto de Venta (POS) sencillo, con gestión de productos y reportes básicos. Debe ser fácil de usar, que trabaje sin internet (offline-first) y que se adapte a la forma de trabajar de negocios pequeños que actualmente operan de manera manual.

2. Usuarios del sistema
Dueño / Administrador: Acceso total. Gestiona productos, visualiza reportes, administra la licencia.

Cajero / Empleado: Acceso limitado. Solo puede registrar ventas y ver el catálogo de productos. No puede modificar precios ni ver reportes financieros.

Nota: En negocios pequeños, el dueño y el cajero pueden ser la misma persona, pero el sistema debe permitir ambos roles.

3. Requerimientos funcionales
Módulo 1: Gestión de productos y categorías
ID	Requerimiento	Descripción
P01	Catálogo de productos	El sistema debe permitir crear, editar y eliminar productos. Cada producto debe tener: nombre, precio de venta, categoría, y estado (activo/inactivo).
P02	Categorías	El sistema debe permitir crear y gestionar categorías (ej. Panadería, Pastelería, Bebidas, Cafetería). Un producto solo puede pertenecer a una categoría.
P03	Productos sin variantes	Los productos son simples (un solo precio), sin variantes de tamaño o sabor. Ej. "Pan francés" es un producto con un precio fijo.
P04	Edición de precios	El dueño debe poder modificar precios fácilmente desde el catálogo, en cualquier momento.
P05	Búsqueda rápida	En la pantalla de ventas, debe haber un buscador para encontrar productos rápidamente por nombre.
Módulo 2: Punto de venta (POS)
ID	Requerimiento	Descripción
V01	Registro de venta rápido	Interfaz tipo "botonera" con los productos agrupados por categorías. El cajero toca los productos y se van agregando al carrito.
V02	Carrito de compras	El carrito debe mostrar: lista de productos agregados, cantidades, subtotal por producto y total de la venta.
V03	Ajuste de cantidades	En el carrito, se debe poder aumentar/disminuir la cantidad de un producto o eliminarlo.
V04	Cierre de venta	Al finalizar, el sistema debe mostrar el total a pagar. La venta se confirma con un botón "Cobrar".
V05	Métodos de pago	Al cobrar, se debe registrar el método de pago: Efectivo o Yape. (No maneja tarjetas ni depósitos).
V06	Vuelto (efectivo)	Si el pago es en efectivo, el sistema debe permitir ingresar "Monto con el que paga" y calcular el vuelto automáticamente.
V07	Ventas sin conexión	El sistema debe poder registrar ventas aunque no haya internet. Las ventas se guardan localmente y se sincronizan cuando la conexión se restablezca.
V08	Historial de ventas	El cajero/dueño debe poder ver las ventas del día (a modo de ticket o resumen).
Módulo 3: Reportes y análisis
ID	Requerimiento	Descripción
R01	Reporte de ventas diarias	Mostrar el total de ventas del día, desglosado por método de pago (efectivo vs Yape).
R02	Productos más vendidos	Ranking de productos con mayor cantidad de unidades vendidas en un rango de fechas (hoy, ayer, últimos 7 días, personalizado).
R03	Comparativa simple	Permitir al dueño comparar ventas entre días (ej. "Hoy vs ayer", "Esta semana vs semana pasada").
R04	Exportación básica	Opción de compartir reportes por WhatsApp o guardar como imagen/PDF (para que el dueño lo tenga en su celular).
Módulo 4: Configuración y negocio
ID	Requerimiento	Descripción
C01	Datos del negocio	El sistema debe guardar el nombre del negocio y moneda (Soles). Se mostrará en los reportes.
C02	Gestión de usuarios	El dueño debe poder crear una cuenta para el cajero (con código PIN o acceso sencillo). Máximo 2-3 usuarios por negocio.
C03	Respaldo local	Las ventas deben quedar siempre guardadas en el dispositivo. Posibilidad de exportar todo el historial a un archivo.
4. Requerimientos no funcionales
4.1. Plataforma y dispositivos
ID	Requerimiento
NF01	Enfoque mobile-first: La interfaz debe estar optimizada para celulares y tablets (pantallas táctiles). Debe ser usable en computadoras pero no es la prioridad.
NF02	PWA (Progressive Web App): Debe instalarse como una app desde el navegador, sin pasar por Play Store, y funcionar offline.
NF03	Sincronización offline: Las ventas se guardan en IndexedDB (navegador) y cuando hay internet, se sincronizan automáticamente con el servidor. El proceso debe ser transparente para el usuario.
4.2. Seguridad
ID	Requerimiento
NF04	Autenticación simple: Acceso con usuario y contraseña, o PIN de 4 dígitos para cajeros. No se requiere doble factor.
NF05	Datos locales cifrados: La información de ventas en el dispositivo debe ir cifrada para evitar manipulación si alguien accede al equipo.
NF06	Backups automáticos: En la nube, los datos deben respaldarse diariamente.
4.3. Rendimiento y escalabilidad
ID	Requerimiento
NF07	Ligereza: La app debe abrirse rápidamente en celulares de gama media/baja.
NF08	Almacenamiento local: Soporte para al menos 10,000 transacciones sin degradación del rendimiento.
4.4. Mantenibilidad
ID	Requerimiento
NF09	Código modular: Separación clara entre frontend (app) y backend (API).
NF10	Actualizaciones automáticas: Al ser PWA, la app se actualiza cuando el usuario recarga.
5. Modelo de negocio y administración de licencias
Dado que el pago será en efectivo o Yape (no hay pasarela automática), se requiere un mecanismo manual o semiautomático para gestionar las suscripciones.

Requerimientos de licenciamiento
ID	Requerimiento
L01	Suscripción mensual: El dueño paga 40-50 soles por mes por el uso del sistema.
L02	Control de acceso: El sistema debe tener un módulo de licencias. Al iniciar sesión, la app verifica si la licencia del negocio está activa.
L03	Activación manual: Cuando un cliente paga (efectivo/Yape), el administrador del sistema (tú) debe activar manualmente su licencia por 30 días desde un panel de control.
L04	Recordatorio de vencimiento: La app debe notificar al dueño (con 3-5 días de anticipación) que su licencia está por vencer, y mostrar un mensaje claro con el medio para pagar (número de Yape o indicación de pago en efectivo).
L05	Bloqueo automático: Si la licencia vence, el sistema debe bloquear el acceso al POS (solo mostrar pantalla de renovación), pero sin perder los datos guardados.
L06	Multi-negocio (multi-tenant): Desde el panel de administrador (tuyo), debes poder gestionar N negocios, cada uno con sus propios productos, ventas y configuraciones. Los datos deben estar aislados entre negocios.
6. Tecnologías sugeridas (simples y efectivas)
Dado que buscas algo no complejo pero funcional, esta es una pila tecnológica recomendada:

Frontend (App): React + Vite (para rapidez) convirtiéndolo en PWA con Workbox. O usar Vue 3 con Quasar (bueno para offline y mobile). La interfaz debe ser tipo "launcher" con botones grandes.

Base de datos local en el navegador: IndexedDB (mediante librería como Dexie.js) para guardar ventas offline.

Backend (API y administración): Node.js con Express (liviano) o Python con Flask (simple). La función principal es sincronizar datos y gestionar licencias.

Base de datos en la nube: PostgreSQL (para datos maestros) o MongoDB (si prefieres simplicidad). PostgreSQL es más seguro para transacciones.

Hosting: Para empezar, un VPS pequeño en DigitalOcean o Vultr ($5/mes) o un hosting compartido que soporte Node.js.

Autenticación: JWT (JSON Web Tokens) simple.

Arquitectura de datos offline:

La app descarga los productos y categorías al abrir (si hay internet).

Las ventas se guardan localmente con un flag sync: false.

Un proceso en segundo plano intenta sincronizar cada cierto tiempo. Al sincronizar, envía las ventas al backend y marca como sync: true.

Si no hay internet, las ventas quedan locales y se sincronizan cuando vuelva la conexión.

