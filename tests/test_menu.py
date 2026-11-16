"""Testes reais do menu: SITE_URL=http://127.0.0.1:4174 python -B -m unittest discover -s tests."""
import os
import shutil
import unittest
from datetime import date, timedelta
from playwright.sync_api import sync_playwright, expect


PAGES = ('index.html', 'pages/especialistas.html', 'pages/servicos.html',
         'pages/convenios.html', 'pages/agendamento.html', 'pages/faq.html', 'pages/como-chegar.html')


class MenuTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.runtime = sync_playwright().start()
        cls.browser = cls.runtime.chromium.launch(executable_path=shutil.which('chromium'), args=['--no-sandbox'])
        cls.base = os.environ.get('SITE_URL', 'http://127.0.0.1:4174').rstrip('/')

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.runtime.stop()

    def setUp(self):
        self.context = self.browser.new_context(viewport={'width': 375, 'height': 900})
        self.page = self.context.new_page()
        self.errors = []
        self.page.on('pageerror', lambda error: self.errors.append(str(error)))
        self.page.on('response', lambda response: self.errors.append(response.url)
                     if response.url.startswith(self.base) and response.status >= 400 else None)
        self.open_page('index.html')

    def open_page(self, path):
        self.page.goto(self.base + '/' + path)
        self.button = self.page.locator('.menu-botao')
        self.menu = self.page.locator('#menu-principal')

    def tearDown(self):
        self.assertEqual(self.errors, [])
        self.context.close()

    def test_all_pages_and_viewports(self):
        for path in PAGES:
            self.open_page(path)
            expect(self.button).to_have_attribute('aria-controls', 'menu-principal')
            for width in (320, 375, 640, 641, 768, 1024, 1280):
                self.page.set_viewport_size({'width': width, 'height': 900})
                if width <= 640:
                    expect(self.button).to_be_visible()
                    expect(self.menu).to_be_hidden()
                    self.button.click()
                    expect(self.button).to_have_attribute('aria-expanded', 'true')
                    expect(self.menu).to_be_visible()
                    for link in self.menu.locator('a').all():
                        self.assertGreaterEqual(link.bounding_box()['height'], 44)
                    self.button.click()
                    expect(self.menu).to_be_hidden()
                    expect(self.button).to_have_attribute('aria-expanded', 'false')
                else:
                    expect(self.button).to_be_hidden()
                    expect(self.menu).to_be_visible()
                self.assertTrue(self.page.evaluate('document.documentElement.scrollWidth <= innerWidth'), path)

    def test_keyboard_escape_tab_and_focus(self):
        for path in PAGES:
            self.open_page(path)
            self.button.focus()
            self.page.keyboard.press('Enter')
            expect(self.menu).to_be_visible()
            expect(self.button).to_be_focused()
            self.page.keyboard.press('Tab')
            expect(self.menu.locator('a').first).to_be_focused()
            self.page.keyboard.press('Escape')
            expect(self.button).to_be_focused()
            expect(self.menu).to_be_hidden()
            self.assertEqual(self.button.evaluate('el => getComputedStyle(el).outlineStyle'), 'solid')
            self.page.keyboard.press('Space')
            expect(self.menu).to_be_visible()
            self.menu.locator('a').last.focus()
            self.page.keyboard.press('Tab')
            expect(self.menu).to_be_hidden()
            self.assertFalse(self.page.evaluate("document.activeElement.closest('#menu-principal') !== null"))
            self.button.focus()
            self.page.keyboard.press('Space')
            self.page.keyboard.press('Shift+Tab')
            # Especialistas mantém a marca dentro do nav; sair dela requer mais um Tab.
            if self.menu.is_visible():
                expect(self.page.locator('body > header nav > a')).to_be_focused()
                self.page.keyboard.press('Shift+Tab')
            expect(self.menu).to_be_hidden()

    def test_resize_preserves_visible_focus(self):
        self.button.focus()
        self.page.set_viewport_size({'width': 768, 'height': 900})
        expect(self.menu.locator('a').first).to_be_focused()
        self.page.set_viewport_size({'width': 375, 'height': 900})
        expect(self.button).to_be_focused()
        expect(self.menu).to_be_hidden()
        self.button.click()
        self.page.keyboard.press('Tab')
        self.page.set_viewport_size({'width': 1280, 'height': 900})
        expect(self.menu.locator('a').first).to_be_focused()
        expect(self.menu).to_be_visible()
        self.page.set_viewport_size({'width': 320, 'height': 900})
        expect(self.button).to_be_focused()
        expect(self.menu).to_be_hidden()

    def test_outside_click_and_navigation(self):
        self.button.click()
        self.page.locator('h1').click()
        expect(self.menu).to_be_hidden()
        for path in PAGES:
            self.open_page(path)
            self.button.click()
            links = self.menu.locator('a')
            expect(links).to_have_count(7)
            for link in links.all():
                self.assertEqual(self.page.request.get(link.evaluate('el => el.href')).status, 200)
            links.filter(has_text='FAQ').click()
            expect(self.page).to_have_url(self.base + '/pages/faq.html')
            expect(self.page.locator('#menu-principal')).to_be_hidden()

    def test_without_javascript_and_enlarged_text(self):
        with self.browser.new_context(java_script_enabled=False, viewport={'width': 320, 'height': 900}) as context:
            page = context.new_page()
            for path in PAGES:
                page.goto(self.base + '/' + path)
                expect(page.locator('.menu-botao')).to_be_hidden()
                expect(page.locator('#menu-principal')).to_be_visible()
        for path in PAGES:
            self.open_page(path)
            self.page.set_viewport_size({'width': 320, 'height': 900})
            self.page.add_style_tag(content='html { font-size: 200%; }')
            self.button.click()
            self.assertTrue(self.page.evaluate('document.documentElement.scrollWidth <= innerWidth'), path)

    def test_specialists_regression(self):
        self.open_page('pages/especialistas.html')
        buttons = self.page.locator('.especialista__botao')
        expect(buttons).to_have_count(6)
        for button in buttons.all():
            button.focus()
            self.page.keyboard.press('Enter')
            panel = self.page.locator('#' + button.get_attribute('aria-controls'))
            expect(panel).to_be_visible()
            expect(button).to_have_attribute('aria-expanded', 'true')
            self.page.keyboard.press('Escape')
            expect(panel).to_be_hidden()
            expect(button).to_be_focused()
        expect(self.menu).to_be_hidden()

    def test_appointment_regression(self):
        self.open_page('pages/agendamento.html')
        submit = self.page.get_by_role('button', name='Solicitar Pré-agendamento', exact=True)
        submit.click()
        expect(self.page.locator('[aria-invalid="true"]')).to_have_count(5)
        expect(self.page.locator('#nome')).to_be_focused()
        self.page.locator('#nome').fill('Vitor Danillo')
        self.page.locator('#telefone').fill('(11) 99999-9999')
        self.page.locator('#email').fill('invalido')
        self.page.locator('#especialidade').select_option('cardiologia')
        self.page.locator('#data').fill('31/02/2027')
        submit.click()
        expect(self.page.locator('#erro-email')).to_be_visible()
        expect(self.page.locator('#erro-data')).to_be_visible()
        self.page.locator('#email').fill('vitor@example.com')
        self.page.locator('#data').fill('01/01/2000')
        submit.click()
        expect(self.page.locator('#erro-data')).to_be_visible()
        self.page.locator('#data').fill((date.today() + timedelta(days=1)).strftime('%d%m%Y'))
        expect(self.page.locator('#data')).to_have_value((date.today() + timedelta(days=1)).strftime('%d/%m/%Y'))
        submit.click()
        expect(self.page.locator('[aria-invalid="true"]')).to_have_count(0)
        expect(self.page.locator('#mensagem-formulario')).to_contain_text('envio ainda não está integrado')
        expect(self.menu).to_be_hidden()


if __name__ == '__main__':
    unittest.main()
