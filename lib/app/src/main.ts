import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {App} from './app';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .basicConfiguration()
    .history()
    .globalResources([
      './side-bar'
    ]);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }
  
  aurelia.start().then(() => {
    let app = <App>aurelia.container.get(App);
    aurelia.enhance(app, 'app-host').then(() => app.activate());
  });
}