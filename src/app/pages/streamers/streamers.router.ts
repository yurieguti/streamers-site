import { Routes } from "@angular/router";

import { RegisterStreamerComponent } from "./register-streamer/register-streamer.component";

export const StreamerRouter: Routes = [
    {
        path: 'register-streamer',
        component: RegisterStreamerComponent
    }
]