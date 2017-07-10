'use strict';

import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NgxEventManager {
    private list = [];
    use (middleware): void {
        if (middleware instanceof Function)
            this.list.push(middleware);
    }

    run () {
        let index: number = 0;
        let next = (): void => {
            let task = this.list[index++];
            if (!task) return;
            task instanceof Function && task(next);
        }
        next();
    }
}
