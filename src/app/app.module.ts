import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './KeyBoard_RGBFolder/KeyBoard_RGB';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
//----------------httpImport--------------//
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { EntryPageComponent } from './EntryPage';
import { DemoListUIComponent } from './DemoListUI/DemoListUI.component';
import { NumpadKeyboardComponent } from './numpad-keyboard/NumpadKeyboard';
import { M_NumpadSelectModule } from './M_NumpadSelect/M_NumpadSelect.module';
import { PerixxComponent } from './perixx/perixx.component';
import { ThreeJSTestComponent } from './three-jstest/three-jstest.component';
import { ThreeGltfsheenComponent } from './three-gltfsheen/three-gltfsheen.component';
import { DKWebHIDComponent } from './DKWeb-hid/DKWeb-hid.component';


// let routerModule = RouterModule.forRoot(routes);
// routerModule = RouterModule.forRoot(routes, {useHash: true});
const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    redirectTo: 'DemoListUI',
    pathMatch: 'full',
  },
  { path: 'KeyBoard_RGB', component: AppComponent },
  { path: 'DemoListUI', component: DemoListUIComponent },
  { path: 'numpad-keyboard', component: NumpadKeyboardComponent },
  { path: 'perixx', component: PerixxComponent },  
  { path: 'ThreeJSTest', component: ThreeJSTestComponent },
  { path: 'ThreeGltfsheen', component: ThreeGltfsheenComponent },
  { path: 'DKWeb-hid', component: DKWebHIDComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    EntryPageComponent,
    DemoListUIComponent,
    NumpadKeyboardComponent,
    PerixxComponent,
    ThreeJSTestComponent,
    ThreeGltfsheenComponent,
    DKWebHIDComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    M_NumpadSelectModule,
  ],
  providers: [],
  bootstrap: [EntryPageComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
