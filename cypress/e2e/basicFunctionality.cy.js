/// <reference types="Cypress" />
import User from '../User/User'

describe('Testing out Cypress functionality on Test Automation Practice Website', () => {

  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.acceptCookies()
  })

  it('Displays title when landing on the home page', () => {
    cy.checkTitle()
  })

  it('Drags and drops element', () => {
    cy.dragAndDrop()
  })

  it('Selects correct animals from the dropdown menu', () => {
    const animals = ["cat", "babycat", "big baby cat", "avatar"]
    cy.selectAnAnimal(animals)
  })

  it('Types user info into the Sign Up Form', () => {
    const user = new User('John', 'Doe', "07999999999", "UK", "London", "email@test.com", "Male")
    cy.enterUserDetails(user)
  })
})