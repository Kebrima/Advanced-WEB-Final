import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CanDeactivate} from '@angular/router';

export interface ComponentCanDeactivate{
  canDeactivate: () => boolean | Observable<boolean>;
}


export class ExitGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean{
    console.log('canDeactivate guard works!');
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
