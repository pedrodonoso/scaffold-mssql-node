
Descarga MS SQL SERVER
`https://www.youtube.com/watch?v=ReK0kscoF8o`

Escoger opción desarrollador

Modo de instalación -> Personalizado

- Instalar
- Installation
  - New SQL Server stand-alone-...
    - Developer
    - Aceptar licencia
    - Selecccionar - Database Engine Services (motor de base de datos)
    - Nombre de instancia por defecto - Named instance - MSSQLSERVER
    - Add Current User

- MS SQL SERVER
- Click derecho en instancia de server (LAPTOP-FK...)
  - Propiedades
    - Security
      - Server authentication
        - SQL Server and Windows Authentication mode


- Click derecho en instancia de server (LAPTOP-FK...)
  - Restart

- Refresh
- Databases
  - System databases
- Security
  - Logins (click derecho)
    - New login
      - General
        - SQL Server authentication
          - Login Name:  admin  
          - Password:  adminadmin
      - Server Role
        - sysadmin



Crear base de datos para proyecto
- New query
  - CREATE DATABASE customdatabase;

Asegurarnos que tiene TCP activado TCP/IP
- Equipo - Administrar - Servicios y aplicaciones - SQL Server - SQL Server Network - Protocols - TCP/IP
- Enable
- Propiedades TCP port
- Puerto 1433 por default

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