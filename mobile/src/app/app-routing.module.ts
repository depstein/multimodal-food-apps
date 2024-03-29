import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'entry', loadChildren: './pages/entry/entry.module#EntryPageModule' },
  { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
  { path: 'setting', loadChildren: './pages/settings/setting.module#SettingPageModule' },
  { path: 'e-camera', loadChildren: './pages/e-camera/e-camera.module#ECameraPageModule' },
  { path: 'e-camera/:id', loadChildren: './pages/e-camera/e-camera.module#ECameraPageModule' },
  { path: 'e-url', loadChildren: './pages/e-url/e-url.module#EUrlPageModule' },
  { path: 'e-url/:id', loadChildren: './pages/e-url/e-url.module#EUrlPageModule' },
  { path: 'e-voice', loadChildren: './pages/e-voice/e-voice.module#EVoicePageModule' },
  { path: 'e-voice/:id', loadChildren: './pages/e-voice/e-voice.module#EVoicePageModule' },
  { path: 'e-search', loadChildren: './pages/e-search/e-search.module#ESearchPageModule' },
  { path: 'e-search/:id', loadChildren: './pages/e-search/e-search.module#ESearchPageModule' },
  { path: 'e-description', loadChildren: './pages/e-description/e-description.module#EDescriptionPageModule' },
  { path: 'e-description/:id', loadChildren: './pages/e-description/e-description.module#EDescriptionPageModule' },
  { path: 'e-barcode', loadChildren: './pages/e-barcode/e-barcode.module#EBarcodePageModule' },
  { path: 'e-barcode/:id', loadChildren: './pages/e-barcode/e-barcode.module#EBarcodePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
