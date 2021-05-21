import { element, by, ElementFinder } from 'protractor';

export class SpeakerComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-speaker div table .btn-danger'));
  title = element.all(by.css('jhi-speaker div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class SpeakerUpdatePage {
  pageTitle = element(by.id('jhi-speaker-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  idInput = element(by.id('field_id'));
  firstNameInput = element(by.id('field_firstName'));
  sureNameInput = element(by.id('field_sureName'));
  emailInput = element(by.id('field_email'));
  twitterInput = element(by.id('field_twitter'));
  bioInput = element(by.id('field_bio'));

  sessionsSelect = element(by.id('field_sessions'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setIdInput(id: string): Promise<void> {
    await this.idInput.sendKeys(id);
  }

  async getIdInput(): Promise<string> {
    return await this.idInput.getAttribute('value');
  }

  async setFirstNameInput(firstName: string): Promise<void> {
    await this.firstNameInput.sendKeys(firstName);
  }

  async getFirstNameInput(): Promise<string> {
    return await this.firstNameInput.getAttribute('value');
  }

  async setSureNameInput(sureName: string): Promise<void> {
    await this.sureNameInput.sendKeys(sureName);
  }

  async getSureNameInput(): Promise<string> {
    return await this.sureNameInput.getAttribute('value');
  }

  async setEmailInput(email: string): Promise<void> {
    await this.emailInput.sendKeys(email);
  }

  async getEmailInput(): Promise<string> {
    return await this.emailInput.getAttribute('value');
  }

  async setTwitterInput(twitter: string): Promise<void> {
    await this.twitterInput.sendKeys(twitter);
  }

  async getTwitterInput(): Promise<string> {
    return await this.twitterInput.getAttribute('value');
  }

  async setBioInput(bio: string): Promise<void> {
    await this.bioInput.sendKeys(bio);
  }

  async getBioInput(): Promise<string> {
    return await this.bioInput.getAttribute('value');
  }

  async sessionsSelectLastOption(): Promise<void> {
    await this.sessionsSelect.all(by.tagName('option')).last().click();
  }

  async sessionsSelectOption(option: string): Promise<void> {
    await this.sessionsSelect.sendKeys(option);
  }

  getSessionsSelect(): ElementFinder {
    return this.sessionsSelect;
  }

  async getSessionsSelectedOption(): Promise<string> {
    return await this.sessionsSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class SpeakerDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-speaker-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-speaker'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
