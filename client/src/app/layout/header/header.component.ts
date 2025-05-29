import { Component, inject } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatBadge} from '@angular/material/badge';
import {MatButton} from '@angular/material/button'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BusyService } from '../../core/services/busy.service';
import {MatProgressBar} from '@angular/material/progress-bar'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatBadge, MatButton, RouterLink, RouterLinkActive, MatProgressBar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  busyService = inject(BusyService);

}
