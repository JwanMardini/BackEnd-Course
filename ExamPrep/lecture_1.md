# LECTURE_1
The backend refers to the server-side part of an application that handles data processing, database management, and server logic. It operates behind the scenes to support the frontend, or the user-facing part of the application.

the backend remains crucial for security, data management, performance, scalability, centralized logic, and compatibility across platforms.

## Web frameworks add these features:
- Routing: map routes to functions
- Middleware: functions that are executed before main logic, used for authentication, logging for example
- Templating: to make the backend generate html
- Form handling
- Session management, for maintaining user data across requests
- Authentication and authorization
- Database integration
- Error handling

## HTTP = Hypertext Transfer Protocol

- HTTP 1.0 was introduced 1996

- Underlying protocol: TCP (Transmission Control
Protocol)

- Defines how messages are formatted and transmitted on
the web

- Determines what actions web servers and web browsers
should take in response to various commands

## HTTP key characteristics
URL = Uniform Resource Locator (= web address)

- Request/Response 
-- Client sends request, server responds

- Statelessness – No memory – Need things like cookies and sessions to maintain a conversation over several requests

- Methods indicate desired action
-- GET, PUT, POST, DELETE

- Status codes
-- 200, 404

- Headers that contains metadata (for request and response)

- Security by using HTTPS

REST stands for Representational State Transfer. It is an architectural style for designing networked applications. REST relies on a stateless, client-server communication model, utilizing HTTP protocols. It treats web resources as objects that can be created, read, updated, or deleted through the use of HTTP methods such as GET, POST, PUT, and DELETE.


## Monolithic Architecture
- All components tightly integrated into a single codebase and executable
- The normal way to develop applications
- Advantages

    - Simplicity (easier to develop and deploy)
    
    - Code sharing
- Disadvantages
    - Scalability (horizontal scaling harder)

    - Maintenance (components highly coupled)

    - Limited flexibility (must use same tech everywhere)


## Microservice Architecture

- An application is divided into a set of loosely coupled, independently deployable (micro)services

- Each service is responsible for a specific (micro)function and communicates using a well-defined
API

- Advantages
    - Scalability

    - Fault isolation
    - Flexibility
    - Reuse (like identity services)

- Disadvantages
    - Complexity (for the application, simple for the service)

    - Longer development times

    - Network latency

    - Harder to operate, harder to develop


## Server-based vs serverless
- Applications have traditionally been deployed on-site by
IT Operations

- With cloud computing things started to change
- Infrastructure-as-a-Service (IaaS)
- Platform-as-a-Service (PaaS)
- Software-as-a-Service (SaaS)
- Functions-as-a-Service (FaaS)
- Servers become a non-concern, lowers cost


### Serverless functions
- Provided by several cloud providers
- AWS Lambda (Amazon)
- Azure Functions (Microsoft)
- Google Cloud Functions
- Oracle Cloud Functions
- Possible to use most languages and platforms (Node.js, Python, C#, Java,
Go etc)
- Runs on demand, keeps no state, pay for usage only
- Each provider provides rich integration with its other services

### Typical use case
- Image processing service

    - Triggers when an image is uploaded to storage

    - Function resizes the image to desired dimensions

    - Function applies sharpening to image

    - Function compresses the image

    - Function saves the image back to storage

    - Function notifies by publishing an event, by sending an email or by
    replying with new url

- Clients either read mail, subscribe to the event or wait for response


## When not too use serverleess
- If you want to control the platform and runtime versions
- If you need applications with session state
- If you have resource-intensive workloads
- If you're concerned with latency (caused by cold starts)
- Complex monolithic applications are hard to make
serverless
- If you have predictable workloads
- If you want to avoid vendor lock-in

Vendor lock-in occurs when a customer becomes overly dependent on a vendor's products or services, making it difficult and costly to switch to another provider. An example with Microsoft could involve using Azure cloud services: if a company heavily integrates its infrastructure and applications specifically for Azure's environment and tools, migrating to another cloud provider (like AWS or Google Cloud) could require significant effort and resources due to the proprietary technologies and platform-specific services.
