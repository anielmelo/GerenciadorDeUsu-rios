const patternData = (regex, data) => {
    const regexPattern = new RegExp(regex);
    return regexPattern.test(data);
}

const validateName = (request, response, next) => {
    const { body } = request;
    
    if (body.name === undefined) {
        return response.status(400).json({ message: 'The field is required.' });
    }
    
    if (body.name === '') {
        return response.status(400).json({ message: 'Name cannot be empty.' });
    }
    
    const namePattern = '^[A-Za-z\\s]+$';
    
    if (patternData(namePattern, body.name) === false) {
        return response.status(400).json({ message: 'Name invalid.' });
    }

    next();
}

const validateEmail = (request, response, next) => {
    const { body } = request;
    
    if (body.email === undefined) {
        return response.status(400).json({ message: 'The field is required.' });
    }
    
    if (body.email === '') {
        return response.status(400).json({ message: 'E-mail cannot be empty.' });
    }
    
    const emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$';
    
    if (patternData(emailPattern, body.email) === false) {
        return response.status(400).json({ message: 'E-mail invalid.' });
    }

    next();
}

const validateCellphone = (request, response, next) => {
    const { body } = request;
    
    if (body.number_cellphone === undefined) {
        return response.status(400).json({ message: 'The field is required.' });
    }
    
    if (body.number_cellphone === '') {
        return response.status(400).json({ message: 'Cellphone cannot be empty.' });
    }

    const cellphonePattern = '^\\([1-9]{2}\\)9[0-9]{8}$';
    
    if (patternData(cellphonePattern, body.number_cellphone) === false) {
        return response.status(400).json({ message: 'Cellphone invalid.' });
    }

    next();
}

const validateDate = (request, response, next) => {
    const { body } = request;

    if (body.birth_date === undefined) {
        return response.status(400).json({ message: 'The field is required.' });
    }
    
    if (body.birth_date === '') {
        return response.status(400).json({ message: 'Date cannot be empty.' });
    }
    
    const datePattern = '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$';
    
    if (patternData(datePattern, body.birth_date) === false) {
        return response.status(400).json({ message: 'Date is invalid.' });
    }

    next();
}

module.exports = {
    validateName,
    validateEmail,
    validateCellphone,
    validateDate
}