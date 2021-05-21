import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { SpeakerComponentsPage, SpeakerDeleteDialog, SpeakerUpdatePage } from './speaker.page-object';

const expect = chai.expect;

describe('Speaker e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let speakerComponentsPage: SpeakerComponentsPage;
  let speakerUpdatePage: SpeakerUpdatePage;
  let speakerDeleteDialog: SpeakerDeleteDialog;
  const username = process.env.E2E_USERNAME ?? 'admin';
  const password = process.env.E2E_PASSWORD ?? 'admin';

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing(username, password);
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Speakers', async () => {
    await navBarPage.goToEntity('speaker');
    speakerComponentsPage = new SpeakerComponentsPage();
    await browser.wait(ec.visibilityOf(speakerComponentsPage.title), 5000);
    expect(await speakerComponentsPage.getTitle()).to.eq('gatewayApp.speaker.home.title');
    await browser.wait(ec.or(ec.visibilityOf(speakerComponentsPage.entities), ec.visibilityOf(speakerComponentsPage.noResult)), 1000);
  });

  it('should load create Speaker page', async () => {
    await speakerComponentsPage.clickOnCreateButton();
    speakerUpdatePage = new SpeakerUpdatePage();
    expect(await speakerUpdatePage.getPageTitle()).to.eq('gatewayApp.speaker.home.createOrEditLabel');
    await speakerUpdatePage.cancel();
  });

  it('should create and save Speakers', async () => {
    const nbButtonsBeforeCreate = await speakerComponentsPage.countDeleteButtons();

    await speakerComponentsPage.clickOnCreateButton();

    await promise.all([
      speakerUpdatePage.setFirstNameInput('firstName'),
      speakerUpdatePage.setSureNameInput('sureName'),
      speakerUpdatePage.setEmailInput('email'),
      speakerUpdatePage.setTwitterInput('twitter'),
      speakerUpdatePage.setBioInput('bio'),
      // speakerUpdatePage.sessionsSelectLastOption(),
    ]);

    expect(await speakerUpdatePage.getFirstNameInput()).to.eq('firstName', 'Expected FirstName value to be equals to firstName');
    expect(await speakerUpdatePage.getSureNameInput()).to.eq('sureName', 'Expected SureName value to be equals to sureName');
    expect(await speakerUpdatePage.getEmailInput()).to.eq('email', 'Expected Email value to be equals to email');
    expect(await speakerUpdatePage.getTwitterInput()).to.eq('twitter', 'Expected Twitter value to be equals to twitter');
    expect(await speakerUpdatePage.getBioInput()).to.eq('bio', 'Expected Bio value to be equals to bio');

    await speakerUpdatePage.save();
    expect(await speakerUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await speakerComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Speaker', async () => {
    const nbButtonsBeforeDelete = await speakerComponentsPage.countDeleteButtons();
    await speakerComponentsPage.clickOnLastDeleteButton();

    speakerDeleteDialog = new SpeakerDeleteDialog();
    expect(await speakerDeleteDialog.getDialogTitle()).to.eq('gatewayApp.speaker.delete.question');
    await speakerDeleteDialog.clickOnConfirmButton();
    await browser.wait(ec.visibilityOf(speakerComponentsPage.title), 5000);

    expect(await speakerComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
