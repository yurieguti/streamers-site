import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StreamerService } from '../streamer.service';

@Component({
  selector: 'app-list-streamer',
  templateUrl: './list-streamer.component.html',
  styleUrls: ['./list-streamer.component.css']
})
export class ListStreamerComponent implements OnInit {

  public listStreamers: any[];

  constructor(private acivatedRoute: ActivatedRoute,
              private router: Router,
              private streamerService: StreamerService) {
    this.listStreamers = this.getStramersList();

    console.log("Streamers List", this.listStreamers)
  }

  public getStramersList() {
    return this.acivatedRoute.snapshot.data["streamers"]
  }

  ngOnInit(): void {
  }

  public onDeleteStreamerClick(streamer: any){

  }

  public onEditStreamerClick(streamer: any){
    this.router.navigate([`streamers/register-streamer/${streamer.id}`])
  }

  public sendRequestToDeleteStreamer(streamer: any) {
    this.streamerService.deleteStreamer(streamer.id).subscribe(
      () => {
        this.refreshStreamersList();
        console.log("DELETADO COM SUCESSO");
      },
      (error) => {
        console.log("ERRO", error);
      }
    );
  }

  private refreshStreamersList() {
    this.streamerService.listAllStreamers().subscribe(
      (data) => {
        this.listStreamers = data;
      },
      (error) => {

      }
    )
  }
}
