import {test, expect} from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage'; 

test.describe('Add/Remove Elements Page', ()=>{
    test('Should add single element', async({page})=>{
            const addRemovePage = new AddRemoveElementsPage(page);

            await addRemovePage.goto();
            await addRemovePage.addElement();

            const count = await addRemovePage.getDeleteButtonCount();
            expect(count).toBe(1);
        }
    );

    test('Should Add multiple elements', async({page})=>{
        const addRemovePage = new AddRemoveElementsPage(page);

        //Add three elements
        await addRemovePage.goto();

        await addRemovePage.addElement();
        await addRemovePage.addElement();
        await addRemovePage.addElement();

        const count = await addRemovePage.getDeleteButtonCount();
        expect(count).toBe(3);
    });

    test('should delete first element', async({page})=>{
        const addRemovePage = new AddRemoveElementsPage(page);
        await addRemovePage.goto();

        await addRemovePage.addElement();
        await addRemovePage.addElement();
        await addRemovePage.addElement();

        await addRemovePage.deleteFirstElement();

        const count = await addRemovePage.getDeleteButtonCount();
        expect(count).toBe(2);

    });

    test('basic test', async ({ page }) => {
        const addRemovePage = new AddRemoveElementsPage(page);
        await addRemovePage.goto();

        await addRemovePage.addElement();
        await addRemovePage.addElement();

        //delete the first element
        await addRemovePage.deleteFirstElement();

        //delete the last element
        await addRemovePage.deleteLastElement();

        const count = await addRemovePage.getDeleteButtonCount();
        expect(count).toBe(0);
    });
});