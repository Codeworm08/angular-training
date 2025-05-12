import { GreetingService } from "./gretting.service";

describe('test suite from greeting service', () => {
   it('greet method shoud return hello', () => {
      let gs: GreetingService = new GreetingService();
        expect(gs.greet()).toEqual('Hello');
    });
});