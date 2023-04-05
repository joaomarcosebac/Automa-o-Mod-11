/// <reference types="cypress" />

context('funcionalidade login', () =>{


    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')   
       });

       
       it.only ('Deve fazer login com sucesso', () =>{
        cy.get ('#username').type('aluno_ebac@teste.com')
        cy.get ('#password').type('teste@teste.com')
        cy.get ('.woocommerce-form >.button').click()
        
        cy.get ('.page-title').should('contain' ,'Minha conta')
        cy.get('a > .hidden-xs').should('contain' , 'Welcome')
        
            })
        
        it('Deve exibir uma mensagem de erro ao inserir usuario invalidos',()=>{
            cy.get ('#username').type('ebac@teste.com')
            cy.get ('#password').type('teste@teste.com')
            cy.get ('.woocommerce-form >.button').click()
            cy.get('.woocommerce-error > li').should('contain' , 'senha fornecida')
        })
        
        it('Deve exibir uma mensagem de erro ao inserir senha invalida',()=>{
            cy.get ('#username').type('aluno_ebac@teste.com')
            cy.get ('#password').type('e@teste.com')
            cy.get ('.woocommerce-form >.button').click()
        })
        
        
        
        })