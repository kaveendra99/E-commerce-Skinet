import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatBadge} from '@angular/material/badge';
import {MatButton} from '@angular/material/button'
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatBadge, MatButton, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
