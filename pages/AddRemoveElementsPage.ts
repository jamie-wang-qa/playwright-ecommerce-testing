import {Page, Locator} from '@playwright/test';

export class AddRemoveElementsPage{
       // Add base URL constant
       private readonly BASE_URL = 'https://practice.expandtesting.com';
       private readonly PAGE_PATH = '/add-remove-elements';

    readonly page: Page;
    readonly pageHeading: Locator;
    readonly addElementButton: Locator;
    readonly deleteButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.pageHeading = page.getByRole('heading', { name: 'Add/Remove Elements page for' });
        this.addElementButton = page.getByRole('button', { name: 'Add Element' });
        this.deleteButton = page.getByRole('button', { name: 'Delete' });
    }

    async goto(){
        await this.page.goto(`${this.BASE_URL}${this.PAGE_PATH}`,
            {waitUntil: 'domcontentloaded',
                timeout: 60000
            }
        );
    }

    async addElement(){
        await this.addElementButton.click();
    }

    async deleteFirstElement(){
        await this.deleteButton.first().click();
    }
    
    async deleteLastElement(){
        await this.deleteButton.last().click();
    }
    
    async deleteElementAt(index:number){
        await this.deleteButton.nth(index).click();
    }

    async getDeleteButtonCount(): Promise<number>{
        return await this.deleteButton.count();
    }
}