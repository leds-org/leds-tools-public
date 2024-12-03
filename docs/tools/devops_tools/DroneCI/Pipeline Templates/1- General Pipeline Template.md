## General Pipeline Template on Backend Services

```yml
kind: pipeline
type: docker
name: Build

# This step builds the Docker image. It's the first step and ensures the code compiles before proceeding.

steps:
  - name: build
    image: docker:27.2.0-dind
    volumes:
      - name: dockersock
        path: /var/run/docker.sock
    commands:
      - cd <your_project_directory>
      - docker build -t <image_name>:${DRONE_COMMIT_BRANCH} -f <path_to_dockerfile> .

volumes:
  - name: dockersock
    host:
      path: /var/run/docker.sock

services:
  - name: docker
    image: docker:27.2.0-dind
    privileged: true
    volumes:
      - name: dockersock
        path: /var/run/docker.sock

---

kind: pipeline
type: docker
name: Checks

# This step performs code checks and analysis.

steps:
  - name: sonarqube-check
    image: heilima/custom-dotnet-sonar:latest
    environment:
      sonarToken:
        from_secret: sonar_token
      sonarAddr:
        from_secret: sonar_addr
    commands:
      - echo "Starting SonarQube analysis"
      - cd <your_project_directory>
      - mkdir -p Coverage
      - dotnet restore <project_file>
      - dotnet sonarscanner begin /k:"<project_key>" /d:sonar.host.url="$sonarAddr" /d:sonar.token="$sonarToken" /d:sonar.qualitygate.wait=true
      - dotnet build <project_file>
      - dotnet sonarscanner end /d:sonar.token="$sonarToken"

depends_on:
  - Build

---

kind: pipeline
type: docker
name: Tests

steps:
  - name: tests
    image: alpine:latest
    commands:
      - echo "🚫 No tests implemented yet :C"

depends_on:
  - Build

---

kind: pipeline
type: docker
name: Publish

# After building and checking, the image can be published.

steps:
  - name: publish
    image: docker:27.2.0-dind
    volumes:
      - name: dockersock
        path: /var/run/docker.sock
    environment:
      GITHUB_USERNAME:
        from_secret: GITHUB_USERNAME
      GITHUB_TOKEN:
        from_secret: GHCR_TOKEN
    commands:
      - cd <your_project_directory>
      - echo $GITHUB_TOKEN | docker login ghcr.io -u $GITHUB_USERNAME --password-stdin
      - docker build -t ghcr.io/<org_name>/<repo_name>:${DRONE_COMMIT_BRANCH} -f <path_to_dockerfile> .
      - docker push ghcr.io/<org_name>/<repo_name>:${DRONE_COMMIT_BRANCH}

volumes:
  - name: dockersock
    host:
      path: /var/run/docker.sock

services:
  - name: docker
    image: docker:27.2.0-dind
    privileged: true
    volumes:
      - name: dockersock
        path: /var/run/docker.sock

depends_on:
  - Checks

trigger:
  branch:
    - develop
    - test
  event:
    - push

---

kind: pipeline
type: docker
name: Deploy:Develop

# Deploys the Docker image to the Develop environment.

steps:
  - name: deploy
    image: appleboy/drone-ssh
    settings:
      host:
        from_secret: SERVER_HOST
      username:
        from_secret: SERVER_USER
      key:
        from_secret: SSH_KEY
      port: 22
      script:
        - cd /home/<user>/backend
        - sudo docker-compose pull <service_name>
        - sudo docker-compose up -d --no-deps <service_name>

depends_on:
  - Checks

volumes:
  - name: dockersock
    host:
      path: /var/run/docker.sock

services:
  - name: docker
    image: docker:27.2.0-dind
    privileged: true
    volumes:
      - name: dockersock
        path: /var/run/docker.sock

trigger:
  branch:
    - develop
  event:
    - push

---

kind: pipeline
type: docker
name: Deploy:Test

# Deploys the Docker image to the Test environment.

steps:
  - name: deploy
    image: appleboy/drone-ssh
    settings:
      host:
        from_secret: SERVER_HOST_TEST
      username:
        from_secret: SERVER_USER_TEST
      key:
        from_secret: SSH_KEY_TEST
      port: 22
      script:
        - cd /home/<user>/backend
        - sudo docker-compose pull <service_name>
        - sudo docker-compose up -d --no-deps <service_name>

depends_on:
  - Checks

volumes:
  - name: dockersock
    host:
      path: /var/run/docker.sock

services:
  - name: docker
    image: docker:27.2.0-dind
    privileged: true
    volumes:
      - name: dockersock
        path: /var/run/docker.sock

trigger:
  branch:
    - test
  event:
    - push

---

kind: pipeline
type: docker
name: Discord Failure Notification

# Sends failure notifications to Discord.

steps:
  - name: notify-discord-error
    image: appleboy/drone-discord
    settings:
      webhook_id:
        from_secret: discord_webhook_id
      webhook_token:
        from_secret: discord_webhook_token
      username: Pipeline Failed - Drone CI
      avatar_url: https://i.imgur.com/xwnDh4a.png
      message: |
        ## :rotating_light: Alert! The Drone CI Pipeline failed at **${DRONE_FAILED_STAGES}**.

        > **Author**: ${DRONE_COMMIT_AUTHOR} (${DRONE_COMMIT_AUTHOR_NAME})
        > **Message**: ${DRONE_COMMIT_MESSAGE}
        > **Branch**: ${DRONE_COMMIT_BRANCH}
        > **Commit**: [${DRONE_COMMIT_SHA}](${DRONE_COMMIT_LINK})
        > **Failed Stage**: ${DRONE_FAILED_STAGES}

        Check and resolve the error! :pray:

depends_on:
  - Build
  - Checks
  - Publish
  - Deploy:Develop
  - Deploy:Test

trigger:
  event:
    - push
  branch:
    - develop
    - test
  status:
    - failure

---

kind: pipeline
type: docker
name: Discord Success Notification

# Sends success notifications to Discord.

steps:
  - name: notify-discord-success
    image: appleboy/drone-discord
    settings:
      webhook_id:
        from_secret: discord_webhook_id
      webhook_token:
        from_secret: discord_webhook_token
      username: Pipeline Success - Drone CI
      avatar_url: https://i.imgur.com/ZfNDvTW.png
      message: |
        ## :rotating_light: A new image has been successfully deployed to the ${DRONE_COMMIT_BRANCH} environment!

        > **Author**: ${DRONE_COMMIT_AUTHOR} (${DRONE_COMMIT_AUTHOR_NAME})
        > **Message**: ${DRONE_COMMIT_MESSAGE}
        > **Branch**: ${DRONE_COMMIT_BRANCH}
        > **Commit**: [${DRONE_COMMIT_SHA}](${DRONE_COMMIT_LINK})

        Access the environment: [${DRONE_COMMIT_BRANCH} Environment](https://${DRONE_COMMIT_BRANCH}.example.com)

depends_on:
  - Build
  - Checks
  - Publish
  - Deploy:Develop
  - Deploy:Test

trigger:
  event:
    - push
```

## General Pipeline Template on Frontend Services

```yml
kind: pipeline
type: docker
name: Build

steps:
  - name: Build
    image: docker:27.2.0-dind
    environment:
      VITE_API_URL:
        from_secret: VITE_API_URL
      VITE_BASE_URL:
        from_secret: VITE_BASE_URL
      VITE_BASE_URL_AUTH:
        from_secret: VITE_BASE_URL_AUTH
    volumes:
      - name: dockersock
        path: /var/run/docker.sock
    commands:
      - rm -f .env
      - echo VITE_API_URL=$VITE_API_URL >> .env
      - echo VITE_BASE_URL=$VITE_BASE_URL >> .env
      - echo VITE_BASE_URL_AUTH=$VITE_BASE_URL_AUTH >> .env
      - cat .env
      - docker build --cache-from=frontend:${DRONE_COMMIT_BRANCH} -t frontend:${DRONE_COMMIT_BRANCH} -f Dockerfile .

services:
  - name: dind
    image: docker:27.1-dind
    privileged: true

volumes:
  - name: dockersock
    host:
      path: /var/run/docker.sock

---

kind: pipeline
type: docker
name: Checks

steps:
  - name: sonarqube
    image: openjdk:11
    environment:
      SONAR_TOKEN:
        from_secret: sonar_token
      SONAR_ADDR:
        from_secret: sonar_addr
    commands:
      - export SONAR_SCANNER_VERSION=6.0.0.4432
      - export SONAR_SCANNER_HOME=$HOME/.sonar/sonar-scanner-$SONAR_SCANNER_VERSION-linux
      - curl --create-dirs -sSLo $HOME/.sonar/sonar-scanner.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-$SONAR_SCANNER_VERSION-linux.zip
      - unzip -o $HOME/.sonar/sonar-scanner.zip -d $HOME/.sonar/
      - export PATH=$SONAR_SCANNER_HOME/bin:$PATH
      - export SONAR_SCANNER_OPTS="-server"
      - sonar-scanner 
        -Dsonar.qualitygate.wait=true
        -Dsonar.projectKey=your_project_key
        -Dsonar.sources=.
        -Dsonar.host.url=$SONAR_ADDR
        -Dsonar.typescript.tsconfigPath=./tsconfig.json

depends_on:
  - Build

---

kind: pipeline
type: docker
name: Tests

steps:
  - name: Tests
    image: alpine:latest
    commands:
      - echo "🚫 sem testes ainda :C"

depends_on:
  - Build

---

kind: pipeline
type: docker
name: Publish

steps:
  - name: publish-test
    image: docker:27.2.0-dind
    volumes:
      - name: dockersock
        path: /var/run/docker.sock
    environment:
      VITE_API_URL:
        from_secret: VITE_API_URL
      VITE_BASE_URL:
        from_secret: VITE_BASE_URL_TEST
      VITE_BASE_URL_AUTH:
        from_secret: VITE_BASE_URL_AUTH_TEST
      GITHUB_USERNAME:
        from_secret: GITHUB_USERNAME
      GITHUB_TOKEN:
        from_secret: GHCR_TOKEN
    commands:
      - rm -f .env
      - echo VITE_API_URL=$VITE_API_URL_TEST >> .env
      - echo VITE_BASE_URL=$VITE_BASE_URL_TEST >> .env
      - echo VITE_BASE_URL_AUTH=$VITE_BASE_URL_AUTH_TEST >> .env
      - echo $GITHUB_TOKEN | docker login ghcr.io -u $GITHUB_USERNAME --password-stdin
      - docker build --cache-from=ghcr.io/your_org/your_repo:${DRONE_COMMIT_BRANCH} -t ghcr.io/your_org/your_repo:${DRONE_COMMIT_BRANCH} -f Dockerfile .
      - docker push ghcr.io/your_org/your_repo:${DRONE_COMMIT_BRANCH}
    when:
      branch:
        include:
          - test

  - name: publish-develop
    image: docker:27.2.0-dind
    volumes:
      - name: dockersock
        path: /var/run/docker.sock
    environment:
      VITE_API_URL:
        from_secret: VITE_API_URL
      VITE_BASE_URL:
        from_secret: VITE_BASE_URL
      VITE_BASE_URL_AUTH:
        from_secret: VITE_BASE_URL_AUTH
      GITHUB_USERNAME:
        from_secret: GITHUB_USERNAME
      GITHUB_TOKEN:
        from_secret: GHCR_TOKEN
    commands:
      - rm -f .env
      - echo VITE_API_URL=$VITE_API_URL >> .env
      - echo VITE_BASE_URL=$VITE_BASE_URL >> .env
      - echo VITE_BASE_URL_AUTH=$VITE_BASE_URL_AUTH >> .env
      - echo $GITHUB_TOKEN | docker login ghcr.io -u $GITHUB_USERNAME --password-stdin
      - docker build --cache-from=ghcr.io/your_org/your_repo:${DRONE_COMMIT_BRANCH} -t ghcr.io/your_org/your_repo:${DRONE_COMMIT_BRANCH} -f Dockerfile .
      - docker push ghcr.io/your_org/your_repo:${DRONE_COMMIT_BRANCH}
    when:
      branch:
        include:
          - develop

depends_on:
  - Checks

services:
  - name: dind
    image: docker:27.1-dind
    privileged: true

volumes:
  - name: dockersock
    host:
      path: /var/run/docker.sock

trigger:
  branch:
    - develop
    - main
  event:
    - push

---

kind: pipeline
type: docker
name: Deploy:Develop

steps:
  - name: deploy
    image: appleboy/drone-ssh
    settings:
      host:
        from_secret: SERVER_HOST
      username:
        from_secret: SERVER_USER
      key:
        from_secret: SSH_KEY
      port: 22
      script:
        - cd /home/your_user/frontend
        - sudo docker-compose pull frontend-admin
        - sudo docker-compose up -d --no-deps frontend-admin

  - name: deploy-test
    image: appleboy/drone-ssh
    settings:
      host:
        from_secret: SERVER_HOST_TEST
      username:
        from_secret: SERVER_USER_TEST
      key:
        from_secret: SSH_KEY
      port: 22
      script:
        - cd /home/your_user/frontend
        - sudo docker-compose pull frontend-admin
        - sudo docker-compose up -d --no-deps frontend-admin

services:
  - name: dind
    image: docker:27.1-dind
    privileged: true

volumes:
  - name: dockersock
    host:
      path: /var/run/docker.sock

depends_on:
  - Publish

trigger:
  branch:
    - develop
    - main
  event:
    - push

---

kind: pipeline
type: docker
name: Deploy:Test

steps:
  - name: deploy
    image: appleboy/drone-ssh
    settings:
      host:
        from_secret: SERVER_HOST_TEST
      username:
        from_secret: SERVER_USER_TEST
      key:
        from_secret: SSH_KEY_TEST
      port: 22
      script:
        - cd /home/your_user/frontend
        - sudo docker-compose pull frontend-admin
        - sudo docker-compose up -d --no-deps frontend-admin

depends_on:
  - Publish

services:
  - name: dind
    image: docker:27.1-dind
    privileged: true

volumes:
  - name: dockersock
    host:
      path: /var/run/docker.sock

trigger:
  branch:
    - test
  event:
    - push

---

kind: pipeline
type: docker
name: Discord Failure Notification

steps:
  - name: notify-discord
    image: appleboy/drone-discord
    settings:
      webhook_id:
        from_secret: discord_webhook_id
      webhook_token:
        from_secret: discord_webhook_token
      username: Pipeline Failed - Drone CI
      avatar_url: https://i.imgur.com/xwnDh4a.png
      message: |
        ## :rotating_light: Oi! A Pipeline do Drone CI da ${DRONE_COMMIT_BRANCH} falhou na etapa de **${DRONE_FAILED_STAGES}**!

        > **Autor**: ${DRONE_COMMIT_AUTHOR} (${DRONE_COMMIT_AUTHOR_NAME})
        > **Mensagem**: ${DRONE_COMMIT_MESSAGE}
        > **Branch**: ${DRONE_COMMIT_BRANCH}
        > **Commit**: [${DRONE_COMMIT_SHA}](${DRONE_COMMIT_LINK})
        > **Erro na etapa**: ${DRONE_FAILED_STAGES}

        Se o erro for no SonarQube (step checks): [Frontend SonarQube](https://services.your_domain/dashboard?id=your_project_key)

        Verifiquem o erro e corrijam o commit! :pray:

depends_on:
  - Build
  - Checks
  - Publish
  - Deploy:Develop
  - Deploy:Test

trigger:
  status:
    - failure
  event:
    - push
  branch:
    - develop
    - test
    - enable-buildbreak

---

kind: pipeline
type: docker
name: Discord Success Notification

steps:
  - name: notify-discord-success
    image: appleboy/drone-discord
    settings:
      webhook_id:
        from_secret: discord_webhook_id
      webhook_token:
        from_secret: discord_webhook_token
      username: Pipeline Success (Image Deployed) - Drone CI
      avatar_url: https://i.imgur.com/ZfNDvTW.png
      message: |
        ## :rotating_light: Uma nova imagem foi publicada e o seu deploy foi feito com sucesso no ambiente ${DRONE_COMMIT_BRANCH}ing!

        > **Autor**: ${DRONE_COMMIT_AUTHOR} (${DRONE_COMMIT_AUTHOR_NAME})
        > **Mensagem**: ${DRONE_COMMIT_MESSAGE}
        > **Branch**: ${DRONE_COMMIT_BRANCH}
        > **Commit**: [${DRONE_COMMIT_SHA}](${DRONE_COMMIT_LINK})

        Acesse o ambiente: [Acesse o ambiente ${DRONE_COMMIT_BRANCH}ing](https://${DRONE_COMMIT_BRANCH}ing.your_domain)

depends_on:
  - Build
  - Checks
  - Publish
  - Deploy:Develop
  - Deploy:Test

trigger:
  event:
    - push
  branch:
    - develop
    - test
  status:
    - success
```