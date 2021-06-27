import { Routes } from "@angular/router";

import { ListStreamerResolve } from "./list-streamer/list.streamer.resolve";
import { ListStreamerComponent } from "./list-streamer/list-streamer.component";
import { StreamerUpdateResolve } from "./register-streamer/streamer-update.resolve";
import { RegisterStreamerComponent } from "./register-streamer/register-streamer.component";

export const StreamerRouter: Routes = [
    {
        path: 'register-streamer',
        component: RegisterStreamerComponent,
        children: [{
            path: ':id',
            component: RegisterStreamerComponent,
            resolve: {
                streamer: StreamerUpdateResolve
            }
        }]
    },
    {
        path: 'list-streamer',
        component: ListStreamerComponent,
        resolve: {
            streamers: ListStreamerResolve 
        }
    }
]