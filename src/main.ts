import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('MTgzMjA2OEAzMjMxMmUzMTJlMzMzNUZ2c2xvUGkxSVl6ZUNSd1FNVWFsNFhTMmxvQ1RGdXBTUVZicUpRNmpWVTg9;Mgo+DSMBaFt+QHFqVkNrWU5GaV1CX2BZfFl3Qmlcfk4BCV5EYF5SRHJdR11hSHlWd0RhUHY=;Mgo+DSMBMAY9C3t2VFhhQlJBfVpdX3xLflF1VWFTfll6cVRWESFaRnZdQV1nS3tTdERkXH5fdHBc;Mgo+DSMBPh8sVXJ1S0d+X1RPc0BAQmFJfFBmR2lYeFR1dUU3HVdTRHRcQllhTH5Rd0JmWH5ZcHU=;MTgzMjA3MkAzMjMxMmUzMTJlMzMzNU5LWDFXTUZxcWIwWEU3bk9hcXJOcTVyejVNaWNrM0QzRkQ0bk4zQmQzZUE9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RHQmFWfFN0RnNbdV93flBHcC0sT3RfQF5jTXxWdkdiXnpfcn1cRg==;ORg4AjUWIQA/Gnt2VFhhQlJBfVpdX3xLflF1VWFTfll6cVRWESFaRnZdQV1nS3tTdERkXH5dcXFV;MTgzMjA3NUAzMjMxMmUzMTJlMzMzNWtCZFNxUk9JSjRFVXdoK01SSWVuUXFrWXk3OU9BSTRIKzVQV2did0l0ZDQ9;MTgzMjA3NkAzMjMxMmUzMTJlMzMzNWxGa2g2RkZyT0RmOXo3N1hKTklhcGk1WWtVSEUra2VkbHRVSlFUeWtkc2c9;MTgzMjA3N0AzMjMxMmUzMTJlMzMzNWdIRlI1K1dHdFZiWVFnMjFobGFSRzRFaTRHVWVDeUJBT2twNzRVWUhYZ0E9;MTgzMjA3OEAzMjMxMmUzMTJlMzMzNUExNzJIK3dKblZKUkFjeDFaUDM5TlFxWG5QakI3ZStKbGgydnhNSGg5eU09;MTgzMjA3OUAzMjMxMmUzMTJlMzMzNUZ2c2xvUGkxSVl6ZUNSd1FNVWFsNFhTMmxvQ1RGdXBTUVZicUpRNmpWVTg9');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
