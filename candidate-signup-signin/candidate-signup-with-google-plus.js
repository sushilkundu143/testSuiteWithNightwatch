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
    var menu = '.links .links-item';
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
      browser.expect.element(menu + ' .profile-link a.dropdown-toggle').to.be.present;
      browser.expect.element(menu + ' .profile-link a.dropdown-toggle').to.be.visible;
      browser.expect.element(menu + ' .profile-link a.dropdown-toggle  > span.d-block').text.to.contain('MY PROFILE');
      browser.click(menu + ' .profile-link a.dropdown-toggle', function(response) {
        this.assert.ok(browser === this, 'Candidate dropdown-menu clicked.');
      });
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu').to.be.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a').to.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a').to.have.attribute('href').which.contains('/profile/edit');
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a span').to.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a span').to.be.visible;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(1) a span').text.to.equal('My Profile');
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a').to.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a').to.have.attribute('href').which.contains('/user/sign_out');
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a span').to.present;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a > span').to.be.visible;
      browser.expect.element(menu + ':nth-of-type(1) .profile-link ul.dropdown-menu li:nth-of-type(2) a span').text.to.equal('Logout');
      browser.expect.element(menu + ':nth-of-type(2) a span').text.to.contain('FOR RECRUITERS');
      browser.expect.element(menu + ':nth-of-type(2) a').to.have.attribute('href').which.contains('/user/sign_up?is_recruiter=true');
    }
    browser.click('a.ga-trackable');
    browser.waitForElementPresent('body', 2000);
    browser.expect.element('.page-popup-like').to.be.present;
    browser.expect.element('.page-popup-like').to.be.visible;
    browser.expect.element('.page-popup-like .card-box h2.mb-15').text.to.equal('Candidate Signup');
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
    browser.assert.attributeContains('.pt-2 a.btn-googleplus', 'href', '/user/auth/google_oauth2');
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
    browser.expect.element('.pt-2 a:nth-of-type(4)').text.to.contain('Recruiter Signup');
    browser.assert.attributeContains('.pt-2 a:nth-of-type(4)', 'href', '/user/sign_up?is_recruiter=true');
    browser.click('.pt-2 a:nth-of-type(1).btn-googleplus');
    browser.waitForElementPresent('body', 5000);
    //browser.url('https://www.gmail.com');
    browser.setValue('input[type=email]', 'kapur.r1985@gmail.com');
    browser.click('.CwaK9');
    browser.pause(2000);
    browser.setValue('input[type=password]', 'Kapur.rahul');
    browser.click('.CwaK9');
    browser.waitForElementPresent('body', 1000);
    browser.pause(5000);
    browser.elements('css selector', menu, navigationAfterLogin);
    browser.assert.urlEquals(browser.launch_url + '/j#', 'Candidate login Sucessful.');
    browser.end();
  }
};