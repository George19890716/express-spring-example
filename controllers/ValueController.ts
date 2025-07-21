import { 
  RestController, 
  RequestMapping, 
  GetMapping, 
  Value,
} from 'express-spring';

@RestController
@RequestMapping('/')
export class ValueController {
  @Value('example.message')
  private message: any;  // Using Value decorator to extract the data

  @GetMapping('/value')
  getValue() {
    // this.message will be "{ "value": "This is an example of using Value decorator!" }"
    return this.message;
  }
}