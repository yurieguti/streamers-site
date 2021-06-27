import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StreamerService } from '../streamer.service';

@Component({
  selector: 'app-register-streamer',
  templateUrl: './register-streamer.component.html',
  styleUrls: ['./register-streamer.component.css']
})
export class RegisterStreamerComponent implements OnInit {

  public formStreamer: FormGroup;
  public isToInsert: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private streamerService: StreamerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.formStreamer = this.verifyIfEditOrInsert();
  }

  ngOnInit(): void {
  }

  private verifyIfEditOrInsert() {
    console.log("EDIT", this.activatedRoute.firstChild)
    let paramsRota: any = this.activatedRoute.firstChild && this.activatedRoute.firstChild.data;
    let streamerToEdit = paramsRota && paramsRota.value && paramsRota.value.streamer;

    if (streamerToEdit) {
      this.isToInsert = false;
      return this.initFormStreamerToEdit(streamerToEdit)
    } else {
      this.isToInsert = true
      return this.initFormStreamer();
    }
  }

  private initFormStreamer(): FormGroup {
    return this.formBuilder.group({
      nomeStreamer: ["", Validators.required],
      plataformaStreaming: ["", Validators.required],
      tipoJogo: [""],
      quantidadeSeguidores: [""]
    })
  }

  private initFormStreamerToEdit(streamerToEdit: any): FormGroup {
    return this.formBuilder.group({
      id: [streamerToEdit.id],
      nomeStreamer: [streamerToEdit.nomeStreamer, Validators.required],
      plataformaStreaming: [streamerToEdit.plataformaStreaming, Validators.required],
      tipoJogo: [streamerToEdit.tipoJogo],
      quantidadeSeguidores: [streamerToEdit.quantidadeSeguidores]
    })
  }


  public onClickBack() {

  }

  public onClickSave() {
    let streamer = this.formStreamer.value;

    if(this.formStreamer.valid) {
      if (this.isToInsert) {
        this.sendRequestToSaveNewStreamer(streamer);
      } else {
        this.sendRequestToUpdateStreamer(streamer)
      }
    }
  }


  private sendRequestToSaveNewStreamer(streamer: any) {
    this.streamerService.save(streamer).subscribe(
      () => {
        this.router.navigate([`streamers/list-streamer`])
        console.log("INSERIDO COM SUCESSO");
      },
      (error) => {
        console.log("ERRO", error);
      }
    );
  }

  private sendRequestToUpdateStreamer(streamer: any) {
    this.streamerService.updateStreamers(streamer).subscribe(
      () => {
        console.log("ATUALIZADO COM SUCESSO");
        this.router.navigate([`streamers/list-streamer`])
      },
      (error) => {
        console.log("ERRO", error);
      }
    );
  }

  
}
