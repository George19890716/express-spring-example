import { 
  RestController, 
  RequestMapping, 
  GetMapping, 
  PostMapping,
  RequestHeader,
  RequestBody,
  RequestParam,
} from 'express-spring';

// Examples of using Parameter Decorators in express-spring to get Request Parameters

@RestController
@RequestMapping('/')
export class ParameterController {
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

  @PostMapping('/parameter-body')
  getPayload(@RequestBody payload) {
    /* 
     * For the GET API http://localhost:404/parameter-body
     * Value of "payload" will be the Request Body in HTTP Request
     */
    return payload ?? {};
  }

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
}