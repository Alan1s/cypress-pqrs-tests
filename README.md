# Prueba QA – Módulo PQRS | EPS SURA
**Autora:** Alanís Forero

---

## Descripción General

El módulo PQRS permite a usuarios no autenticados registrar solicitudes de tipo petición, queja, reclamo o sugerencia a través de un formulario web en la página de SURA. El formulario presenta comportamiento dinámico según la opción seleccionada, incluyendo la habilitación o modificación de campos. Cuenta con validaciones de obligatoriedad y formato, visualización de mensajes de error ante datos incorrectos o incompletos, y confirmación de envío exitoso de la solicitud.

---

## Casos de Prueba

### TC 01 – Prueba Funcional | Envío exitoso de solicitud PQRS con datos válidos

| Campo | Detalle |
|---|---|
| **Descripción** | Verificar que el sistema permite el envío exitoso de una solicitud PQRS cuando todos los campos obligatorios son diligenciados correctamente, incluyendo la aceptación del tratamiento de datos personales y validación de reCAPTCHA. |
| **Given** | El usuario está en el módulo de PQRS. El formulario se encuentra disponible para su diligenciamiento. |
| **When** | El usuario completa los datos requeridos: tipo de comentario: QUEJA · causa: SOLICITAR Y CANCELAR CITAS · medio de respuesta: CORREO ELECTRÓNICO · TI: CÉDULA · CC: 1234567890 · nombres: Papaíto Prueba · apellido: Gpt Prueba · correo: papaitogpt@gmail.com · ciudad: BOGOTÁ D.C. · comentarios: "No me fue posible agendar la cita acordada con mi médico." Marca la casilla de tratamiento de datos personales, completa el reCAPTCHA y hace clic en "Enviar". |
| **Then** | El sistema envía la solicitud exitosamente, redirige a una ventana con mensaje de aprobación, genera número de radicado y no presenta mensajes de error. |
| **Prioridad** | 🔴 ALTA |

---

### TC 02 – Prueba Funcional | Adjuntar archivo a una solicitud PQRS

| Campo | Detalle |
|---|---|
| **Descripción** | Verificar que el sistema permite cargar un archivo válido en el formulario PQRS y lo muestra correctamente para su gestión. |
| **Given** | El usuario está en el módulo de PQRS. La opción de anexar archivos se encuentra disponible. |
| **When** | El usuario hace clic en "clic aquí" → se abre la ventana de carga → hace clic en "Seleccionar archivo" → selecciona un archivo → hace clic en "Adjuntar archivo". |
| **Then** | El sistema carga el archivo, se visualiza el nombre en pantalla, permite la opción de eliminar el archivo adjunto y no presenta mensajes de error. |
| **Prioridad** | 🔴 ALTA |

---

### TC 03 – Prueba Negativa | Envío fallido por falta de autorización de datos personales

| Campo | Detalle |
|---|---|
| **Descripción** | Verificar que el sistema no permite enviar una solicitud PQRS cuando el usuario no acepta el tratamiento de datos personales. |
| **Given** | El usuario está en el módulo de PQRS. La opción de autorización de datos personales se encuentra disponible. |
| **When** | El usuario completa todos los campos obligatorios con datos válidos, **NO** hace clic en la opción "Autorizo el tratamiento de mis datos" y hace clic en "Enviar". |
| **Then** | El sistema bloquea el envío, presenta un mensaje de error indicando la falta de autorización de datos personales y el usuario permanece en la página de "escríbenos". |
| **Prioridad** | 🔴 ALTA |

---

### TC 04 – Prueba de Usabilidad / Validación Visual | El formulario es claro y comprensible

| Campo | Detalle |
|---|---|
| **Descripción** | Verificar que el formulario PQRS presenta etiquetas visibles, placeholders informativos y controles claramente identificables en vista desktop. |
| **Given** | El usuario abre la página del formulario en un navegador desktop (1920x1080px) y no ha interactuado con ningún elemento. |
| **When** | El usuario no interactúa con ningún campo y realiza scroll vertical hasta visualizar la totalidad del formulario. |
| **Then** | Los campos tienen etiquetas visibles · placeholders informativos acordes al tipo de dato · el botón "Enviar" es visible y claro · se identifican visualmente los campos obligatorios (ej: asterisco `*`) · no presenta elementos superpuestos, cortados o ilegibles. |
| **Prioridad** | 🟡 BAJA |

---

### TC 05 – Prueba Smoke | El sistema carga el formulario de solicitud correctamente

| Campo | Detalle |
|---|---|
| **Descripción** | Verificar que el sistema responde y que la página "escríbenos" está disponible con su formulario esperado. |
| **Given** | El usuario se encuentra en la página principal de SURA: [https://www.epssura.com/](https://www.epssura.com/). |
| **When** | El usuario navega a: [https://www.epssura.com/escribenos](https://www.epssura.com/escribenos). |
| **Then** | La página carga en menos de 3 segundos · presenta campos y controles correctamente renderizados · carga el formulario PQRS con su información · no hay errores en consola. |
| **Prioridad** | 🚨 CRÍTICA |

---

## Documentación de Bugs

### 🐛 BUG-01 – Validación incorrecta en el campo "¿Cómo te llamas?" permite números

| Campo | Detalle |
|---|---|
| **Tipo** | Funcional |
| **Título** | Validación incorrecta en el campo "¿Cómo te llamas?" permite números |
| **Descripción** | Al enviar el formulario con el nombre compuesto solo por números, el formulario no se bloquea y permite realizar la solicitud, entregando número de radicado y mensaje de envío exitoso. |
| **Pasos para reproducir** | 1. Ir a [https://www.epssura.com/escribenos](https://www.epssura.com/escribenos) <br>2. Completar el formulario con: tipo: QUEJA · causa: SOLICITAR Y CANCELAR CITAS · medio: CORREO ELECTRÓNICO · TI: CÉDULA · CC: 1234567890 · **Primer nombre: 12345** · **Segundo nombre: 6789** · Apellido: Gpt Prueba · correo: papaitogpt@gmail.com · ciudad: BOGOTÁ D.C. · comentarios: "No me fue posible agendar la cita acordada con mi médico."<br>3. Marcar la casilla de tratamiento de datos personales<br>4. Completar el reCAPTCHA<br>5. Hacer clic en "Enviar" |
| **Resultado Esperado** | El sistema bloquea el envío y muestra un mensaje de error indicando que debe ingresar un nombre válido. |
| **Resultado Obtenido** | El sistema envía la solicitud exitosamente, genera número de radicado y no presenta mensajes de error. |
| **Severidad** | 🟠 Media |
| **Evidencia** | Captura en el Word |

---

### 🐛 BUG-02 – Falta de indicación visual de obligatoriedad en autorización de datos personales

| Campo | Detalle |
|---|---|
| **Tipo** | Usabilidad |
| **Título** | Falta de indicación visual de obligatoriedad en autorización de datos personales |
| **Descripción** | La casilla de autorización de tratamiento de datos personales no se muestra como obligatoria (no presenta asterisco u otro indicador visual). Sin embargo, el sistema exige su aceptación para el envío, generando inconsistencia y posible confusión para el usuario. |
| **Pasos para reproducir** | 1. Ir a [https://www.epssura.com/escribenos](https://www.epssura.com/escribenos) <br>2. Completar todos los campos obligatorios con datos válidos<br>3. **NO marcar** la casilla de autorización de datos personales<br>4. Completar el reCAPTCHA<br>5. Hacer clic en "Enviar" |
| **Resultado Esperado** | El sistema envía la solicitud exitosamente y genera número de radicado. *(Esperado según la ausencia de indicador obligatorio)* |
| **Resultado Obtenido** | El sistema bloquea el envío con el mensaje: *"Su solicitud no ha sido procesada. Para radicar el caso debe aceptar los términos y condiciones."* |
| **Severidad** | 🟠 Media |
| **Evidencia** | Captura en el Word |

---

## Automatización Básica

El test tiene como objetivo validar la navegación hacia el módulo de PQRS dentro del sitio web de SURA. Se accede a la ruta correspondiente y se verifica que la URL sea correcta. Posteriormente, se valida la existencia de un elemento clave en la página, como el botón de consulta de PQRS. Finalmente, se comprueba que el iframe que contiene el formulario esté presente en el DOM. Esto permite confirmar que la sección carga correctamente para el usuario.

---

## Uso de IA

### ¿En qué parte de la prueba se usó inteligencia artificial?

Se utilizaron distintas herramientas de IA como apoyo durante el desarrollo:

- **ChatGPT** – Para mejorar la redacción de ideas, estructurar los objetivos del test y reforzar conceptos de Cypress.
- **Claude AI** – Para generar guías de estudio sobre temas con vacíos de conocimiento en QA y testing.
- **GitHub Copilot** – Como apoyo dentro de Visual Studio Code para agilizar la escritura de comentarios y funciones básicas.

### ¿Qué se hizo directamente (criterio humano)?

El enfoque del test, su estructura y las validaciones implementadas responden a un análisis propio. Las decisiones sobre qué elementos validar y cómo abordarlos se definieron con base en criterios de prueba, comprensión del comportamiento del sistema y cursos tomados durante el transcurso de la prueba.

La IA se utilizó como apoyo puntual para resolver dudas y complementar información, **sin sustituir el análisis necesario para la construcción del test.**

### ¿Qué riesgos hay en depender completamente de IA para QA?

Depender completamente de la IA puede generar riesgos, ya que sus respuestas pueden contener errores o carecer de contexto suficiente. Además, puede llevar a una pérdida de criterio crítico si no se validan sus resultados. También existe un riesgo en el manejo de información sensible, ya que no todas las herramientas garantizan total seguridad.
Por estas razones, la IA debe utilizarse como una herramienta de apoyo, pero no como sustituto del análisis humano en QA.
