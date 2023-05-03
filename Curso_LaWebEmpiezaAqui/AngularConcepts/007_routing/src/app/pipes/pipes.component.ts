import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent {
  title: string = "Hi it's a title who use pipes";
  money: number = 250.5;
  profits: number = 0.54;
  today: Date = new Date();
  loremText: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aspernatur laudantium sequi eaque neque autem vero nulla fuga officiis aliquid, deserunt facilis ab aut quidem culpa at voluptatum dolorum quia?";
}
