describe('Funcionalidade de Login - Tenda', () => {
    describe('Dado que desejo efetuar login no site do Tenda Atacado', () => {
        context('Quando adiciono credencias válidas', () => {
            it('Então login é realizado com sucesso', () => {
                cy.gui_login('wendel_teste@tuamaeaquelaursa.com', 'Teste@123')
            });
        });
        context('Quando adiciono credenciais inválidas', () => {
            it('Então alerta de erro é apresentado corretamente', () => {
                cy.gui_login('wendeldoteste@atacadao.com', 'teste')
                cy.get('span.block-error').eq(0).should('be.visible').and('contain.text', 'Credenciais inválidas');
                cy.get('span.block-error').eq(1).should('be.visible').and('contain.text', 'Credenciais inválidas');
            });
        });
        context('Quando adiciono apenas usuário incorreto', () => {
            it('Então alerta de erro é apresentado corretamente', () => {
                cy.gui_login('wendeldoteste@atacadao.com', 'Teste@123')
                cy.get('span.block-error').eq(0).should('be.visible').and('contain.text', 'Credenciais inválidas');
                cy.get('span.block-error').eq(1).should('be.visible').and('contain.text', 'Credenciais inválidas');
            });
        });
        context('Quando adiciono apenas senha incorreta', () => {
            it('Então alerta de erro é apresentado corretamente', () => {
                cy.gui_login('wendel_teste@tuamaeaquelaursa.com', 'testeerro')
                cy.get('span.block-error').eq(0).should('be.visible').and('contain.text', 'Credenciais inválidas');
                cy.get('span.block-error').eq(1).should('be.visible').and('contain.text', 'Credenciais inválidas');
            });
        });
    });
});