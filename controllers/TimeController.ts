import { 
  RestController, 
  RequestMapping, 
  GetMapping, 
  Wait,
} from 'express-spring';

@RestController
@RequestMapping('/')
export class TimeController {
  @GetMapping('/time')
  @Wait(5000)
  getTime() {
    return { message: 'Will get response after 5 seconds when using "@Wait(5000)"!' };
  }
}