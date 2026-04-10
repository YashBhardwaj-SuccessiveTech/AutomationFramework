// import { BasicKeyword } from '../../base/basic-keywords';

// export class RegistrationPage extends BasicKeyword {

//     async launchApp() {
//         await this.sleep(2000);
//     }

//     async allowLocationPermission() {
//         await this.clickElement('~Share Location');
//         await this.clickElement('id=com.android.permissioncontroller:id/permission_allow_foreground_only_button');
//     }

//     async tapSignup() {
//         await this.clickElement('~Signup');
//     }

//     async enterCredentials(email: string, password: string) {
//         await this.setValue('android=new UiSelector().className("android.widget.EditText").instance(0)', email);
//         await this.setValue('android=new UiSelector().className("android.widget.EditText").instance(1)', password);
//     }

//     async acceptTerms() {
//         await this.clickElement('~I confirm the provided information is complete and accurate.');
//         await this.clickElement("~I accept VIP Play's ");
//     }

//     async tapCreateAccount() {
//         await this.clickElement('~Create Account');
//     }

//     async enterEmailOtp(otp: string) {
//         await this.setValue('android.widget.EditText', otp);
//     }

//     async submitOtp() {
//         await this.clickElement('~Submit');
//     }

//     async enterPhoneNumber(phone: string) {
//         await this.setValue('android.widget.EditText', phone);
//         await this.clickElement('~Continue');
//     }

//     async enterPhoneOtp(otp: string) {
//         await this.setValue('android.widget.EditText', otp);
//     }

//     async fillPersonalDetails() {
//         await this.setValue('android=new UiSelector().className("android.widget.EditText").instance(0)', 'Yash');
//         await this.clickElement("~I don't have a middle name");
//         await this.setValue("//*[@class='android.widget.EditText'][@index='7']", 'Bhardwaj');
//         await this.clickElement('~Select Suffix');
//         await this.clickElement('~Jr.');
//         await this.scroll('', 'forward', 1);
//         await this.clickElement('~Confirm Identity');
//     }

//     async verifyRegistrationSuccess() {
//         await this.apVerifyDisplayed('android=new UiSelector().description("Done")');
//     }
// }
