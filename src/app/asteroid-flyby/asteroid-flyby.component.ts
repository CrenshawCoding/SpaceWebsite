import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';

declare var require: any;

@Component({
  selector: 'asteroid-flyby',
  templateUrl: './asteroid-flyby.component.html',
})
export class AsteroidFlyby implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.drawImage();
  }

  @ViewChild('myCanvas') canvasRef: ElementRef;
  private ctx: CanvasRenderingContext2D;
  image = '';
  slideshow: any[] = [];

  ngOnInit(): void {
    // this.drawImage();
  }

  drawImage() {
    this.asteroidSlideshow();
  }

  asteroidSlideshow(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    const imgEarth = new Image();
    const imgAsteroid = new Image();
    imgEarth.src = 'assets/earth.png';
    imgEarth.onload = () => {
      imgAsteroid.src = 'assets/asteroid_cut.png';
      imgAsteroid.onload = () => {
        this.moveAsteroid(imgAsteroid, imgEarth);
      };
    };

    this.moveAsteroid(imgAsteroid, imgEarth);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, 400, 400);
  }

  moveAsteroid(imgAsteroid: any, imgEarth: any) {
    const asteroidPositions = [
      { x: 0, y: 0 },
      { x: 10, y: 20 },
      { x: 20, y: 40 },
      { x: 30, y: 80 },
      { x: 50, y: 120 },
      { x: 100, y: 150 },
      { x: 200, y: 210 },
      { x: 270, y: 240 },
      { x: 340, y: 270 },
      { x: 390, y: 290 },
    ];
    var counter = 0;
    setInterval(() => {
      console.log('moving');
      this.clearCanvas();
      this.ctx.drawImage(imgEarth, 100, 100, 300, 300);
      this.ctx.drawImage(
        imgAsteroid,
        asteroidPositions[counter].x,
        asteroidPositions[counter].y,
        50,
        50
      );
      if(counter + 1 > asteroidPositions.length - 1) {
        counter = 0;
      } else {
        counter ++;
      }
    }, 1000);
  }
}
