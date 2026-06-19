/* ===== FLEXNAV MENU ===== */
function abrirMenu() {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('flexNav');
}

/* ===== CARROUSEL HERO ===== */
let posicion = 0;
let slideTimeoutId = null;

const slideData = [
    {
        title: 'A veces, lo que más necesita un chico para no abandonar la escuela es alguien que crea en él.',
        description: 'Tu tiempo puede cambiar una historia.',
        buttonText: 'Quiero ser voluntario',
        buttonHref: 'quiero-ayudar.html'
    },
    {
        title: 'Ningún sueño debería quedar incompleto por falta de oportunidades.',
        description: 'Ayudanos a llenar cuadernos y abrir caminos.',
        buttonText: 'Quiero Donar',
        buttonHref: 'quiero-ayudar.html'
    },
    {
        title: 'En cada barrio hay chicos con ganas de aprender.',
        description: 'Ayudanos a acercarles un lugar seguro para estudiar.',
        buttonText: 'Quiero ofrecer un espacio',
        buttonHref: 'quiero-ayudar.html'
    },
    {
        title: 'Cuando las herramientas en casa no alcanzan, la comunidad se vuelve familia.',
        description: 'Encontrá el lugar más cercano para que nadie aprenda en soledad.',
        buttonText: 'Buscar Puntos de Encuentro',
        buttonHref: 'mapa.html'
    }
];

function activarImagen(posicion) {
    const imagenes = document.querySelectorAll('.slides img');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const heroBtn = document.getElementById('hero-btn');
    const heroContent = document.querySelector('.hero-content');

    if (imagenes.length === 0) return;

    imagenes.forEach((img) => img.classList.remove('active'));
    imagenes[posicion].classList.add('active');

    if (heroTitle && heroDesc && heroBtn && heroContent) {
        heroContent.classList.add('is-fading');
        setTimeout(() => {
            heroTitle.textContent = slideData[posicion].title;
            heroDesc.textContent = slideData[posicion].description;
            heroBtn.textContent = slideData[posicion].buttonText;
            heroBtn.href = slideData[posicion].buttonHref;
            heroContent.classList.remove('is-fading');
        }, 220);
    }
}

function siguiente() {
    const imagenes = document.querySelectorAll('.slides img');
    if (imagenes.length === 0) return;
    
    posicion = posicion + 1;
    if (posicion >= imagenes.length) {
        posicion = 0;
    }
    activarImagen(posicion);
}

document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.slides img');
    if (imagenes.length > 0) {
        slideTimeoutId = setInterval(siguiente, 5000);
    }
});

/* ===== QUIERO AYUDAR MODALS (Dynamic) ===== */
function getFormSection(title, svgPath, content) {
    return `
    <div class="form-section">
        <div class="form-section-title">
            <svg viewBox="0 0 24 24"><path d="${svgPath}"/></svg>
            ${title}
        </div>
        ${content}
    </div>`;
}

function getUbicacionSection(suffix = '') {
    const zonaName = suffix ? `zona_${suffix}` : 'zona';
    const partidoName = suffix ? `partido_${suffix}` : 'partido';
    return getFormSection('Ubicación', 
        'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        `<div class="form-row">
            <div class="form-group">
                <label>Zona / Municipio</label>
                <input type="text" name="${zonaName}">
            </div>
            <div class="form-group">
                <label>Partido (GBA):</label>
                <select name="${partidoName}">
                    <option value="" disabled selected>Seleccione un partido</option>
                    <option value="Avellaneda">Avellaneda</option>
                    <option value="Lanus">Lanús</option>
                    <option value="Lomas de Zamora">Lomas de Zamora</option>
                    <option value="Quilmes">Quilmes</option>
                    <option value="Moron">Morón</option>
                    <option value="La Matanza">La Matanza</option>
                    <option value="San Martin">San Martín</option>
                    <option value="Tres de Febrero">Tres de Febrero</option>
                    <option value="Vicente Lopez">Vicente López</option>
                    <option value="San Isidro">San Isidro</option>
                    <option value="Tigre">Tigre</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
        </div>`
    );
}

function getModalContent(id) {
    if (id === 'modal-voluntario') {
        return `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">&times;</button>
            <div class="modal-header">
                <h2>Quiero ser voluntario</h2>
                <p>Tu acompañamiento puede cambiar una trayectoria escolar, devolver confianza y ganas de aprender.</p>
            </div>
            <div class="modal-body">
                <form>
                ${getFormSection('Datos básicos', 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', `
                    <div class="form-row">
                        <div class="form-group">
                            <label>Nombre y apellido</label>
                            <input type="text" name="nombre" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="email" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Teléfono</label>
                            <input type="tel" name="telefono" required>
                        </div>
                        <div class="form-group">
                            <label>Edad (opcional)</label>
                            <input type="number" name="edad">
                        </div>
                    </div>`
                )}

                ${getUbicacionSection()}

                ${getFormSection('Movilidad', 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z', `
                    <div class="form-group">
                        <label>Disponibilidad geográfica</label>
                        <div class="checkbox-group">
                            <label><input type="checkbox" name="movilidad" value="cerca"> Prefiero colaborar cerca de mi zona</label>
                            <label><input type="checkbox" name="movilidad" value="otros"> Puedo participar en otros municipios del Conurbano Bonaerense (GBA)</label>
                            <label><input type="checkbox" name="movilidad" value="propia"> Tengo movilidad propia</label>
                        </div>
                    </div>`
                )}

                ${getFormSection('Perfil del voluntario', 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', `
                    <div class="form-group">
                        <label>¿Cómo te identificás?</label>
                        <div class="radio-group">
                            <label><input type="radio" name="perfil" value="docente"> Docente o profesional de la educación</label>
                            <label><input type="radio" name="perfil" value="estudiante"> Estudiante terciario o universitario</label>
                            <label><input type="radio" name="perfil" value="profesional"> Profesional de otra área</label>
                            <label><input type="radio" name="perfil" value="comunitario"> Voluntario/a comunitario/a</label>
                            <label><input type="radio" name="perfil" value="sin_experiencia"> Quiero ayudar, aunque no tenga experiencia educativa</label>
                        </div>
                    </div>`
                )}

                ${getFormSection('Disponibilidad', 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z', `
                    <div class="checkbox-group checkbox-row">
                        <label><input type="checkbox" name="disponibilidad" value="manana"> Mañana</label>
                        <label><input type="checkbox" name="disponibilidad" value="tarde"> Tarde</label>
                        <label><input type="checkbox" name="disponibilidad" value="noche"> Noche</label>
                        <label><input type="checkbox" name="disponibilidad" value="semana"> Entre semana</label>
                        <label><input type="checkbox" name="disponibilidad" value="finde"> Fines de semana</label>
                    </div>`
                )}

                ${getFormSection('Motivación', 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z', `
                    <div class="form-group">
                        <label>¿Por qué te gustaría sumarte?</label>
                        <textarea name="motivacion"></textarea>
                    </div>`
                )}

                <button type="submit" class="btn-submit">Enviar Solicitud</button>
                </form>
            </div>
        </div>
        `;
    } else if (id === 'modal-espacio') {
        return `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">&times;</button>
            <div class="modal-header">
                <h2>Ofrecer un espacio</h2>
                <p>Tu lugar puede transformarse en un nuevo punto de encuentro para aprender</p>
            </div>
            <div class="modal-body">
                <form>
                    ${getFormSection('Perfil', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', `
                        <div class="form-group">
                            <label>¿Quién ofrece el espacio??</label>
                            <div class="radio-group">
                                <label><input type="radio" name="tipo_entidad" value="organizacion"> Organización / Asociación civil</label>
                                <label><input type="radio" name="tipo_entidad" value="empresa"> Empresa</label>
                                <label><input type="radio" name="tipo_entidad" value="institucion"> Institución educativa</label>
                                <label><input type="radio" name="tipo_entidad" value="club"> Club / espacio comunitario</label>
                                <label><input type="radio" name="tipo_entidad" value="particular"> Particular</label>
                            </div>
                        </div>`
                    )}

                    ${getFormSection('Datos básicos', 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', `
                        <div class="form-row">
                            <div class="form-group">
                                <label>Nombre de la organización/persona</label>
                                <input type="text" name="nombre_org" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="email_org" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Teléfono</label>
                                <input type="tel" name="telefono_org" required>
                            </div>
                            <div class="form-group">
                                <label>Capacidad estimada</label>
                                <input type="number" name="capacidad_espacio" placeholder="Ej: 15 personas">
                            </div>
                        </div>`
                    )}

                    ${getUbicacionSection('espacio')}

                    ${getFormSection('Tipo de espacio', 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', `
                        <div class="form-group">
                            <label>¿Qué espacio físico podrías poner a disposición?</label>
                            <div class="checkbox-group">
                                <label><input type="checkbox" name="tipo_espacio" value="salon"> Salón</label>
                                <label><input type="checkbox" name="tipo_espacio" value="biblioteca"> Biblioteca</label>
                                <label><input type="checkbox" name="tipo_espacio" value="aula"> Aula</label>
                                <label><input type="checkbox" name="tipo_espacio" value="compartido"> Espacio compartido</label>
                                <label><input type="checkbox" name="tipo_espacio" value="otro"> Otro</label>
                            </div>
                        </div>`
                    )}

                    ${getFormSection('Disponibilidad', 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z', `
                        <div class="checkbox-group checkbox-row checkbox-row-spaced">
                            <label><input type="checkbox" name="dias_espacio" value="lunes"> Lunes</label>
                            <label><input type="checkbox" name="dias_espacio" value="martes"> Martes</label>
                            <label><input type="checkbox" name="dias_espacio" value="miercoles"> Miércoles</label>
                            <label><input type="checkbox" name="dias_espacio" value="jueves"> Jueves</label>
                            <label><input type="checkbox" name="dias_espacio" value="viernes"> Viernes</label>
                            <label><input type="checkbox" name="dias_espacio" value="sabado"> Sábado</label>
                        </div>`
                    )}

                    ${getFormSection('Condiciones', 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z', `
                        <div class="checkbox-group">
                            <label><input type="checkbox" name="condiciones" value="mesas"> Tiene mesas/sillas</label>
                            <label><input type="checkbox" name="condiciones" value="bano"> Tiene acceso a baño</label>
                            <label><input type="checkbox" name="condiciones" value="wifi"> Tiene WiFi</label>
                            <label><input type="checkbox" name="condiciones" value="menores"> Es accesible para menores</label>
                        </div>`
                    )}

                    ${getFormSection('Comentarios adicionales', 'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z', `
                        <div class="form-group">
                            <textarea name="comentarios_espacio" placeholder="¿Algo más que nos quieras contar sobre el espacio?"></textarea>
                        </div>`
                    )}

                    <button type="submit" class="btn-submit">Enviar Solicitud</button>
                </form>
            </div>
        </div>
        `;
    } else if (id === 'modal-donacion') {
        return `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">&times;</button>
            <div class="modal-header">
                <h2>Hacer una donación</h2>
                <p>Ayudanos a seguir acompañando a más chicos</p>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label>Nombre y apellido</label>
                        <input type="text" name="nombre" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label>Monto</label>
                        <input type="number" name="monto" placeholder="$" required>
                    </div>
                    <button type="submit" class="btn-submit">Donar</button>
                </form>
            </div>
        </div>
        `;
    }
    return '';
}

let activeModalOverlay = null;

function openModal(id) {
    // Crear el overlay
    activeModalOverlay = document.createElement('div');
    activeModalOverlay.classList.add('modal-overlay');
    activeModalOverlay.id = id;
    
    // Definir el HTML
    activeModalOverlay.innerHTML = getModalContent(id);
    
    // Agregar al DOM
    document.body.appendChild(activeModalOverlay);
    
    // Forzar reflow para la transición
    void activeModalOverlay.offsetWidth;
    
    // Mostrar
    activeModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (activeModalOverlay) {
        activeModalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Esperar a que termine la transición para removerlo del DOM
        setTimeout(() => {
            if (activeModalOverlay && activeModalOverlay.parentNode) {
                activeModalOverlay.parentNode.removeChild(activeModalOverlay);
            }
            activeModalOverlay = null;
        }, 300);
    }
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

/* ===== FORMULARIO (FormData) ===== */
document.addEventListener('submit', (e) => {
    if (e.target.tagName === 'FORM') {
        e.preventDefault(); // evita recargar la página

        const formData = new FormData(e.target);
        
        // Manejar múltiples checkboxes con el mismo nombre (ej: disponibilidad, condiciones)
        const datos = {};
        for (let [key, value] of formData.entries()) {
            if (datos[key]) {
                if (!Array.isArray(datos[key])) {
                    datos[key] = [datos[key]];
                }
                datos[key].push(value);
            } else {
                datos[key] = value;
            }
        }

        console.log('Datos enviados:', datos);
        alert('Formulario enviado con éxito. Revisa la consola para ver los datos.');
        e.target.reset();
        
        const modal = e.target.closest('.modal-overlay');
        if (modal) {
            closeModal();
        }
    }
});