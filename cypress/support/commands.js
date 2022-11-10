Cypress.Commands.add('acceptCookies', () => {
    cy.get('#cookieChoiceDismiss').click()
})

Cypress.Commands.add('checkTitle', () => {
    cy.fixture('selectors.json').then((selectors) => {
        cy.get(".title").eq(0).should('have.text', selectors.title)
    })
})

Cypress.Commands.add('dragAndDrop', () => {
    cy.fixture('selectors.json').then((selectors) => {
        // Text Before Dragging
        cy.get(selectors.dropbox).should('have.text', 'Drop here')

        // Dragging The Element Into The Box
        cy.get(selectors.draggable)
            .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
            .trigger('mousemove', { which: 1, pageX: 150, pageY: 10 })
            .trigger('mouseup')

        // Text After Drag and Drop
        cy.get(selectors.dropbox).should('have.text', 'Dropped!')
    })
})

Cypress.Commands.add('selectAnAnimal', (animals) => {
    animals.forEach(animal => {
        cy.fixture('selectors.json').then((selectors) => {
            cy.get(selectors.animalDropdown).select(animal).then(el => {
                expect(el.val()).to.equal(animal.toLowerCase())
            })
        })
    });
})

Cypress.Commands.add('enterUserDetails', (user) => {
    cy.fixture('selectors.json').then(selectors => {

        // Needed to access elements within the iframe
        const getIframeBody = () => {
            return cy
                .get('iframe')
                .its('0.contentDocument').should('exist')
                .its('body').should('not.be.undefined')
                .then(cy.wrap)
        }

        getIframeBody().find(selectors.fname).type(user.fname).then(el => expect(el.val()).to.equal(user.fname))
        getIframeBody().find(selectors.lname).type(user.lname).then(el => expect(el.val()).to.equal(user.lname))
        getIframeBody().find(selectors.phone).type(user.phone).then(el => expect(el.val()).to.equal(user.phone))
        getIframeBody().find(selectors.country).type(user.country).then(el => expect(el.val()).to.equal(user.country))
        getIframeBody().find(selectors.city).type(user.city).then(el => expect(el.val()).to.equal(user.city))
        getIframeBody().find(selectors.email).type(user.email).then(el => expect(el.val()).to.equal(user.email))
    })
})



