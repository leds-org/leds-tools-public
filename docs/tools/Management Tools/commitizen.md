---
sidebar_position: 1
title: Commitizen
---
[Commitizen](https://commitizen-tools.github.io/commitizen/) is release management tool designed for teams. It assumes your team uses a standard way of committing rules and from that foundation, it can bump your project's version, create the changelog, and update files.

## Customization

To improve integration between the development team and project management, we made a customization of Commitizen. This customization allows the developer to change a "card" in Jira through the commit. For this, we use Jira's [Smart commit](https://support.atlassian.com/bitbucket-cloud/docs/use-smart-commits/) feature.

You can download our commitizen customized in [here]((./commitizen/example.cz.toml)).

## Configuration

Follow these steps to configure Commitizen in your Jira project:

1. Download the commitizen customized and save as .cz.toml
2. Replace JIRA`s Project ID on line 32 (e.g., Our JIRA's project is DEV)
3. Verify the Choices on line 81 is equal JIRA Project`s sprint board. 


