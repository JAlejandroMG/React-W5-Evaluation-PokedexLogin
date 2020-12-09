//* El objetivo del ejercicio será usar react router para proteger la ruta /pokedex que mostrará la aplicación hecha en la actividad no. 4, además usaremos firebase para poder habilitar el inicio de sesión en nuestra aplicación.
//* Pueden tomar como base el siguiente proyecto https://gitlab.com/academlo-fullstack-dev/react-router-login


//{ 1. Crear un proyecto en firebase y crea una aplicación web para utilizar el servicio de autenticación, después deberás habilitar los proveedores de inicio de sesión con email y contraseña, Google y Facebook.
//! HECHO
//{ 2. Instala la dependencia de firebase en tu proyecto y crea un archivo de configuración en donde coloques las credenciales que te proporcionó firebase al momento de crear tu aplicación web.
//! HECHO
//{ 3. Exporta el objeto firebase de ese archivo de configuración e impórtalo en los componentes de inicio de sesión y registro.
//! HECHO
//{ 4. Crea un formulario de inicio de sesión y 2 botones adicionales para poder iniciar sesión con Google y Facebook.
//! HECHO
//{ 5. Crea dos funciones para mostrar la ventana emergente de inicio de sesión tanto para Google como Facebook.
//[ a. https://firebase.google.com/docs/auth/web/google-signin
//! HECHO
//[ b. https://firebase.google.com/docs/auth/web/facebook-login
//! HECHO
//{ 6. Crea dos funciones, una para manejar el registro y otra para manejar el inicio de sesión con correo electrónico y contraseña.
//! HECHO
//{ 7. Crea una función y un estado con useState para poder capturar los datos que van ingresando los usuarios para el componente de inicio de sesión y el componente de registro.
//! HECHO
//{ 8. Crea una función para poder autenticar un usuario con correo electrónico y contraseña, para ello deberás pasar los datos que ha capturado el usuario hacía las funciones.
//[ a. https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
//! HECHO
//{ 9. Crea una función para poder registrar un usuario con correo electrónico y contraseña, de igual manera deberás pasarle el correo electrónico y la contraseña ingresados en el formulario.
//[ a. https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
//! HECHO
//{ 10. Crea un estado user para guardar la respuesta de firebase con los datos del usuario cuando haya iniciado sesión correctamente
//! HECHO
//{ 11. Redirecciona al usuario hacía la ruta de /pokedex después de haber actualizado el estado cuando se haya iniciado sesión correctamente con los 3 métodos de inicio de sesión.
//[ a. https://reactrouter.com/web/api/Hooks/usehistory – redireccionar con un el hook useHistory
//! HECHO
//[ b. https://reactrouter.com/web/example/auth-workflow – redireccionar con el componente Redirect
//+ https://reactrouter.com/web/example/auth-workflow Redirect es para renderizado condicional
//{ 12. Protege la ruta para que solo usuarios autenticados puedan acceder a la ruta/pokedex, en caso de que no tenga una sesión iniciada deberás mostrar un mensaje de que necesita iniciar sesión o simplemente puede redireccionar al usuario hacía la ruta de inicio de sesión.
//! HECHO
//{ 13. Coloca la aplicación que hiciste en la actividad no.4 bajo la ruta de pokedex.
//! HECHO
//{ 14. Coloca un menú de navegación donde tengas las paginas de:
//[ a. Inicio (Login)
//! HECHO
//[ b. Registro
//! HECHO
//[ c. Pokedex
//! HECHO
//{ 15. En el menú tendrás que colocar un componente para mostrar los datos del usuario cuando haya iniciado sesión correctamente (nombre e imagen de perfil), en este punto tendrás que usar el renderizado condicional para mostrar el componente únicamente cuando el usuario haya iniciado sesión.
//! HECHO
//{ 16. Habilitar el menú contextual para el componente del punto anterior para mostrar la opción de cerrar sesión y redireccionar al usuario al inicio una vez que haya cerrado sesión.
//[ a. https://firebase.google.com/docs/auth/web/password-auth#next_steps
 //! HECHO

//* Reto (Opcional):
//{ 1. Mantén la sesión iniciada aunque el usuario recargue la página
//!
//[ a. https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
//* Reestablecer estado user en App y actualizar estado con firebase.auth().currentUser en SignIn y en función Logout en UserData
//* Sign in usando promesa con .then
//{ 2. Pasar todos los componentes de clase a componentes funcionales usando hooks.
//! HECHO
//{ 3. Navegar entre la lista del pokedex y el detalle del Pokémon con React router, puedes tomar de ejemplo el siguiente proyecto. https://codesandbox.io/s/cool-lake-eotre
//! HECHO


//+ Entrega en classroom. Al final deberás subir tu solución a github y a netlify, al subir tu aplicación a netlify tendrás que agregar el dominio a firebase para que te permita iniciar sesión desde netlify.
//+ Evaluación
//} a) Navegar entre las rutas – 5 puntos
//} b) Proteger la ruta pokedex – 5 puntos
//} c) Habilitar el inicio de sesión con firebase (Google, Facebook y correo/contraseña) – 30 puntos
//} d) Mostrar la aplicación pokedex sobre la ruta /pokedex – 30 puntos
//} e) Mostrar el componente del perfil de usuario en el Navbar – 20 puntos
//} f) Menú contextual y cerrar sesión – 10 puntos
