import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { StreamerService } from "../streamer.service";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class StreamerUpdateResolve implements Resolve<any> {

    constructor(private streamerService: StreamerService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let idStreamer = route && route.params && route.params["id"];

        return new Observable( (observer) => {
            this.streamerService.getStreamers(idStreamer).subscribe(
                (streamer)=> {
                    observer.next(streamer);
                    observer.complete();
                }, 
                (error) => {
                    observer.error(error)
                }
            )
        })
    }

}