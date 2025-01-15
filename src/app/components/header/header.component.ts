import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="bg-violet-400">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-5" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="text-white font-bold text-3xl">DemoTest</span>
          </a>
        </div>
        <div class="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-xl text-white font-semibold">
            Log in 
            <span aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
     </nav>
    </header>

  `,
  styles: ``
})
export class HeaderComponent {

}
