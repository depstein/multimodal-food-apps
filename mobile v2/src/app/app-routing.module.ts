import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'entry', loadChildren: () => import('./pages/entry/entry.module').then(m => m.EntryPageModule) },
  { path: 'history/entry', loadChildren: () => import('./pages/entry/entry.module').then(m => m.EntryPageModule) },

  { path: 'history', loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule) },
  { path: 'setting', loadChildren: () => import('./pages/settings/setting.module').then(m => m.SettingPageModule) },
  { path: 'history/setting', loadChildren: () => import('./pages/settings/setting.module').then(m => m.SettingPageModule) },

  { path: 'e-camera', loadChildren: () => import('./pages/e-camera/e-camera.module').then(m => m.ECameraPageModule) },
  { path: 'e-camera/:id', loadChildren: () => import('./pages/e-camera/e-camera.module').then(m => m.ECameraPageModule) },
  { path: 'e-url', loadChildren: () => import('./pages/e-url/e-url.module').then(m => m.EUrlPageModule) },
  { path: 'e-url/:id', loadChildren: () => import('./pages/e-url/e-url.module').then(m => m.EUrlPageModule) },
  { path: 'e-voice', loadChildren: () => import('./pages/e-voice/e-voice.module').then(m => m.EVoicePageModule) },
  { path: 'e-voice/:id', loadChildren: () => import('./pages/e-voice/e-voice.module').then(m => m.EVoicePageModule) },
  { path: 'e-search', loadChildren: () => import('./pages/e-search/e-search.module').then(m => m.ESearchPageModule) },
  { path: 'e-search/:id', loadChildren: () => import('./pages/e-search/e-search.module').then(m => m.ESearchPageModule) },
  { path: 'e-description', loadChildren: () => import('./pages/e-description/e-description.module').then(m => m.EDescriptionPageModule) },
  { path: 'e-description/:id', loadChildren: () => import('./pages/e-description/e-description.module').then(m => m.EDescriptionPageModule) },
  { path: 'e-barcode', loadChildren: () => import('./pages/e-barcode/e-barcode.module').then(m => m.EBarcodePageModule) },
  { path: 'e-barcode/:id', loadChildren: () => import('./pages/e-barcode/e-barcode.module').then(m => m.EBarcodePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
