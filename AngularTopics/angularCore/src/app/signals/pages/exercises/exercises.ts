import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  signal,
  HostListener,
} from '@angular/core';

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

@Component({
  selector: 'app-exercises',
  imports: [],
  template: `
    <div class="w-screen h-screen flex justify-center items-center">
      <canvas #canvas class="bg-white" width="450" height="450"></canvas>
    </div>
  `,
})
export class Exercises implements AfterViewInit {
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLCanvasElement>;
  context!: CanvasRenderingContext2D;

  //player
  parametersPlayer: Position & Size = { x: 50, y: 400, width: 50, height: 50 };
  player = signal<Position & Size>(this.parametersPlayer);
  PLAYER_VELOCITY = 20;

  //proyectiles
  parametersProyectiles: Position = { x: 0, y: 0 };
  PROYECTILES_VELOCITY = 30;
  proyectiles = signal<Position>(this.parametersProyectiles);

  ngAfterViewInit(): void {
    const canvas = this.canvasEl.nativeElement;
    this.context = canvas.getContext('2d')!;

    this.update();
  }

  update() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.draw();
    this.moveProyectiles()
    this.drawProyectiles();
    requestAnimationFrame(() => this.update());
  }

  draw() {
    //player
    this.context.fillStyle = 'green';
    this.context.fillRect(
      this.player().x,
      this.player().y,
      this.player().width,
      this.player().height
    );
  }

  @HostListener('window:keydown', ['$event'])
  movementPlayer(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.player.update((prev) => ({
          ...prev,
          x: prev.x - this.PLAYER_VELOCITY,
        }));
        this.collisions();
        break;

      case 'ArrowRight':
        this.player.update((prev) => ({
          ...prev,
          x: prev.x + this.PLAYER_VELOCITY,
        }));
        this.collisions();
        break;

      case ' ':
        this.proyectiles.set({
          x: this.player().x + this.player().width / 2,
          y: this.player().y,
        });
        break;
    }
  }

  collisions() {
    let p = this.player();
    //izquierda
    if (p.x < 0) {
      this.player.update((prev) => ({
        ...prev,
        x: 0,
      }));
    }

    //derecha
    if (p.x + p.width > this.context.canvas.width) {
      this.player.update((prev) => ({
        ...prev,
        x: this.context.canvas.width - p.width,
      }));
    }
  }

  moveProyectiles() {
    this.proyectiles.update((prev) => ({
      ...prev,
      y: prev.y - this.PROYECTILES_VELOCITY,
    }));
  }

  drawProyectiles() {
    const p = this.proyectiles();

    this.context.fillStyle = 'red';
    this.context.beginPath();
    this.context.arc(p.x, p.y, 4, 0, Math.PI * 2);
    this.context.fill();
  }
}
