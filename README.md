# Description

## Running tests

- tests are configured to run on github CI/CD with environment and secrets
- there are scripts created to run tests easily (NPM script)
- alternatively use "npx playwright test" or "npx playwright test --headed"
- video and trace reports are configured for failures only

## Configured tests

1. User can login to application: with positive and negative variants (5)
2. User can logout from application
3. User can sort items: with all sorting options (4)
4. User can add and purchase an item
5. User can add and remove item from cart
