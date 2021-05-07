import * as PIXI from 'pixi.js-legacy';
import { Viewport } from "pixi-viewport";

export class App {
  private app: PIXI.Application | null;
  private readonly viewport: Viewport;

  constructor() {
    this.app = new PIXI.Application();

    this.viewport = new Viewport({
      interaction: this.app.renderer.plugins.interaction
    });

    this.viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate({ friction: 0.85 })
      .clampZoom({ maxScale: 3, minScale: 0.75 })
      .moveCenter(0, 0);

    this.app.stage.addChild(this.viewport);
  }
}

