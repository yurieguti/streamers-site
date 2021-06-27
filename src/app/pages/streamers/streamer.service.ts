import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable()
export class StreamerService {

    private endpointAddress: string = `${environment.endpointStreamers}/streamers`

    constructor(private httpClient: HttpClient) { }

    public save(streamer: any): Observable<any> {
        return this.httpClient.post(this.endpointAddress, streamer);
    }
    
    public listAllStreamers(): Observable<any> {
        return this.httpClient.get(this.endpointAddress);
    }

    public getStreamers(id: any): Observable<any> {
        return this.httpClient.get(`${this.endpointAddress}/${id}`);
    }

    public updateStreamers(streamer: any): Observable<any> {
        return this.httpClient.put(this.endpointAddress, streamer);
    }

    public deleteStreamer(id: any): Observable<any> {
        return this.httpClient.delete(`${this.endpointAddress}/${id}`);
    }
}