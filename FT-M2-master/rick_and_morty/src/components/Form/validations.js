export const validator  = ({email, password}) => {
  let errors = {}

  const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!regexEmail.test(email)) {
    errors.email = 'El email es inválido';
  }

  if (!email){
    errors.email = 'El email esta vacio';
  }

  if (email.length > 35){
    errors.email = 'El email es muy largo';
  }

  // si empieza con un numero
  // if (/^[0-9]/.test(password))
  if (!/\d/.test(password)) {
    errors.password = 'La contraseña debe tener numeros';
  }

  if (password.length < 6 || password.length > 10) {
    errors.password = 'La contraseña debe tener al menos 6 y 10 caracteres';
  }

  return errors;
}

