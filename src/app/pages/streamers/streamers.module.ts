import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StreamerRouter } from './streamers.router';
import { StreamerService } from './streamer.service';
import { ListStreamerResolve } from './list-streamer/list.streamer.resolve';
import { ListStreamerComponent } from './list-streamer/list-streamer.component';
import { StreamerUpdateResolve } from './register-streamer/streamer-update.resolve';
import { RegisterStreamerComponent } from './register-streamer/register-streamer.component';

@NgModule({
  declarations: [
    ListStreamerComponent,
    RegisterStreamerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(StreamerRouter)
  ],
  providers: [
    StreamerService,
    ListStreamerResolve, 
    StreamerUpdateResolve
  ]
})
export class StreamersModule { }
