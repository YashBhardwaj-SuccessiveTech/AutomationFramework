// import { Page } from '@playwright/test';
// import { BasicKeyword } from '../../base/basic-keyword';

// let user: BasicKeyword;

// export class SearchPage {
//     constructor(page: Page) {
//         user = new BasicKeyword(page);
//     }

//     async performSearch(searchTerm: string) {
//         await user.typeInput('//div[@class="form-group"]/input', searchTerm);
//         await user.clickElement('//i[@class="bf-icon-search"]');
//     }

//     async sortResult() {
//         await user.pwWaitForSelector('body');
//         await user.clickElement('//span[@class="sort-by-txt"]');
//         await user.clickElement('//div[@class="sortby-panel-list-main"]/span[2]');
//     }
// }
