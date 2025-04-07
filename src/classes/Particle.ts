import { ContributionDay } from '../types/ContributionDay';
import { Effect } from './Effect';

export class Particle {
  effect: Effect;
  size: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  numberOfSides: number;
  pushX: number;
  pushY: number;
  friction: number;
  date: Date;
  contributions: number

  constructor(effect: Effect, day: ContributionDay) {
    this.contributions = day.contributionCount;
    this.date = new Date(day.date);
    this.effect = effect;
    this.size = Math.floor(this.contributions / 3 + 4);
    this.x = this.size + Math.random() * (this.effect.width - this.size * 2);
    this.y = this.size + Math.random() * (this.effect.height - this.size * 2);
    this.vx = Math.random() * 1 - 0.5;
    this.vy = Math.random() * 1 - 0.5;
    this.numberOfSides = 6;
    this.pushX = 0;
    this.pushY = 0;
    this.friction = 0.95;
  }

  draw(context: CanvasRenderingContext2D) {
    let path = new Path2D();
    path.moveTo (this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));          
    for (var i = 1; i <= this.numberOfSides;i += 1) {
      path.lineTo(this.x + this.size * Math.cos(i * 2 * Math.PI / this.numberOfSides), this.y + this.size * Math.sin(i * 2 * Math.PI / this.numberOfSides));
    }
    path.closePath();
    context.fillStyle = 'rgba(255, 255, 255, 0.35)';
    context.fill(path);
  }

  update() {
    if (this.effect.mouse.pressed) {
      console.log('mouse pressed');
    }

      this.x += (this.pushX *= this.friction) + this.vx;
      this.y += (this.pushY *= this.friction) + this.vy;

      if (this.x < this.size){
        this.x = this.size;
        this.vx *= -1;
      } else if (this.x > this.effect.width - this.size){
        this.x = this.effect.width - this.size;
        this.vx *= -1;
      }
      if (this.y < this.size){
        this.y = this.size;
        this.vy *= -1;
      } else if (this.y > this.effect.height - this.size){
        this.y = this.effect.height - this.size;
        this.vy *= -1;
      }
  }

  reset() {
    this.x = this.size + Math.random() * (this.effect.width - this.size * 2);
    this.y = this.size + Math.random() * (this.effect.height - this.size * 2);
  }
}
