# Deploying OpenFGA Server with SQL Server Using Docker Compose

This guide provides instructions to deploy an OpenFGA server along with a SQL Server database using Docker Compose. Both services will run in containers and communicate via environment variables.

---

## Steps to Deploy

### 1. Create a `.env` File

Create a `.env` file in your project directory with the following content:

```env
# SQL Server Configuration
ACCEPT_EULA=Y
SA_PASSWORD=0p3n_fg4!P4s5w@rd

# OpenFGA Configuration
STORAGE_TYPE=sqlserver
SQLSERVER_HOST=sqlserver
SQLSERVER_PORT=1433
SQLSERVER_USERNAME=sa
SQLSERVER_PASSWORD=0p3n_fg4!P4s5w@rd
SQLSERVER_DATABASE=openfga

# Logging Configuration
LOG_LEVEL=info
LOG_FORMAT=json
```

### 2. Create a `docker-compose.yml` File

Use the following Docker Compose file to define the services:

```yaml
version: '3.8'

services:
  sqlserver:
    image: mcr.microsoft.com/mssql/server:2019-latest
    container_name: sqlserver_container
    restart: unless-stopped
    environment:
      ACCEPT_EULA: ${ACCEPT_EULA}
      SA_PASSWORD: ${SA_PASSWORD}
    ports:
      - "1433:1433"
    volumes:
      - sqlserver_data:/var/opt/mssql

  openfga:
    image: openfga/openfga:latest
    container_name: openfga_container
    depends_on:
      - sqlserver
    environment:
      STORAGE_TYPE: ${STORAGE_TYPE}
      SQLSERVER_HOST: ${SQLSERVER_HOST}
      SQLSERVER_PORT: ${SQLSERVER_PORT}
      SQLSERVER_USERNAME: ${SQLSERVER_USERNAME}
      SQLSERVER_PASSWORD: ${SQLSERVER_PASSWORD}
      SQLSERVER_DATABASE: ${SQLSERVER_DATABASE}
      LOG_LEVEL: ${LOG_LEVEL}
      LOG_FORMAT: ${LOG_FORMAT}
    ports:
      - "8080:8080"
    command: ["run"]

volumes:
  sqlserver_data:
```

### 3. Start the Services

Bring up the services using Docker Compose:

```bash
docker-compose up -d
```

This will:

- Start the SQL Server container on port `1433`.
- Start the OpenFGA server on port `8080`.