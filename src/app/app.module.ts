import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextCheckerComponent } from './text-checker/text-checker.component';
import { ClockComponent } from './clock/clock.component';
import { ChatComponent } from './chat/chat.component';
import { TimerStopwatchComponent } from './timer-stopwatch/timer-stopwatch.component';
import { ScoreComponent } from './score/score.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { PassGenComponent } from './pass-gen/pass-gen.component';
import { TolistComponent } from './tolist/tolist.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BasketComponent } from './basket/basket.component';
import { TestComponent } from './test/test.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { Mp3playerComponent } from './mp3player/mp3player.component';

@NgModule({
  declarations: [
    AppComponent,
    TextCheckerComponent,
    ClockComponent,
    ChatComponent,
    TimerStopwatchComponent,
    ScoreComponent,
    KeyboardComponent,
    PassGenComponent,
    TolistComponent,
    ContactsComponent,
    BasketComponent,
    TestComponent,
    ImageSliderComponent,
    Mp3playerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
