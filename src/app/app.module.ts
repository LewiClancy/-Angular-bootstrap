import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BoxesComponent } from './boxes/boxes.component';
import { LearnComponent } from './learn/learn.component';
import { AccordianComponent } from './accordian/accordian.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowcaseComponent,
    NewsletterComponent,
    BoxesComponent,
    LearnComponent,
    AccordianComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
