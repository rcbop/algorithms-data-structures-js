const emails = require('./index');

test('function emails exists', () => {
    expect(typeof emails).toEqual('function');
});

test('emails list with simple names, no repetition', () => {
    const names = "Rogério CasteloBranco Peixoto, Rogério Peixoto";

    const company = "Company";

    const emailList = emails(names, company);

    let expectedList = "Rogério CasteloBranco Peixoto <peixoto.r.c@company.com>, Rogério Peixoto <peixoto.r@company.com>";

    expect(emailList).toEqual(expectedList);
});

test('emails list with composed names, no repetition', () => {
    const names = "Rogério Oliveira-Peixoto, Rogério Peixoto";

    const company = "Accenture";

    const emailList = emails(names, company);

    let expectedList = "Rogério Oliveira-Peixoto <oliveirapeixoto.r@accenture.com>, Rogério Peixoto <peixoto.r@accenture.com>";

    expect(emailList).toEqual(expectedList);
});

test('emails list with non english characters in lastname, with repetition, special characters in company name', () => {
    const names = "Rogério Castelão, Rodrigo Castelão";

    const company = "C.E.S.A.R";

    const emailList = emails(names, company);

    let expectedList = "Rogério Castelão <castelao.r@cesar.com>, Rodrigo Castelão <castelao.r2@cesar.com>";

    expect(emailList).toEqual(expectedList);
});

test('large emails list with repetition, composed names', () => {
    const names = "Rogerio Peixoto, " +
        "Alberto Clotildo, " +
        "João José, " +
        "Jefferson Mauricio Junior, " +
        "Mary Jane Watson-Parker, " +
        "Jeff Johnson, " +
        "Peter Parker, " +
        "Patricio Pontes, " +
        "Paul Parker, " +
        "Roger Peixoto, " +
        "Rodrigo Peixoto";

    const company = "myCompany";

    const emailList = emails(names, company);

    let expectedList = "Rogerio Peixoto <peixoto.r@mycompany.com>, " +
        "Alberto Clotildo <clotildo.a@mycompany.com>, " +
        "João José <jose.j@mycompany.com>, " +
        "Jefferson Mauricio Junior <junior.j.m@mycompany.com>, " +
        "Mary Jane Watson-Parker <watsonparker.m.j@mycompany.com>, " +
        "Jeff Johnson <johnson.j@mycompany.com>, " +
        "Peter Parker <parker.p@mycompany.com>, " +
        "Patricio Pontes <pontes.p@mycompany.com>, " +
        "Paul Parker <parker.p2@mycompany.com>, " +
        "Roger Peixoto <peixoto.r2@mycompany.com>, " +
        "Rodrigo Peixoto <peixoto.r3@mycompany.com>";

    expect(emailList).toEqual(expectedList);
});

test('VERY large emails list with repetition, composed names', () => {
    let magnitude = 20000;
    let lotsOfNames = "Peter Parker, ".repeat(magnitude);
    let lotsOfEmails = '';
    for (let i = 0; i < magnitude; i++) {
        lotsOfEmails += `Peter Parker <parker.p${i + 1 > 1 ? i + 1 : ''}@mycompany.com>, `;
    }
    
    const names = "Rogerio Peixoto, " +
        "Alberto Clotildo, " +
        "João José, " +
        "Jefferson Mauricio Junior, " +
        "Mary Jane Watson-Parker, " +
        "Jeff Johnson, " +
        lotsOfNames +
        "Rodrigo Peixoto";

    const company = "myCompany";

    const emailList = emails(names, company);

    let expectedList = "Rogerio Peixoto <peixoto.r@mycompany.com>, " +
        "Alberto Clotildo <clotildo.a@mycompany.com>, " +
        "João José <jose.j@mycompany.com>, " +
        "Jefferson Mauricio Junior <junior.j.m@mycompany.com>, " +
        "Mary Jane Watson-Parker <watsonparker.m.j@mycompany.com>, " +
        "Jeff Johnson <johnson.j@mycompany.com>, " +
        lotsOfEmails +
        "Rodrigo Peixoto <peixoto.r2@mycompany.com>";

    expect(emailList).toEqual(expectedList);
});