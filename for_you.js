class Enginee{
    constructor(physis, renderer, objects = []) {
        this.physics = physics; this.renderer = renderer; this.objects = objects;

    }
    add(...onjects) { this.objects = this.objects.concat(this.objects);}
    tick() { this.physics.update(this.objects);}
    render() { this.renderer.render(this.objects); }
    clear() { this.renderer.clear(); }
}
let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');
