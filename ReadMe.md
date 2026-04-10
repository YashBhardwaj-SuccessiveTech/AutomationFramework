⭐ Key Architectural Principles
1️⃣ Full separation of:
Gherkin
Step Definitions
Logic (UI/API/DB)

➡ Steps must be thin (no logic inside).
➡ All logic lives in modules.

2️⃣ Page Object Model + Screenplay Pattern (optional)
Each page encapsulates UI selectors + actions
No locator leaks into steps
Playwright fixtures can be integrated

3️⃣ Scenario Context (World Pattern)
Store:
Session data
Tokens
Objects between steps

Example:
this.context.set("orderId", orderId);

4️⃣ Test Data Strategies
Primary: JSON/YAML files
External: Mongo/MySQL CSV
Dynamic: Faker.js

5️⃣ Parallel Execution
Each scenario isolates:
Browser context
API session
Test data

6️⃣ Multi-layer Assertions
UI Assertions
API Assertions
Contract validation (JSON schema)

7️⃣ Rich Reporting
Allure for steps, metadata, screenshots
Video & trace from Playwright
Slack/Jira integration optional



                   ┌───────────────────────────────┐
                   │         Feature Files         │
                   │   (Gherkin: Given/When/Then)  │
                   └──────────────┬────────────────┘
                                  │
                ┌─────────────────▼─────────────────┐
                │          Step Definitions          │
                │ (Glue between Gherkin & Modules)   │
                └─────────────────┬──────────────────┘
                                  │
         ┌────────────────────────▼─────────────────────────┐
         │                  Test Layer                       │
         │   - Hooks (before/after)                          │
         │   - Scenario Context / World                      │
         │   - Data loaders (JSON/YAML/Excel/DB)             │
         │   - Assertion handlers                            │
         └────────────────────────┬──────────────────────────┘
                                  │
      ┌───────────────────────────▼─────────────────────────────┐
      │                     Automation Layer                    │
      │   UI Module: Playwright/Selenium (Page Object Model)    │
      │   API Module: Axios/REST Assured/Postman SDK            │
      │   Mobile Module: Appium                                 │
      │   DB Module: SQL/NoSQL                                  │
      │   Message Queue: Kafka/RabbitMQ                         │
      └──────────────────────────┬──────────────────────────────┘
                                 │
          ┌──────────────────────▼─────────────────────────┐
          │               Core Utilities                   │
          │  - Logger (Winston/Log4j)                      │
          │  - Config reader (env/YAML/JSON)               │
          │  - Retry wrappers                              │
          │  - Error/Exception handlers                    │
          │  - API/Browser/DB clients                      │
          │  - Test Data generator (Faker, custom)         │
          └──────────────────────┬─────────────────────────┘
                                 │
           ┌─────────────────────▼─────────────────────────┐
           │                Reports                        │
           │ - Allure                                      │
           │ - HTML Reports                                │
           │ - Screenshot/video attachments                │
           └─────────────────────┬─────────────────────────┘
                                 │
              ┌──────────────────▼──────────────────────┐
              │              CI/CD Pipeline             │
              │     (Jenkins/GitHub Actions/GitLab)     │
              │ - Parallelism                           │
              │ - Dockerization                         │
              │ - Slack/Email notifications             │
              └─────────────────────────────────────────┘


bdd-framework/src/
│
├── features/
│   ├── login.feature
│   ├── checkout.feature
│
├── step_definitions/
│   ├── login.feature
│   ├── checkout.feature
│
├── base/
│   ├── drivers/
│   │   ├── mobileDriver.ts
│   │   └── webDriver.ts
│   ├── hooks/
│   │    ├── before.ts
│   │    └── after.ts
│   │
│   ├── keywords
│       ├── Action
│       └── Verification  
│
├── pages/    → Page Object Model
│   ├── loginPage.ts
│   ├── productPage.ts
│   └── cartPage.ts
│
├── api/
│   ├── client.ts
│   ├── authApi.ts
│   └── orderApi.ts
│
├── db/
│   ├── mysqlClient.ts
│   ├── mongoClient.ts
│   └── queries/
│
├── utils/
│   ├── config.ts
│   ├── logger.ts
│   ├── dataHelper.ts
│   ├── retry.ts
│   └── screenshots.ts
│
├── data/
│   ├── testData.json
│   └── users.yaml
│
├── reports/
│
├── cucumber.js        → Cucumber config
├── tsconfig.json
├── package.json
└── README.md



Features:
Web: A sample feature
Mobile: A sample feature

To run the tests:
For web tests: npm run test:web
For mobile tests: npm run test:mobile

For the mobile tests to work, you'll need:
Appium server running (appium in a separate terminal)
An Android emulator or real device connected
A sample app 

The framework uses:
TypeScript for type safety
Playwright for web automation
Appium with WebdriverIO for mobile automation
Cucumber for BDD-style testing
Page Object Model pattern for better maintainability




for package.json mobile 
// "mobile": "cucumber-js src/features/mobile/**/*.feature --require-module ts-node/register --require src/base/hooks/**/*.ts --require src/step-definitions/**/*.ts",