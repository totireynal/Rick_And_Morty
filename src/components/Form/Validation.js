
const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
const regexPassword = /^(?=\w\d)(?=\w[A-Z])(?=\w*[a-z])\S{6,10}$/i;

export const validation = (userData) => {
    const errors = {};
    
    if (!regexUsername.test(userData.username)){
        errors.username = 'El correo electrónico ingresado es incorrecto';
    } 
        
    if (!regexPassword.test(userData.password)) {
        errors.password = 'La contraseña ingresada es incorrecta';
    }
 return errors;
}


