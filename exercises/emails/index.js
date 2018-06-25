function normalizeName(name) {
    return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function generateEmail(name) {
    let names = normalizeName(name).replace(/-/, '').split(' ');
    if (names.length > 2) {
        return names[2] + '.' + names[0][0] + '.' + names[1][0];
    } else {
        return names[1] + '.' + names[0][0];
    }
}

function emails(names, company) {
    let nCompany = normalizeName(company).replace(/[\.]/g,'');
    let arrNames = names.split(', ');

    let emailList = {};

    for (let i = 0; i < arrNames.length; i++) {
        let email = generateEmail(arrNames[i]);
        let inc;

        if (emailList[email]) {
            inc = emailList[email] += 1;
        } else {
            inc = emailList[email] = 1;
        }

        arrNames[i] = `${arrNames[i]} <${email}${ inc > 1 ? inc: '' }@${nCompany}.com>`;
    }

    return arrNames.join(', ');
}

module.exports = emails;