// import { When, Then, Before } from '@cucumber/cucumber';
// import { WebDriver } from '../../base/drivers/WebDriver';
// import { SearchPage } from '../../pages/web/SearchPage';

// let searchPage: SearchPage;

// Before({ tags: "@web" }, async function () {
//     searchPage = new SearchPage(WebDriver.getPage());
// });

// When('I perform search for {string}', { timeout: 60 * 1000 }, async function (searchTerm: string) {
//     await searchPage.performSearch(searchTerm);
// });

// // Then('I sort the displayed result from Low to High', { timeout: 60 * 1000 }, async function () {
// //     await searchPage.sortResult();
// // });


