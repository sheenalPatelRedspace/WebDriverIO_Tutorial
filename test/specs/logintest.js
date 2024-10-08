const LoginPage = require('../pageobjects/demo.login.page')

describe('Demo Tests', () => {
    it('Login Test', async () => {
        browser.url('https://the-internet.herokuapp.com/login')

        await LoginPage.login("tomsmith", "SuperSecretPassword!")
        await LoginPage.validateResult('You logged into a secure area!')

        // await $('#username').setValue("tomsmith")
        // await $('#password').setValue("SuperSecretPassword!")
        // browser.pause(20000)
        // await $('button[type="submit"]').click()

        // const secureElement = await $('#flash')
        // await expect(secureElement).toBeExisting()
        // await expect(secureElement).toHaveText([expect.stringContaining('You logged into a secure area!')])
    })
})