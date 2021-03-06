// BDD-style suite with "expect"
var chai = require('chai');  
var assert = chai.assert; 
var expect = chai.expect;
var should = chai.should();
// var expect = require('chai').expect;
// This test set is for not login condition
module.exports = {
  // Testing the page element like body, search box, logo and link, text, heading, footer and footer links
  'Signup': function (browser) {
    var menu = '.links .links-item', afterLoginMenu = '.headerlink-with-icon';
    browser.url(browser.launch_url);
    browser.waitForElementPresent('body', 5000);
    browser.assert.title('Landing - the best tech jobs in 1 place');
    browser.expect.element('.header-logo').to.be.present;
    browser.expect.element('.header-logo').to.be.visible;
    browser.expect.element('#user-header-search').to.be.present;
    browser.expect.element('#user-header-search').to.be.visible;
    browser.expect.element('.page-heading').to.be.present;
    browser.expect.element('.page-heading').to.be.visible;
    browser.expect.element('.header-logo a').to.be.present;
    browser.expect.element('.header-logo a').to.be.visible;
    browser.expect.element('.header-logo a').text.to.contain('LANDING .CO');
    browser.expect.element('.header-logo a').to.have.attribute('href').which.contains('/');
    browser.expect.element('.page-heading h2').to.be.present;
    browser.expect.element('.page-heading h2').to.be.visible;
    browser.expect.element('.page-heading h2').text.to.contain('Browse Jobs');
    browser.expect.element('.popular-tags').to.be.present;
    browser.expect.element('.popular-tags').to.be.visible;
    browser.expect.element('.popular-tags .popular-tags-title').text.to.equal('Popular Search Tags:');
    browser.expect.element('.pagination').to.be.present;
    browser.expect.element('.pagination').to.be.visible;
    browser.expect.element('.main-footer').to.be.present;
    browser.expect.element('.main-footer').to.be.visible;
    browser.expect.element('.main-footer .container a:nth-of-type(1)').text.to.contain('Browse Jobs');
    browser.expect.element('.main-footer .container a:nth-of-type(1)').to.have.attribute('href').which.contains('/sitemap');
    browser.expect.element('.main-footer .container a:nth-of-type(2)').text.to.contain('LANDING .CO');
    browser.expect.element('.main-footer .container a:nth-of-type(2)').to.have.attribute('href').which.contains('/');
    browser.saveScreenshot('./screenshots/expect-home.png');
    function navigation(items) {
      expect(items.value.length).to.equal(2); // Chai module
      browser.expect.element(menu + ':nth-of-type(1) a span').text.to.contain('FOR CANDIDATES');
      browser.expect.element(menu + ':nth-of-type(1) a').to.have.attribute('href').which.contains('/user/sign_up');
      browser.expect.element(menu + ':nth-of-type(2) a span').text.to.contain('FOR RECRUITERS');
      browser.expect.element(menu + ':nth-of-type(2) a').to.have.attribute('href').which.contains('/user/sign_up?is_recruiter=true');
    }
    browser.expect.element(menu).to.be.present;
    browser.expect.element(menu).to.be.visible;
    browser.elements('css selector', menu, navigation);
    function navigationAfterLogin(items) {
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle').to.be.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu').to.be.present;
      browser.click(afterLoginMenu + ' .dropdown .dropdown-toggle .navbar-header .navbar-toggle', function(response) {
        this.assert.ok(browser === this, 'Recruiter header-menu dropdown-menu clicked.');
      });
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(1) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(1) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(1) a').text.to.equal('My Jobs');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(1) a').to.have.attribute('href').which.contains('/recruiter/jobs');      
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a').text.to.equal('Add new Jobs');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(2) a').to.have.attribute('href').which.contains('/recruiter/jobs/new');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(3) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(3) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(3) a').text.to.equal('Candidate Database');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(3) a').to.have.attribute('href').which.contains('/recruiter/candidate_infos');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(4) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(4) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(4) a').text.to.equal('My Profile');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(4) a').to.have.attribute('href').which.contains('/profile/edit');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a').text.to.equal('My Organisation & Team');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a').to.have.attribute('href').which.contains('/recruiter/organisations');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(6) a').to.present;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(6) a').to.be.visible;
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(6) a').text.to.equal('Logout');
      browser.expect.element(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(6) a').to.have.attribute('href').which.contains('/user/sign_out');
    }
    browser.click('.recruiter-link a.ga-trackable', function(response){
      this.assert.ok(browser === this, 'Recruiter link clicked, redirecting into recruiter signup page.');
    });
    browser.waitForElementPresent('body', 2000);
    browser.expect.element('.page-popup-like').to.be.present;
    browser.expect.element('.page-popup-like').to.be.visible;
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Signup');
    browser.expect.element('label[for=user_email]').to.be.present;
    browser.expect.element('label[for=user_email]').to.be.visible;
    browser.expect.element('label[for=user_email]').text.to.contain('Email');
    browser.expect.element('input[id=user_email]').to.be.present;
    browser.expect.element('input[id=user_email]').to.be.visible;
    browser.expect.element('label[for=user_password]').to.be.present;
    browser.expect.element('label[for=user_password]').to.be.visible;
    browser.expect.element('label[for=user_password]').text.to.contain('Set your password');
    browser.expect.element('input[id=user_password]').to.be.present;
    browser.expect.element('input[id=user_password]').to.be.visible;
    browser.expect.element('input[name=commit]').to.be.present;
    browser.expect.element('input[name=commit]').to.be.visible;
    browser.expect.element('input[name=commit]').to.have.value.that.equals('Submit');
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').text.to.contain('Login with Google+');
    browser.assert.attributeContains('.pt-2 a.btn-googleplus', 'href', '/user/auth/google_oauth2?is_recruiter=true');
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(2)').text.to.contain('Already registered? Click here to Login');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(2)', 'href', '/user/sign_in');
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(3)').text.to.contain('Resend Email Confirmation');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(3)', 'href', '/user/confirmation/new');
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(4)').text.to.contain('Candidate Signup');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(4)', 'href', '/user/sign_up');
    browser.click('a.block.text-blue', function(response){
      this.assert.ok(browser === this, 'Recruiter login page link clicked, redirecting recruiter login page.');
    });
    browser.waitForElementPresent('body', 2000);
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Recruiter Login');
    browser.expect.element('label[for=user_email]').to.be.present;
    browser.expect.element('label[for=user_email]').to.be.visible;
    browser.expect.element('label[for=user_email]').text.to.contain('Email');
    browser.expect.element('input[id=user_email]').to.be.present;
    browser.expect.element('input[id=user_email]').to.be.visible;
    browser.expect.element('label[for=user_password]').to.be.present;
    browser.expect.element('label[for=user_password]').to.be.visible;
    browser.expect.element('label[for=user_password]').text.to.contain('Password');
    browser.expect.element('input[id=user_password]').to.be.present;
    browser.expect.element('input[id=user_password]').to.be.visible;
    browser.expect.element('input[name=commit]').to.be.present;
    browser.expect.element('input[name=commit]').to.be.visible;
    browser.expect.element('input[name=commit]').to.have.value.that.equals('Login');
    browser.expect.element('.f-pwd').to.be.present;
    browser.expect.element('.f-pwd').to.be.visible;
    browser.expect.element('.f-pwd').text.to.contain('(Forgot your password?)');
    browser.assert.attributeContains('.f-pwd', 'href', '/user/password/new?is_recruiter=true');
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(1).btn-googleplus').text.to.contain('Login with Google+');
    browser.assert.attributeContains('.pt-2 a.btn-googleplus', 'href', '/user/auth/google_oauth2?is_recruiter=true');
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(2)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(2)').text.to.contain('New User? Click here to Signup');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(2)', 'href', '/user/sign_up?is_recruiter=true');
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(3)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(3)').text.to.contain('Resend Email Confirmation');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(3)', 'href', '/user/confirmation/new?is_recruiter=true');
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.present;
    browser.expect.element('.pt-2 a:nth-of-type(4)').to.be.visible;
    browser.expect.element('.pt-2 a:nth-of-type(4)').text.to.contain('Candidate Login');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(4)', 'href', '/user/sign_in');
    browser.setValue('input[type=email]', 'kapur.r1985@gmail.com');
    browser.setValue('input[type=password]', 'goodservice');
    browser.click('input[type=submit]');
    browser.pause(5000);
    browser.elements('css selector', menu, navigationAfterLogin);
    browser.assert.urlEquals(browser.launch_url + '/recruiter/candidate_infos', 'Recruiter login Sucessful.');
    /*
    browser.click(afterLoginMenu + ' .dropdown .dropdown-menu li:nth-of-type(5) a', function(response){
      this.assert.ok(browser === this, 'Recruiter organisations page link click.');
    });
    */
    browser.waitForElementVisible('body.layout3.new-design', 2000);
    browser.pause(3000);
    browser.url(browser.launch_url + '/recruiter/organisations');
    browser.expect.element('.content-box-recruiter').to.be.present;
    browser.expect.element('.content-box-recruiter').to.be.visible;
    browser.expect.element('table.table.org.table-lg.text-center').to.be.present;
    browser.expect.element('table.table.org.table-lg.text-center').to.be.visible;
    browser.expect.element('.content-box-recruiter .org-heading a.outline.pull-right').to.be.present;
    browser.expect.element('.content-box-recruiter .org-heading a.outline.pull-right').to.be.visible;
    browser.expect.element('.content-box-recruiter .org-heading a.outline.pull-right').text.to.contain('Add New Organisation');
    browser.expect.element('.content-box-recruiter .org-heading span.pull-left').to.be.present;
    browser.expect.element('.content-box-recruiter .org-heading span.pull-left').to.be.visible;
    browser.expect.element('.content-box-recruiter .org-heading span.pull-left').text.to.contain('My Organisations');
    // remove selected organization
    var orgID = '402';
    browser.expect.element('a.investment-link[href="/recruiter/organisations/' + orgID + '"]').to.be.present;
    browser.expect.element('a.investment-link[href="/recruiter/organisations/' + orgID + '"]').to.be.visible;
    browser.click('a.investment-link[href="/recruiter/organisations/' + orgID + '"]', function(response){
      this.assert.ok(browser === this, 'Organisations remove linked clicked and organisation removed.');
    });
    browser.pause(6000);
    browser.end();
  }
};