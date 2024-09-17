<h1>Azure-Architecture</h1>
<b>Serverless Feedback Web Application</b>
<br />
<br />

<p>This project demonstrates the use of Azure's serverless computing and storage solutions to build a simple feedback collection web application. It leverages Azure Functions for serverless execution, Azure Cosmos DB for NoSQL database storage, and Azure Storage for hosting a static website.</p>

<h2>Overview</h2>
<p>The application allows users to submit feedback through a web form. The feedback is processed and stored in Azure Cosmos DB via an Azure Function. The static web application is hosted on Azure Storage, providing a simple and cost-effective way to deliver the frontend interface.</p>
<br />
<br />

<h2>Architecture</h2>

- Azure Functions: Handles the backend logic for processing and storing feedback. It is triggered by HTTP requests and interacts with Azure Cosmos DB.

- Azure Cosmos DB: Stores user feedback in a NoSQL database. It is scalable and provides low-latency data access.

- Azure Storage: Hosts the static web application (HTML, CSS, JavaScript) and serves it to users.
<br />
<br />

<h2>Languages Used</h2>

- <b>HTML:</b> Structures the form elements such as input fields and buttons.
- <b>CSS:</b> Styles the form and confirmation message for a better user experience.
- <b>JavaScript:</b> Manages the form submission process, including preventing default form.
<br />
<br />

<h2>Utilities and Tools Used</h2>

- <b>Azure Portal:</b> Central hub for managing and configuring Azure services, such as Azure Functions, Cosmos DB, and Storage Accounts.
- <b>Azure Resource Group:</b> A container that holds related resources for an Azure solution, simplifying resource management and organization.

- <b>Azure Functions:</b> Serverless compute service that runs code in response to HTTP requests without managing infrastructure. It handles the backend logic for processing and storing feedback.
- <b>Azure Cosmos DB:</b> NoSQL database service for storing and querying feedback data. Provides high availability and scalability for handling data.
- <b>Azure Storage (Static Website Hosting):</b> Stores and serves static web content (HTML, CSS, JavaScript) for the frontend of the application. It provides a simple way to host the website without a dedicated web server.
- <b>Azure Application Insights</b> UMonitoring and diagnostics service to track performance, errors, and usage metrics of the Azure Functions and overall application.
- <b>HTML/CSS/JavaScript:</b> Core web technologies used for building the frontend interface. HTML structures the content, CSS styles it, and JavaScript handles user interactions and form submissions.
- <b>JavaScript Fetch API:</b> Used to make HTTP requests from the frontend to the Azure Function endpoint, sending feedback data for processing.
- <b>Node.js:</b> JavaScript runtime used for developing the Azure Function if you choose
Node.js as the runtime stack. Allows you to write server-side code in JavaScript.
- <b>Visual Studio Code:</b> Tool for writing and editing HTML, CSS, JavaScript, and Azure Functions code.


<h2>Setup</h2>

1. **Create Resource Group**:
   - Go to the Azure Portal, search for "Resource Groups", and create a new resource group named `feedbackApp-rg`.

2. **Create Azure Function**:
   - In the Azure Portal, search for "Function App" and create a new Function App named `feedback-function-app` in the `feedbackApp-rg` resource group.

3. **Create Azure Cosmos DB**:
   - Search for "Azure Cosmos DB" in the Azure Portal and create a new database account named `feedback-db` in the same resource group.

4. **Configure Cosmos DB**:
   - Create a new database named `feedbackDB` and a container named `feedbackContainer`.

5. **Deploy Azure Function**:
   - Create a new HTTP trigger function in your Function App. Add the provided code to handle feedback submissions and configure the Cosmos DB connection string in the Application Settings.

6. **Deploy Static Web Application**:
   - Create an Azure Storage Account and enable static website hosting.
   - Upload your HTML, CSS, and JavaScript files to the `$web` container.
  
7. **Test Function and Frontend Integration**:
   - Submit Feedback Form: Access your static website, fill out the feedback form, and submit it.
   - Verify Data: Check Azure Cosmos DB to ensure the feedback data is stored correctly.
  
8. **Monitor and Troubleshoot**:
   - Use Azure Application Insights: If enabled, check Application Insights for any issues with the Azure Function.
   - Debug as Needed: Resolve any issues with data processing or display by reviewing logs and errors.
<br />
<br />

<p align="center">
<img width="345" alt="Screenshot 2024-09-16 at 4 08 42 PM" src="https://github.com/user-attachments/assets/6b7ccb88-7585-48e3-97e4-cce407adf297"></p>
<br>
<br>



<!--
 ```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
--!>
</html>
