# Pipelines Steps

Our general stages and steps are:

### 1. Build Stage
"It doesn't make sense to test code that doesn't compile." This is the general consensus. The build stage is the first step. The code must compile before anything else. It's worth noting that just because code compiles, it doesn't mean it does what we want it to do. In our case, a Docker image is built in this stage. This is an essential step for CI to ensure that there won’t be any broken code in our repository.

Normally, Drone CI takes a Docker image with the necessary dependencies for the project and executes the docker build command to create the project's image. If the build fails, the pipeline is interrupted, and an alert is sent to the team.

This is the first step in all pipelines and occurs in all branches and all Git actions.

### 2. Check Stage
In the check stage, we perform a series of automated checks to ensure that the code not only compiles but also complies with best practices and quality standards. These checks may include:

- **Static Code Analysis:** Code analysis tools, such as SonarQube, are used to detect security vulnerabilities, complexity issues, and other concerns that may affect code quality.

- **Linting:** We apply linting rules to ensure that the coding style is consistent and compliant with the standards established by the team.

More specifically, in our case, Drone uses SonarQube to analyze the code. In it, we set certain goals. If the code does not meet these goals, the pipeline is interrupted, and an alert is sent to the team. The goals can be checked on our SonarQube website.

This stage is crucial for identifying and resolving issues before the code is integrated into the main repository, thus minimizing the risk of introducing failures into the system. This stage occurs in all branches and all Git actions.

### 3. Testing Stage
After the checks, we enter the more comprehensive testing stage, where we conduct:

- **Integration Tests:** We verify that different modules and services of the system work together as expected.

- **Functional Tests:** We perform functional tests to ensure that the system's functionalities meet the specified requirements.

- **Acceptance Tests:** In some cases, acceptance tests are conducted to validate that the system is ready to be delivered to end users.

- **Code Coverage:** We also check the code coverage to ensure that the tests cover a significant portion of the codebase.

This stage ensures that the code not only compiles and is free of obvious errors but also meets functionality expectations. 

_As of 10/10/2024 (MM/DD/YYYY), the test stage is not defined on our pipelines._

This stage occurs in all branches and all Git actions. 

### 4. Publishing Stage
Once the code has passed all previous stages, it is prepared for publishing. This involves:

- **Creating Docker Images:** The code is packaged into Docker images, which are used to facilitate deployment in different environments.

- **Publishing to Image Registries:** The generated Docker images are pushed to an image registry (such as GitHub Container Registry or Docker Hub) for easy access and reuse.

In ConectaFapes, this stage is restricted to some special branches, like develop and test. This stage logs into GHCR (GitHub Container Registry) and pushes the Docker image to it with the commit branch tag. If the branch is develop, the image is tagged as develop. This stage most likely won't fail, because the image is already built beforehand. If someone manages to fail this step, it will be because of a problem with the Docker image registry, or the login token must have expired.

This stage only occors in the "special" branches, only on pushing.

### 5. Deployment Stage
Finally, in the deployment stage, the Docker images are deployed to our enviroments. This stage may include:

- **Deployments to Multiple Environments:** The code can be deployed to different environments (testing, developing, etc.) depending on the project's needs.

- **Monitoring and Feedback:** After deployment, we monitor the system to identify issues and collect user feedback.

This step depends directly on the previous step. If the image is not published, the deployment will not happen. This stage is restricted to some special branches, like develop and test. The deployment is done in the respective environment, and the image is pulled from GHCR. If the deployment fails, an alert is sent to the team. This stage has multiple, conditional, steps depending on the branch.

This stage only occors in the "special" branches, only on pushing.

### 6. Alerting
This stage is responsible for sending alerts to the team in case of any failure or image deployment in the pipeline. This is important to ensure that the team is aware of any issues and can take immediate action to resolve them. It happens on all branches and actions on Git, only on failure. In our case, the alerts are sent via Discord.


Next, we'll dive deeper in the pipeline BPMN diagram, and where and when the stages are executed.