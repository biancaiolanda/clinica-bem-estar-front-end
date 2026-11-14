const form = document.querySelector('.formulario');
const formMessage = document.getElementById('mensagem-formulario');
const requiredFields = [...form.querySelectorAll('input[required], select[required]')];
const dateField = document.getElementById('data');
let hasSubmitted = false;

function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

form.noValidate = true;

function parseBrazilianDate(value) {
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);

    if (!match) {
        return null;
    }

    const [, dayText, monthText, yearText] = match;
    const day = Number(dayText);
    const month = Number(monthText);
    const year = Number(yearText);
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
        return null;
    }

    return `${yearText}-${monthText}-${dayText}`;
}

function formatDateInput(event) {
    const field = event.currentTarget;
    const cursorPosition = field.selectionStart === null ? field.value.length : field.selectionStart;
    const digitsBeforeCursor = field.value.slice(0, cursorPosition).replace(/\D/g, '').length;
    const digits = field.value.replace(/\D/g, '').slice(0, 8);
    let formatted = digits;

    if (digits.length > 4) {
        formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
    } else if (digits.length > 2) {
        formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }

    field.value = formatted;

    let nextCursorPosition = 0;
    let digitsSeen = 0;

    while (nextCursorPosition < formatted.length && digitsSeen < digitsBeforeCursor) {
        if (/\d/.test(formatted[nextCursorPosition])) {
            digitsSeen += 1;
        }

        nextCursorPosition += 1;
    }

    if ((digitsBeforeCursor === 2 || digitsBeforeCursor === 4) && formatted[nextCursorPosition] === '/') {
        nextCursorPosition += 1;
    }

    field.setSelectionRange(nextCursorPosition, nextCursorPosition);
}

dateField.addEventListener('input', formatDateInput);

function getFieldError(field) {
    if (field.id === 'nome') {
        const name = field.value.trim();

        if (!name) {
            return 'Informe seu nome completo.';
        }

        if (name.length < 3) {
            return 'Informe pelo menos 3 caracteres.';
        }
    }

    if (field.id === 'telefone') {
        const digits = field.value.replace(/\D/g, '');
        const nationalNumber = digits.length >= 12 && digits.startsWith('55') ? digits.slice(2) : digits;

        if (!nationalNumber) {
            return 'Informe seu telefone.';
        }

        if (!/^\d{10,11}$/.test(nationalNumber)) {
            return 'Informe um telefone com DDD e 10 ou 11 dígitos.';
        }
    }

    if (field.id === 'email') {
        if (!field.value.trim()) {
            return 'Informe seu e-mail.';
        }

        if (field.validity.typeMismatch) {
            return 'Informe um endereço de e-mail válido.';
        }
    }

    if (field.id === 'especialidade' && !field.value) {
        return 'Selecione uma especialidade.';
    }

    if (field.id === 'data') {
        if (!field.value) {
            return 'Informe uma data preferencial.';
        }

        const isoDate = parseBrazilianDate(field.value);

        if (!isoDate) {
            return 'Digite uma data válida no formato DD/MM/AAAA.';
        }

        if (isoDate < getTomorrowDate()) {
            return 'A data deve ser a partir de amanhã.';
        }
    }

    return '';
}

function updateFieldError(field) {
    const error = getFieldError(field);
    const errorMessage = document.getElementById(`erro-${field.id}`);

    if (error) {
        field.setAttribute('aria-invalid', 'true');
        errorMessage.textContent = error;
        errorMessage.hidden = false;
        return false;
    }

    field.removeAttribute('aria-invalid');
    errorMessage.textContent = '';
    errorMessage.hidden = true;
    return true;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    hasSubmitted = true;

    const validFields = requiredFields.map(updateFieldError);
    const firstInvalidField = requiredFields.find((field, index) => !validFields[index]);

    if (firstInvalidField) {
        formMessage.className = 'mensagem-formulario mensagem-formulario--erro';
        formMessage.textContent = 'Revise os campos indicados antes de continuar.';
        firstInvalidField.focus();
        return;
    }

    formMessage.className = 'mensagem-formulario mensagem-formulario--aviso';
    formMessage.textContent = 'Os dados foram validados, mas o envio ainda não está integrado nesta versão do site.';
});

form.addEventListener('input', (event) => {
    const field = event.target;

    if (!hasSubmitted || !requiredFields.includes(field)) {
        return;
    }

    updateFieldError(field);
    formMessage.textContent = '';
});

form.addEventListener('change', (event) => {
    const field = event.target;

    if (!hasSubmitted || !requiredFields.includes(field)) {
        return;
    }

    updateFieldError(field);
    formMessage.textContent = '';
});
