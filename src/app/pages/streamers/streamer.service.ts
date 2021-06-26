import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable()
export class StreamerService {

    private endpointStreamer: string = "streamers";

    constructor(private httpClient: HttpClient) { }

    public save(streamer: any): Observable<any> {
        let endpointAddress: string = `${environment.endpointStreamers}/${this.endpointStreamer}`
        console.log("ENDPOINT", endpointAddress)

        return this.httpClient.post(endpointAddress, streamer);
    }
}