# Pipelines

Pipelines are an essential artifact in agile software development, which embraces the philosophy of continuous delivery. Our pipeline is managed by an executor called Drone CI.

![alt text](image.png)  
_Drone CI, our executor_

A pipeline is a process defined in stages, where each stage executes a crucial task for Continuous Integration (CI) and Continuous Delivery (CD). In other words, the CI pipeline checks the readiness of the code for integration into GitHub or GitLab, while the CD pipeline handles the deployment to our environment.

It is important to note that the pipeline executes different steps according to the action on Git. For example, when opening a Pull Request, the pipeline executes only the build and check steps, while when merging, the pipeline executes all the steps. There are also differences between branches. For example, the 'develop' branch publishes the application in the development environment, while feature branches only build, check, and test the code. More specific information about the stages and their implementations thereof can be found in the next sections.

Our pipeline in ConectaFapes, for both the frontend and the backend, is organized into the following general stages: Build, Check, Testing, Publishing, and Deployment.

This structured approach ensures that continuous delivery is performed efficiently and securely, allowing teams to deliver value to the customer quickly and reliably.


