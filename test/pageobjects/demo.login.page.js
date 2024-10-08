class LoginPage {
    get usernameTextBox() {
        return $('#username')
    }

    get passwordTextBox() {
        return $('#password')
    }

    get loginButton() {
        return $('button[type="submit"]')
    }

    get loginResult() {
        return $('#flash')
    }

    async login(username, password) {
        await this.usernameTextBox.setValue(username)
        await this.passwordTextBox.setValue(password)
        await this.loginButton.click()
    }

    async validateResult(result) {
        await expect(this.loginResult).toHaveText([expect.stringContaining(result)])
    }
}
module.exports = new LoginPage