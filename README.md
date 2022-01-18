# INIT

- `npm i`

- `npm run dev`

# Descarga MS SQL SERVER

`https://www.youtube.com/watch?v=ReK0kscoF8o`

# Instalacion MS SQL SERVER

Modo de instalación -> Personalizado
- Instalar
- Installation
  - New SQL Server stand-alone-...
    - Developer
    - Aceptar licencia
    - Selecccionar - Database Engine Services (motor de base de datos)
    - Nombre de instancia por defecto - Named instance - MSSQLSERVER
    - Add Current User

# Server configuration

- MS SQL SERVER
- Click derecho en instancia de server (LAPTOP-FK...)
  - Propiedades
    - Security
      - Server authentication
        - SQL Server and Windows Authentication mode

# Restart server

- Click derecho en instancia de server (LAPTOP-FK...)
  - Restart

# Crear usuario en MS SQL SERVER

- Refresh
- Security
  - Logins (click derecho)
    - New login
      - General
        - SQL Server authentication
          - Login Name:  admin  
          - Password:  adminadmin
      - Server Role
        - sysadmin


# Crear base de datos para proyecto

- New query
  - CREATE DATABASE customdatabase;
ó
- Databases  (click derecho)
  - new database

# Crear tabla para proyecto

Databases - [nombre-db] - Tables (click derecho)
- new - Table
- id
  - Data type
    - int
    - Click derecho(set primary key)
  - Column Properties - Identity Specification
    - Is identity
- Guardar
  - Ctrl + S
- 

# Activar TCP/IP

Asegurarnos que tiene TCP activado TCP/IP
- Equipo - Administrar - Servicios y aplicaciones - SQL Server - SQL Server Network - Protocols - TCP/IP
- Enable
- Propiedades TCP port
- Puerto 1433 por default

# Errores

En caso de error : 
- can't connect
  - Reiniciar servicio
    - Equipo - Administrar - Servicios y aplicaciones - SQL Server - SQL Server Services - SQL Server 
      - Restart

- self signed certificate
  - connection.js
    optinons: {
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    }