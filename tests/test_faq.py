"""Testes reais do FAQ: SITE_URL=http://127.0.0.1:4173 python -m unittest discover -s tests."""
import os
import shutil
import unittest
from playwright.sync_api import sync_playwright, expect


class FAQTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.runtime = sync_playwright().start()
        cls.browser = cls.runtime.chromium.launch(executable_path=shutil.which('chromium'), args=['--no-sandbox'])
        cls.base = os.environ.get('SITE_URL', 'http://127.0.0.1:4173').rstrip('/')

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.runtime.stop()

    def setUp(self):
        self.context = self.browser.new_context()
        self.page = self.context.new_page()
        self.errors = []
        self.page.on('pageerror', lambda error: self.errors.append(str(error)))
        self.page.on('response', lambda response: self.errors.append(response.url)
                     if response.url.startswith(self.base) and response.status >= 400 else None)
        self.page.goto(self.base + '/pages/faq.html')
        self.buttons = self.page.locator('.faq-item__botao')
        expect(self.buttons).to_have_count(10)

    def tearDown(self):
        self.assertEqual(self.errors, [])
        self.context.close()

    def test_click_aria_and_independent_answers(self):
        for button in self.buttons.all():
            answer = self.page.locator('#' + button.get_attribute('aria-controls'))
            expect(button).to_have_attribute('aria-expanded', 'false')
            expect(answer).to_be_hidden()
            button.click()
            expect(button).to_have_attribute('aria-expanded', 'true')
            expect(answer).to_be_visible()
            button.click()
            expect(answer).to_be_hidden()
        self.buttons.nth(0).click()
        self.buttons.nth(1).click()
        expect(self.page.locator('.faq-item__texto:visible')).to_have_count(2)

    def test_keyboard_and_focus(self):
        first = self.buttons.first
        first.focus()
        self.page.keyboard.press('Enter')
        expect(first).to_have_attribute('aria-expanded', 'true')
        self.page.keyboard.press('Space')
        expect(first).to_have_attribute('aria-expanded', 'false')
        self.page.keyboard.press('ArrowUp')
        expect(self.buttons.last).to_be_focused()
        self.page.keyboard.press('ArrowDown')
        expect(first).to_be_focused()
        self.page.keyboard.press('End')
        expect(self.buttons.last).to_be_focused()
        self.page.keyboard.press('Home')
        expect(first).to_be_focused()
        self.assertEqual(first.evaluate("el => getComputedStyle(el).outlineStyle"), 'solid')
        self.page.keyboard.press('Enter')
        self.page.keyboard.press('Tab')
        expect(self.page.locator('#faq-resposta-1 a')).to_be_focused()
        self.page.keyboard.press('Shift+Tab')
        self.page.keyboard.press('Space')
        self.page.keyboard.press('Tab')
        expect(self.buttons.nth(1)).to_be_focused()

    def test_layout_and_links(self):
        for width in (320, 375, 640, 641, 768, 1024, 1280):
            self.page.set_viewport_size({'width': width, 'height': 900})
            for button in self.buttons.all():
                if button.get_attribute('aria-expanded') == 'false':
                    button.click()
                self.assertGreaterEqual(button.bounding_box()['height'], 44)
            self.assertTrue(self.page.evaluate('document.documentElement.scrollWidth <= innerWidth'))
        for link in self.page.locator('.faq-item__texto a').all():
            response = self.page.request.get(link.evaluate('el => el.href'))
            self.assertEqual(response.status, 200)

    def test_without_javascript(self):
        with self.browser.new_context(java_script_enabled=False) as context:
            page = context.new_page()
            page.goto(self.base + '/pages/faq.html')
            expect(page.locator('.faq-item__texto:visible')).to_have_count(10)
            expect(page.locator('.faq-item__botao')).to_have_count(0)

    def test_enlarged_text(self):
        self.page.set_viewport_size({'width': 320, 'height': 900})
        self.page.add_style_tag(content='html { font-size: 200%; }')
        self.buttons.first.click()
        self.assertTrue(self.page.evaluate('document.documentElement.scrollWidth <= innerWidth'))
        expect(self.page.locator('#faq-resposta-1')).to_be_visible()


if __name__ == '__main__':
    unittest.main()
