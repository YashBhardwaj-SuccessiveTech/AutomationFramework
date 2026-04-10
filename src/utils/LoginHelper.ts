import { getHomePage, getLoginPage, getOtpPage } from "../base/hooks/mobile.hooks";

export async function loginUser() {
    await getHomePage().click_login_button();
    await getLoginPage().enter_email_id();
    await getLoginPage().enter_password();
    await getLoginPage().click_login_button();
    await getOtpPage().enter_phone_otp();
    await getOtpPage().click_submit_button();
}
