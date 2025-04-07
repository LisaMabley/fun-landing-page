import { gitHubData } from '../data/githubData';
import { ContributionDay } from '../types/ContributionDay';
import { Mouse } from '../types/Mouse';
import { Particle } from './Particle';

export class Effect {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  particles: Particle[];
  mouse: Mouse;
  days: ContributionDay[];

  constructor(cvs: { width: number, height: number }, context: CanvasRenderingContext2D) {
    this.context = context;
    this.width = cvs.width;
    this.height = cvs.height;
    this.particles = [];
    this.days = gitHubData;

    this.mouse = {
      x: 0,
      y: 0,
      pressed: false,
      radius: 200
    }

    this.createParticles();

    window.addEventListener('resize', () => {
      this.resize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('mousemove', e => {
      console.log('mousemove', e);
    });
  }

  createParticles() {
    for (let i = 0; i < this.days.length; i++){
      this.particles.push(new Particle(this, this.days[i]));
    }
  }

  handleParticles(context: CanvasRenderingContext2D) {
    this.connectParticles(context);
    if (this.particles.length > 0) {
      console.log('particles', this.particles.length);
      this.particles.forEach(particle => {
        console.log('particle', particle.date);
        particle.draw(context);
        particle.update();
      });
    }
  }

  connectParticles(context: CanvasRenderingContext2D) {
    const maxDistance = 90;
    for (let a = 0; a < this.particles.length; a++){
      for (let b = a; b < this.particles.length; b++){
        const dx = this.particles[a].x - this.particles[b].x;
        const dy = this.particles[a].y - this.particles[b].y;
        const distance = Math.hypot(dx, dy);
        if (distance < maxDistance){
          context.save();
          const opacity = 1 - (distance/maxDistance);
          context.globalAlpha = opacity;
          context.beginPath();
          context.moveTo(this.particles[a].x, this.particles[a].y);
          context.lineTo(this.particles[b].x, this.particles[b].y);
          context.stroke();
          context.restore();
        }
      }
    }
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.particles.forEach(particle => {
      particle.reset();
    });
  }
}
