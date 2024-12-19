import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/"

test('should allow user to sign in', async ({ page }) => {
  await page.goto(UI_URL);

  //get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("1@1.com");
  await page.locator("[name=password]").fill("password123");

  await page.getByRole("button", { name: "Log In" }).click();

  await expect(page.getByText("Sign In Successful")).toBeVisible();

  await expect(page.getByRole("link", { name: "My bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});

test("should allow user to register", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();

  await page.getByRole("link", { name: "Sign Up" }).click();
  
  await expect(page.getByRole("heading", { name: "Create an account" })).toBeVisible();

  await page.locator("[name=firstName]").fill("MarkusTest");
  await page.locator("[name=lastName]").fill("JoosteTest");
  await page.locator("[name=email]").fill("markustest@gmail.com");
  await page.locator("[name=password]").fill("markustest@gmail.com");
  await page.locator("[name=confirmPassword]").fill("markustest@gmail.com");

  await page.getByRole("button", { name: "Create Account" }).click();

  await expect(page.getByText("Registration success!")).toBeVisible();

})

