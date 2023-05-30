const botonAceptarCokies = document.getElementById('Accet-cookies');
const avisoCookies = document.getElementById('mensaje-de-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

    botonAceptarCokies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');
    })
const BotonMostrarMás = document.getElementById('buttom-premium-1');
const Mensaje1 = document.getElementById('Mensaje-descuento');
const CartaPremiumAnual = document.getElementById('premium-annual');
    BotonMostrarMás.addEventListener('click', () => {
    Mensaje1.classList.remove('premium-anual');
    CartaPremiumAnual.classList.remove('premium-annual');
    });
    
    const BotonMostrar = document.getElementById('buttom-student');
    const Mensaje2 = document.getElementById('navigator2');
    const CartaPremiumStudent = document.getElementById('premium-student');
    
    BotonMostrar.addEventListener('click', () => {
    Mensaje2.classList.remove('premium-student');
    CartaPremiumStudent.classList.remove('premium-student');
    })