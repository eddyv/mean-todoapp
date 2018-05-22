/* Reference: https://stackoverflow.com/questions/44669340/how-to-truncate-text-in-angular2 by Ketan Akbari */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

    transform(value: string, args: string[]): string {

        console.log(args.length);
        // sets the default limit to 20 if not specified
        const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
        // sets the default trail to be ... if not specified.
        const trail = args.length > 1 ? args[1] : '...';

        // returns the result
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}
