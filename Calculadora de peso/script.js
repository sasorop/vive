// Datos de razas y lógica mínima
const datosPerros = {
    chihuahua: {
        nombre: "Chihuahua",
        comida_ideal: "Pienso para razas pequeñas (croqueta pequeña), proteína 26-30%, control de grasa.",
        variantes: [
            "Pienso seco para razas pequeñas (alto en proteína)",
            "Comida húmeda como complemento (salsas ligeras)",
            "Snacks bajos en grasa y adaptados a dientes pequeños"
        ],
        cachorro: { comida: "40-60g", peso: "0.5-1.5kg", recom: "Comida para razas pequeñas, alta en proteínas" },
        joven: { comida: "50-80g", peso: "1.5-2.5kg", recom: "Mantener comida para razas pequeñas" },
        adulto: { comida: "60-90g", peso: "1.5-3kg", recom: "Control de peso, 2 comidas al día" },
        senior: { comida: "50-70g", peso: "1.5-3kg", recom: "Comida baja en calorías, suplementos articulares" }
    },
    beagle: {
        nombre: "Beagle",
        comida_ideal: "Pienso para razas medianas, control de calorías, proteína moderada y fibra para saciedad.",
        variantes: ["Pienso equilibrado para razas medianas","Comida húmeda baja en grasa (ocasional)","Snacks funcionales ricos en fibra"] ,
        cachorro: { comida: "140-180g", peso: "3-8kg", recom: "Comida rica en calcio para desarrollo" },
        joven: { comida: "180-220g", peso: "8-12kg", recom: "Controlar peso, son propensos a obesidad" },
        adulto: { comida: "200-250g", peso: "10-15kg", recom: "2 comidas diarias, evitar sobrepeso" },
        senior: { comida: "150-200g", peso: "10-15kg", recom: "Reducir calorías, más fibra" }
    },
    bulldog: {
        nombre: "Bulldog Francés",
        comida_ideal: "Pienso formulado para braquicéfalos; ingredientes digestibles y proteína de calidad; baja en grasa.",
        variantes: ["Pienso para braquicéfalos (croqueta única)","Comida húmeda digestible","Suplementos para piel y respiración bajo consejo vet"] ,
        cachorro: { comida: "100-140g", peso: "4-7kg", recom: "Comida fácil de digerir" },
        joven: { comida: "140-180g", peso: "8-11kg", recom: "Proteína de calidad" },
        adulto: { comida: "150-200g", peso: "9-13kg", recom: "Control de peso, propensos a obesidad" },
        senior: { comida: "120-160g", peso: "9-13kg", recom: "Bajo en grasa, suplementos respiratorios" }
    },
    cocker: {
        nombre: "Cocker Spaniel",
        comida_ideal: "Pienso equilibrado, rico en proteína y omega-3 para piel y pelo; porciones controladas.",
        variantes: ["Pienso rico en omega-3","Comida húmeda para brillo de pelaje","Snacks para piel y pelo"] ,
        cachorro: { comida: "160-200g", peso: "4-9kg", recom: "Alto en proteínas y grasas saludables" },
        joven: { comida: "200-250g", peso: "10-13kg", recom: "Mantener peso ideal" },
        adulto: { comida: "220-280g", peso: "11-15kg", recom: "2-3 comidas diarias" },
        senior: { comida: "180-220g", peso: "11-15kg", recom: "Comida para articulaciones y pelaje" }
    },
    labrador: {
        nombre: "Labrador Retriever",
        comida_ideal: "Pienso para razas activas con control de calorías y proteína de calidad; vigilar porciones.",
        variantes: ["Pienso para perros activos (alto en proteína)","Control de calorías y porciones","Comida húmeda como complemento ocasional"] ,
        cachorro: { comida: "300-400g", peso: "10-20kg", recom: "Alta energía, desarrollo muscular" },
        joven: { comida: "400-500g", peso: "25-32kg", recom: "Control de porciones" },
        adulto: { comida: "350-450g", peso: "25-36kg", recom: "Evitar sobrepeso, propensos a obesidad" },
        senior: { comida: "300-380g", peso: "25-36kg", recom: "Bajo en calorías, suplementos articulares" }
    },
    golden: {
        nombre: "Golden Retriever",
        comida_ideal: "Pienso con glucosamina y omega-3 para soporte articular y pelaje sano; ajustar calorías según actividad.",
        variantes: ["Pienso con glucosamina y omega-3","Comida húmeda para palatabilidad","Suplementos para articulaciones si lo indica vet"] ,
        cachorro: { comida: "300-420g", peso: "10-22kg", recom: "Desarrollo óseo saludable" },
        joven: { comida: "420-520g", peso: "27-34kg", recom: "Proteína de calidad" },
        adulto: { comida: "380-480g", peso: "27-40kg", recom: "Mantener condición física" },
        senior: { comida: "320-400g", peso: "27-40kg", recom: "Glucosamina y omega-3" }
    },
    pastor: {
        nombre: "Pastor Alemán",
        comida_ideal: "Pienso para razas grandes con soporte articular (glucosamina) y control del crecimiento en cachorros.",
        variantes: ["Pienso para razas grandes con soporte articular","Control de calcio en cachorros","Comida húmeda para digestión sensible"] ,
        cachorro: { comida: "320-450g", peso: "12-25kg", recom: "Alto en proteínas para desarrollo" },
        joven: { comida: "450-550g", peso: "30-38kg", recom: "Comida para razas grandes" },
        adulto: { comida: "400-500g", peso: "30-45kg", recom: "Soporte articular y digestivo" },
        senior: { comida: "350-430g", peso: "30-45kg", recom: "Condroprotectores, bajo en grasa" }
    },
    husky: {
        nombre: "Husky Siberiano",
        comida_ideal: "Pienso energético y alto en proteína y grasas saludables; ideal para perros muy activos.",
        variantes: ["Pienso energético (alto en grasa y proteína)","Comida cruda/BARF si se desea y supervisa vet","Snacks energéticos para actividad"] ,
        cachorro: { comida: "280-380g", peso: "10-20kg", recom: "Alto contenido energético" },
        joven: { comida: "380-480g", peso: "20-26kg", recom: "Mucha proteína, perro activo" },
        adulto: { comida: "350-450g", peso: "20-28kg", recom: "Adaptado a alta actividad" },
        senior: { comida: "300-380g", peso: "20-28kg", recom: "Mantener peso, suplementos articulares" }
    },
    rottweiler: {
        nombre: "Rottweiler",
        comida_ideal: "Pienso para razas grandes y musculosas, proteína alta y soporte articular; controlar calorías.",
        variantes: ["Pienso para razas grandes y musculosas","Control de calorías y porciones","Suplementos para articulaciones bajo prescripción"] ,
        cachorro: { comida: "350-500g", peso: "15-30kg", recom: "Crecimiento controlado" },
        joven: { comida: "500-600g", peso: "38-50kg", recom: "Alto en proteína" },
        adulto: { comida: "450-550g", peso: "40-60kg", recom: "Control de peso, propensos a sobrepeso" },
        senior: { comida: "380-480g", peso: "40-60kg", recom: "Protección articular, bajo en calorías" }
    },
    "gran-danes": {
        nombre: "Gran Danés",
        comida_ideal: "Pienso específico para razas gigantes: control de crecimiento, calcio equilibrado y soporte articular.",
        variantes: ["Pienso para razas gigantes (control crecimiento)","Control estricto de porciones","Suplementos articulares para adultos"],
        cachorro: { comida: "500-700g", peso: "20-45kg", recom: "Crecimiento lento y controlado" },
        joven: { comida: "700-900g", peso: "50-70kg", recom: "Comida para razas gigantes" },
        adulto: { comida: "600-800g", peso: "55-90kg", recom: "Suplementos para articulaciones" },
        senior: { comida: "500-700g", peso: "55-90kg", recom: "Bajo impacto, soporte articular intensivo" }
    }
};

function calcular() {
    const raza = document.getElementById('raza').value;
    const edad = document.getElementById('edad').value;
    const resultado = document.getElementById('resultado');

    if (!raza || !edad) {
        alert('Por favor, selecciona la raza y edad de tu perro');
        return;
    }

    const datos = datosPerros[raza][edad];

    document.getElementById('comida').textContent = datos.comida;
    document.getElementById('peso').textContent = datos.peso;
    document.getElementById('recomendacion').textContent = datos.recom;
    document.getElementById('comida_ideal').textContent = datosPerros[raza].comida_ideal || '';
    // Mostrar variantes como lista
    const variantesEl = document.getElementById('variantes');
    const variantes = datosPerros[raza].variantes || [];
    if (variantes.length) {
        variantesEl.innerHTML = '<ul class="variantes-list">' + variantes.map(v => `<li>${v}</li>`).join('') + '</ul>';
    } else {
        variantesEl.textContent = '';
    }

    // Generar resumen tipo tabla: Raza | Edad | Tipo de comida (comida_ideal)
    const resumen = document.getElementById('resumen');
    const nombreRaza = datosPerros[raza].nombre || raza;
    const tipoComida = datosPerros[raza].comida_ideal || '';
    resumen.innerHTML = `
        <table class="resumen-table">
            <thead>
                <tr><th>Raza</th><th>Edad</th><th>Tipo de comida</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>${nombreRaza}</td>
                    <td>${edad}</td>
                    <td>${tipoComida}</td>
                </tr>
            </tbody>
        </table>
    `;

    resultado.classList.add('show');
}

// Mejor: enganchar el botón de forma unobtrusive
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('calcularBtn');
    if (btn) btn.addEventListener('click', calcular);
    // Intentar cargar una imagen local `fondo-perros.jpg` y si existe usarla como fondo decorativo
    const img = new Image();
    img.onload = () => document.body.classList.add('bg-photo');
    img.onerror = () => {/* no hay imagen, queda el SVG por defecto */};
    img.src = 'fondo-perros.jpg';
});
