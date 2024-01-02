# CounterApp

Rebuild the node modules:

```
npm install
```

Run the CounterApp:

```
npm start
```

# QA Engineer Test

- This framework is about Frontend and API Automation Testing
- Tools: Cypress 13.6.2 version, Mocha Framework, JavaScript, Mochawesome Reporter, Chai library for assertions
- Scripts of execution:
    - For Frontend Test execution :
    ```
    npm run runUI
    ```
    - For API Tests execution :
    ```
    npm run runAPI
    ```
    - For both API and Frontend Tests execution : 
     ```
    npm run runAllTests
    ```
    - For execution with test runner : 
    ```
    npx cypress open
    ```
- Framework generates mochawesome reporter


## Folder Structure

    ├── ...
    │
    |
    |──── e2e                       # Test suites
    │    ├──api-tests.cy.js         # Automated test scripts for API - drchrono tests
    │    ├──api-tests.cy.js         # Automated test scripts for UI - counterApp tests
    |    
    |
    ├──── mochawesome-report        # Test Report for the tests executed
    |     ├──api-tests-report.html  # Right click --> Reveal in Finder for MAC (OR) Reveal in Explorer for Windows
          ├──ui-tests-report.html   # Right click --> Reveal in Finder for MAC (OR) Reveal in Explorer for Windows

