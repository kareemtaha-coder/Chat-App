import { CommonModule } from '@angular/common';
import { Component, effect, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  imports: [CommonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.css'
})
export class ToggleThemeComponent {
private initialDark = localStorage.getItem('theme')==='dark';
themeDark = signal(this.initialDark);
constructor(){
  effect(()=>{
    if(this.themeDark()){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme' ,this.themeDark()?'dark':'light')
  });
}

toggleTheme(){
  this.themeDark.set(!this.themeDark());
}

 // Create a signal to hold the menu open state (initially false).
 isMenuOpen = signal(false);

 // Toggle the menu state: true becomes false, and false becomes true.
 toggleMenu(): void {
   this.isMenuOpen.set(!this.isMenuOpen());
 }

 // HostListener on the document listens to every click event.
 @HostListener('document:click', ['$event'])
 onDocumentClick(event: MouseEvent): void {
   const clickedElement = event.target as HTMLElement;
   // If the menu is open and the click is neither inside the menu area
   // (identified by #navbar-default) nor on the toggle button (identified by aria-controls),
   // then close the menu.
   if (
     this.isMenuOpen() &&
     !clickedElement.closest('#navbar-default') &&
     !clickedElement.closest('button[aria-controls="navbar-default"]')
   ) {
     this.isMenuOpen.set(false);
   }
 }
}
