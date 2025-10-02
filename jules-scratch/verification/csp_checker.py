from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    console_messages = []
    page.on("console", lambda msg: console_messages.append(msg.text))

    page.goto("http://localhost:3000")

    browser.close()

    csp_violations = [msg for msg in console_messages if "Refused to apply inline style" in msg or "Refused to execute inline script" in msg]

    if csp_violations:
        print("CSP Violations Found:")
        for violation in csp_violations:
            print(violation)
    else:
        print("No CSP violations found on the homepage.")

with sync_playwright() as playwright:
    run(playwright)