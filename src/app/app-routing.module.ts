import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { FormComponent } from './form/form.component';
import { LenzComponent } from './lenz/lenz.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {path:'text-checker',component:TextCheckerComponent},
  {path:'clock',component:ClockComponent},
  {path:'chat',component:ChatComponent},
  {path:'timer-stopwatch',component:TimerStopwatchComponent},
  {path:'score',component:ScoreComponent},
  {path:'keys',component:KeyboardComponent},
  {path:'pasgen',component:PassGenComponent},
  {path:'tolist',component:TolistComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'basket',component:BasketComponent},
  {path:'test',component:TestComponent},
  {path:'image-slider',component:ImageSliderComponent},
  {path:'mp3player',component:Mp3playerComponent},
  {path:'form',component:FormComponent},
  {path:'lenz',component:LenzComponent},
  {path:'calendar',component:CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
