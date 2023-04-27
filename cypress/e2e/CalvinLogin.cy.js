import Check from '../e2e/Page Object/check'
import Register from '../e2e/Page Object/register'
import Login from '../e2e/Page Object/login'
describe('', () =>{
    beforeEach(() =>{
        cy.visit('https://www.calvinklein.nl/')
        cy.viewport(1200, 800)
        
    })
    it('Verify that user could see specific errors when not enough information isprovided during login',() =>{
        cy.visit('https://www.calvinklein.nl/')
        const l = new Check();
        l.clickCookie();
        l.clicksign_in();
        l.inputemail();
        l.inputpassword();
        l.clicklogin();
        l.checkerroremail()
        l.checkerrorpassword()
        
    })
    
    it('Verify that user can login with valid data',()=>{
         cy.visit('https://www.calvinklein.nl/')
         const r = new Register();
         r.clickCookie();
         r.signin();
         r.clickregister();
         r.inputmaill();
         r.inputpassword();
         r.confirmpassword();
         r.signup1();
         r.signup2();
         r.clickbuttonregister();
         
         

        


    })
    it('Verify that user can login with valid data',()=>{
        cy.visit('https://www.calvinklein.nl/')
        const l = new Login();
        l.clickcookie();
        l.singin();
        l.inputemaill();
        l.inputpassword();
        l.clickbutton();
        
        
    })
 })