import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { StreamerService } from "../streamer.service";

@Injectable()
export class ListStreamerResolve implements Resolve<any> {

    constructor(private streamerService: StreamerService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return new Observable( (observer) => {
            this.streamerService.listAllStreamers().subscribe(
                (streamers)=> {
                    observer.next(streamers);
                    observer.complete();
                }, 
                (error) => {
                    observer.error(error)
                }
            )
        })
    }

}