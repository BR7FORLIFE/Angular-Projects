import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentDecoratorTopic } from './decoratorsTopic/component-decorator-topic/component-decorator-topic';
import { NgModuleTopic } from "./decoratorsTopic/ng-module-topic/ng-module-topic"; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentDecoratorTopic, NgModuleTopic],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularCore');
}
