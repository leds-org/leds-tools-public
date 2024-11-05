# Synk

Synk is a leading and industry standard security tool that helps you find, fix, and prevent vulnerabilities in your open source dependencies. It can be used in a variety of ways, including as a CLI tool, a GitHub Action, or a CI/CD integration.

In our case, we will be using Synk with Drone CI (Synk has a built-in Drone CI plugin) to scan our codebase for vulnerabilities and ensure that we are not introducing any new security issues. 

Synk, unlike others tools in our infrastructure, is a paid service, and is cloud-based. However, it offers a free tier that allows you to scan up to 100 projects for free. This can become a problem in our case, as we use a microservices architeture, with clean architecture principles, that means that we have a lot of projects in our codebase. 

## Synk features:

__Threats categorization__: Synk categorizes threats into four categories: critical, high, medium, and low. This elps you prioritize which vulnerabilities to fix first.

![alt text](image.png)

__Automatic fixes__: Synk can automatically fix some vulnerabilities for you, saving you time and effort.

![alt text](image-1.png)

__Automatic PRs__: Synk can automatically create a PR for you with the fixes for the vulnerabilities it found.

![alt text](image-2.png)

__Built-in Github Integration__: Synk has a built-in GitHub integration that allows you to easily integrate it into your CI/CD pipeline.

![alt text](image-3.png)