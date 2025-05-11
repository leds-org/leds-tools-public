---
sidebar_position: 10
title: Management Metrics
---
To control the development process, it was necessary to choose certain metrics to monitor the project.
For this analysis, we selected the following metrics along with their methods of application and the expected improvements to the process:

# Metrics:

### Metric 1 - Team Performance:

##### 1.1 Description:

- Pull Requests created and reviewed

- Issues created, closed, and reopened by each developer

##### 1.2 How the measurement will be conducted:

Pull Requests (PRs):

- Created: Track the number of PRs opened by each developer

- Reviewed: Check who participated in the review process (comments and approvals)

Issues per Developer:

- Created: Check how many issues each developer created

- Closed: Number of issues each developer closed, indicating completed deliveries

- Reopened: Issues that were closed but later reopened

##### 1.3 Used tools:

- GitHub Issues.

##### 1.4 Expected impact on project improvement:

- Transparency in deliveries: Clearly shows what each team member has actually completed

- Identification of bottlenecks: Frequently pending PRs or reopened issues may indicate workflow failures, review issues, or poorly defined scopes

- Reduction of rework: Tracking reopened issues helps detect recurring errors and improve the development and validation process

- Balanced task distribution among members: Knowing who is creating, closing, and resolving tasks allows for fairer workload distribution

### Metric 2 - Average Delivery Time per Feature:

##### 2.1 Description:

This metric measures the time a developer or team takes to complete a feature, from the beginning of the work to its completion (delivery or merge). It allows monitoring of efficiency and development pace throughout the project.

##### 2.2 How the measurement will be conducted:

- The start date will be recorded when the feature is moved to the "In Progress" column in GitHub Projects;

- The completion date will be recorded when the feature is moved to the "Done" column or after the pull request is merged;

- Delivery time will be calculated in business days.

##### 2.3 Tools used:

- GitHub Project Board

- Sprint tracking spreadsheet (for calculation and analysis)

##### 2.4 Expected impact on project improvement:

- Predictability: Helps estimate how long future features will take more accurately;

- Planning: Improves task distribution for future sprints;

- Bottleneck identification: Allows the team to spot tasks that are taking longer than expected;

- Continuous improvement: Provides a basis for productive discussions in 1:1 meetings and sprint retrospectives.

### Metric 3 - Bug fix Rate

##### 3.1 Description:

Analysis of the amount of Pull Requests containing comments with the tags fix and bug.

##### 3.2 How the measurement will be conducted:

- Using GitHub Issues and Pull Requests (PRs).

##### 3.3 Tools used:

- GitHub Issues
- Pull requests

##### 3.4 Expected impact on project improvement:

- Reduces file generation failures, improving the plugin's reliability.

### Metric 4 - Defect Detection

##### 4.1 Description:

This metric evaluates the number of defects (bugs or failures) identified during the development and testing process. The goal is to monitor the quality of the delivered software and identify areas or phases of the project with a higher incidence of errors, contributing to the continuous improvement of the team and the product.

##### 4.2 How the measurement will be conducted

A defect will be recorded whenever a bug is identified in delivered features and documented in issues, tickets, or QA reports.

Data will be collected at two main stages:
- During the testing phase (internal or automated QA).

- After deployment to production (errors reported by users or monitoring systems).

The metric will be tracked biweekly, based on:
- Number of defects per sprint.

- Average number of defects per delivered feature.

- Phase in which the defect was detected (development, QA, production).

##### 4.3 Tool Used:

- GitHub Issues
- Sprint tracking spreadsheet (for calculation and analysis)

##### 4.4Expected impact on project improvement:

- Software quality: Early defect detection reduces production risks and increases confidence in the system.

- Test process optimization: Identifies recurring failures and allows reinforcement of automated or manual test cases.

- Regression tracking: Helps trace fragile features or those with a history of recurring bugs.

- Focus on prevention: Enables improvements in the development process, code reviews, and QA practices.

- Transparency and accountability: Provides a clear view of the quality of deliverables over time.