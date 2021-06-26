import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StreamerRouter } from './streamers.router';
import { StreamerService } from './streamer.service';
import { RegisterStreamerComponent } from './register-streamer/register-streamer.component';

@NgModule({
  declarations: [
    RegisterStreamerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(StreamerRouter)
  ],
  providers: [
    StreamerService
  ]
})
export class StreamersModule { }
