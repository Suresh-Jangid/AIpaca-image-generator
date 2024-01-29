import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    LeftContainerComponent,
    RightContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
