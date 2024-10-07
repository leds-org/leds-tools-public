# Pipelines

Pipelines are an essential artifact in agile software development, which embraces the philosophy of continuous delivery. Our pipeline is managed by an executor called Drone CI.

![alt text](image.png)  
_Drone CI, our executor_

A pipeline is a process defined in stages, where each stage executes a crucial task for Continuous Integration (CI) and Continuous Delivery (CD). In other words, the CI pipeline checks the readiness of the code for integration into GitHub or GitLab, while the CD pipeline handles the deployment to our environment.

Our pipeline in ConectaFapes, for both the frontend and the backend, is organized into the following general stages:

### 1. Build Stage
"It doesn't make sense to test code that doesn't compile." This is the general consensus. The build stage is the first step. The code must compile before anything else. It's worth noting that just because code compiles, it doesn't mean it does what we want it to do. In our case, a Docker image is built in this stage. This is an essential step for CI to ensure that there won’t be any broken code in our repository.

### 2. Check Stage
In the check stage, we perform a series of automated checks to ensure that the code not only compiles but also complies with best practices and quality standards. These checks may include:

- **Static Code Analysis:** Code analysis tools, such as SonarQube, are used to detect security vulnerabilities, complexity issues, and other concerns that may affect code quality.

- **Linting:** We apply linting rules to ensure that the coding style is consistent and compliant with the standards established by the team.

This stage is crucial for identifying and resolving issues before the code is integrated into the main repository, thus minimizing the risk of introducing failures into the system.

### 3. Testing Stage
After the checks, we enter the more comprehensive testing stage, where we conduct:

- **Integration Tests:** We verify that different modules and services of the system work together as expected.

- **Functional Tests:** We perform functional tests to ensure that the system's functionalities meet the specified requirements.

- **Acceptance Tests:** In some cases, acceptance tests are conducted to validate that the system is ready to be delivered to end users.

This stage ensures that the code not only compiles and is free of obvious errors but also meets functionality expectations. 

_As of 19/07/2024 (MM/DD/YYYY), the test stage is not defined on our pipelines._

### 4. Publishing Stage
Once the code has passed all previous stages, it is prepared for publishing. This involves:

- **Creating Docker Images:** The code is packaged into Docker images, which are used to facilitate deployment in different environments.

- **Publishing to Image Registries:** The generated Docker images are pushed to an image registry (such as GitHub Container Registry or Docker Hub) for easy access and reuse.

### 5. Deployment Stage
Finally, in the deployment stage, the Docker images are deployed to our enviroments. This stage may include:

- **Deployments to Multiple Environments:** The code can be deployed to different environments (testing, developing, etc.) depending on the project's needs.

- **Monitoring and Feedback:** After deployment, we monitor the system to identify issues and collect user feedback.

This structured approach ensures that continuous delivery is performed efficiently and securely, allowing teams to deliver value to the customer quickly and reliably.
