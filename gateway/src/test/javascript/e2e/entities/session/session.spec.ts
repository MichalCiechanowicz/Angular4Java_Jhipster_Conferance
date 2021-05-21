import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { SessionComponentsPage, SessionDeleteDialog, SessionUpdatePage } from './session.page-object';

const expect = chai.expect;

describe('Session e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let sessionComponentsPage: SessionComponentsPage;
  let sessionUpdatePage: SessionUpdatePage;
  let sessionDeleteDialog: SessionDeleteDialog;
  const username = process.env.E2E_USERNAME ?? 'admin';
  const password = process.env.E2E_PASSWORD ?? 'admin';

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing(username, password);
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Sessions', async () => {
    await navBarPage.goToEntity('session');
    sessionComponentsPage = new SessionComponentsPage();
    await browser.wait(ec.visibilityOf(sessionComponentsPage.title), 5000);
    expect(await sessionComponentsPage.getTitle()).to.eq('gatewayApp.session.home.title');
    await browser.wait(ec.or(ec.visibilityOf(sessionComponentsPage.entities), ec.visibilityOf(sessionComponentsPage.noResult)), 1000);
  });

  it('should load create Session page', async () => {
    await sessionComponentsPage.clickOnCreateButton();
    sessionUpdatePage = new SessionUpdatePage();
    expect(await sessionUpdatePage.getPageTitle()).to.eq('gatewayApp.session.home.createOrEditLabel');
    await sessionUpdatePage.cancel();
  });

  it('should create and save Sessions', async () => {
    const nbButtonsBeforeCreate = await sessionComponentsPage.countDeleteButtons();

    await sessionComponentsPage.clickOnCreateButton();

    await promise.all([
      sessionUpdatePage.setTitleInput('title'),
      sessionUpdatePage.setDescriptionInput('description'),
      sessionUpdatePage.setStartTimeInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      sessionUpdatePage.setEndTimeInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
    ]);

    expect(await sessionUpdatePage.getTitleInput()).to.eq('title', 'Expected Title value to be equals to title');
    expect(await sessionUpdatePage.getDescriptionInput()).to.eq('description', 'Expected Description value to be equals to description');
    expect(await sessionUpdatePage.getStartTimeInput()).to.contain(
      '2001-01-01T02:30',
      'Expected startTime value to be equals to 2000-12-31'
    );
    expect(await sessionUpdatePage.getEndTimeInput()).to.contain('2001-01-01T02:30', 'Expected endTime value to be equals to 2000-12-31');

    await sessionUpdatePage.save();
    expect(await sessionUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await sessionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Session', async () => {
    const nbButtonsBeforeDelete = await sessionComponentsPage.countDeleteButtons();
    await sessionComponentsPage.clickOnLastDeleteButton();

    sessionDeleteDialog = new SessionDeleteDialog();
    expect(await sessionDeleteDialog.getDialogTitle()).to.eq('gatewayApp.session.delete.question');
    await sessionDeleteDialog.clickOnConfirmButton();
    await browser.wait(ec.visibilityOf(sessionComponentsPage.title), 5000);

    expect(await sessionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
