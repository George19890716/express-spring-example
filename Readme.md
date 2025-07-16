# express-spring application

## Run express-spring application
This Example is based on Node.js.

Before installing, download and install Node.js. Node.js 18 or higher is required.

Install Dependencies
```bash
npm install
```

Run Application
```bash
npm run startup
```

## Directory Structure
  ```bash
  project-root/
  ├── controllers/                # Folder including all Restful Controllers
  │   ├── ExampleController.ts    # Example of using express-spring decorators to implement Restful API
  │   ├── index.ts                # Index file to export all Restful Controllers
  │   └── ParameterController.ts  # Example of using express-spring decorators to implement Restful API
  ├── main.ts                     # Main file to implement express-spring application
  ├── README.md                   # Project documentation
  └── package.json                # NPM dependencies and scripts
  └── tsconfig.json               # Typescript configuration file
  ```

## Example of using express-spring decorators

  ### Implement an application:
  ```bash
  import { ExpressApplication } from 'express-spring';

  @ExpressApplication
  class Main {}
  ```
  ### Implement restful api:
  Examples of implement Restful API with url http://localhost:404/api/v1/example
  ```bash
  @RestController
  @RequestMapping('/api/v1')
  export class ExampleController {

    /* 
    * Restful api with GET method
    * URL: http://localhost:404/api/v1/example
    * Response: { message: 'Here is the response of this Get Request!' }
    */
    @GetMapping('/example') 
    getExample() {
      return { message: 'Here is the response of this Get Request!' };
    }

    /* 
    * Restful api with POST method
    * URL: http://localhost:404/api/v1/example
    * Response: { message: 'Here is the response of this Post Request!' }
    */
    @PostMapping('/example')
    postExample() {
      return { message: 'Here is the response of this Post Request!' };
    }

    /* 
    * Restful api with PUT method
    * URL: http://localhost:404/api/v1/example
    * Response: { message: 'Here is the response of this Put Request!' }
    */
    @PutMapping('/example')
    putExample() {
      return { message: 'Here is the response of this Put Request!' };
    }

    /* 
    * Restful api with PATCH method
    * URL: http://localhost:404/api/v1/example
    * Response: { message: 'Here is the response of this Patch Request!' }
    */
    @PatchMapping('/example')
    patchExample() {
      return { message: 'Here is the response of this Patch Request!' };
    }

    /* 
    * Restful api with DELETE method
    * URL: http://localhost:404/api/v1/example
    * Response: { message: 'Here is the response of this Delete Request!' }
    */
    @DeleteMapping('/example')
    deleteExample() {
      return { message: 'Here is the response of this Delete Request!' };
    }
  }
  ```

  ### Using Parameter Decorators:
  @RequestBody: Get Payload of Post / Put / Patch Http Request
  ```bash
  @PostMapping('/parameter-body')
  getPayload(@RequestBody payload) {
    /* 
     * For the GET API http://localhost:404/parameter-body
     * Value of "payload" will be the Request Body in HTTP Request
     */
    return payload ?? {};
  }
  ```

  @RequestHeader: Get whole Request Header or one specific attribute in Request Header
  ```bash
  @GetMapping('/parameter-header')
  getHeader(
    @RequestHeader headers, 
    @RequestHeader('connection') connection,
  ) {
    /* 
     * For the GET API http://localhost:404/parameter-header
     * Value of "headers" will be whole Request Header in HTTP Request
     * Value of "connection" will be the attribute connection in Request Header
     */
    return { connection };
  }
  ```

  @RequestHeader: Get whole Query Parameters or one specific attribute in Query Parameters
  ```bash
  @GetMapping('/parameter-query')
  getQuery(
    @RequestParam queries, 
    @RequestParam('id') id,
  ) {
    /* 
     * For the GET API http://localhost:404/parameter-query?id=1&name=George
     * Value of "queries" will be { id: '1', name: 'George' }
     * Value of "id" will be '1'
     */
    return queries;
  } 
  ```

  @PathVariable: Extract values from URI template patterns defined with {variableName} placeholders.
  ```bash
  @DeleteMapping('/parameter/{id}')
  deleteParameter(@PathVariable('id') id) {
    /* 
     * For the DELETE API http://localhost:404/parameter/1
     * Value of "id" will be '1'
     */
    return { id };
  }
  ```


