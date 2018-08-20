import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {TrackerService} from '../tracker.module/tracker.service';

@Injectable({ providedIn: 'root' })
export class DeliverStatusGuard implements CanActivate {

  constructor(private router: Router,private trackerService:TrackerService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (localStorage.getItem('orderDeliverStatus')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate([''], { queryParams: { returnUrl: state.url }});
    return false;

  }

}
