# What
Repository to put together frontend and backend for a simple rock paper scissors game

# Deployed
Deployed on AWS in this URL: http://dsuoa725qnagh.cloudfront.net/

> [!WARNING]  
> Given I used Ec2 for hosting the backend, the protocol has been HTTP instead of HTTPS, making it unavailable on Chrome for Android.
 

# Frontend
Used Angular v17 with sass, ESlint and tested using default Karma and Jasmine.

Technologies that could be good to add:
 - Jest + Testing library instead of Karma and Jasmine.
 - Tailwind instead of Sass.
 - Ngrx for state management.

## Folder structure
I have used a 2 layered structure, where the main layer is composed by this three folders:
- Core
- Game
- Shared

*Core* stands for components and configurations that not no-context related, they are loaded as an entrypoint for the others. Examples of code to be found here: root component, guards for router security, interceptors for header tokens...

*Game* is the main folder of the app, where the router will point to and every page will be implemented.

*Shared* aims to have highly shareable components, pipes, services, models... So it can be implemented only once and shared across the whole app.

### Component structure

Within each page folder I split in this structure of folders:

- components
- containers
- models
- services

*Components* are Angular components lacking all state information, they just accept inputs and under interactions of the user, send back to the parent the outputs to change the state of the app.

*Containers* are Angular components missing user interactions and fundamentally in charge of retrieve and manipulate data for building up the visual structure and state of the page.

*Models* are for the interfaces and enums.

*Services* are plainly for Angular services.

# Backend

Used Springboot with Gradle, added support for web services, Lombok and Swagger. Also included some metric coming from a docker compose with Prometheus and Grafana.

Technologies that could be good to add:
 - JPA when incorporating a DB
    - H2 if going simple
    - Mysql docker image
 - Logging

 ## Folder structure

 Followed a basic structure of packages for context, in this case, only relying on move. Where inside of it we can find:
 - controllers
 - services
 - models

All coming with their appropiate interfaces.

 *Controllers* gather the endpoints and only will call for logic on the services.

 *Services* handle all the logic of the application.

 *Models* just have the classes to transfer within the layers of the frontend and the backend

 