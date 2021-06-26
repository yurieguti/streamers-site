import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StreamerService } from '../streamer.service';

@Component({
  selector: 'app-register-streamer',
  templateUrl: './register-streamer.component.html',
  styleUrls: ['./register-streamer.component.css']
})
export class RegisterStreamerComponent implements OnInit {

  public formStreamer: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private streamerService: StreamerService) {
    this.formStreamer = this.initFormStreamer();
  }

  ngOnInit(): void {
  }

  private initFormStreamer(): FormGroup {
    return this.formBuilder.group({
      nomeStreamer: ["", Validators.required],
      plataformaStreaming: ["", Validators.required],
      tipoJogo: [""],
      quantidadeSeguidores: [""]
    })
  }

  public onClickBack() {

  }

  public onClickSave() {
    let streamerToInsert = this.formStreamer.value;
    
    
    if(this.formStreamer.valid) {
      this.streamerService.save(streamerToInsert).subscribe(
        () => {
          console.log("INSERIDO COM SUCESSO")
        },
        (error) => {
          console.log("ERRO", error)
        }
      )
    }
  }

}
