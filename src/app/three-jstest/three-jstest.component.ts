import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
//import { THREE } from 'three';
import * as THREE from 'three';

@Component({
  selector: 'app-three-jstest',
  templateUrl: './three-jstest.component.html',
  styleUrls: ['./three-jstest.component.css']
})
export class ThreeJSTestComponent implements OnInit {
  @ViewChild('Mouse3D') elementRef: ElementRef;
  MouseContainer:HTMLElement;

  constructor() { }
  camera:any;
  scene:any;
  renderer:any;
  mesh:any;

  
  ngOnInit() {
    this.MouseContainer = this.elementRef.nativeElement;
    //------------------------------------------

    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    this.camera.position.z = 400;

    this.scene = new THREE.Scene();

    console.log('%c THREE 001', 'color:rgb(255,0,0,1)');
    console.log('%c window.innerWidth:'+window.innerWidth+' window.innerHeight:'+window.innerHeight, 'color:rgb(255,0,0,1)');


    const texture = new THREE.TextureLoader().load( 'image/3DTextures/crate.gif' );

    const geometry = new THREE.BoxGeometry( 200, 200, 200 );
    const material = new THREE.MeshBasicMaterial( { map: texture } );
    //const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    this.mesh = new THREE.Mesh( geometry, material );
    this.scene.add( this.mesh );

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    
    this.MouseContainer.appendChild(this.renderer.domElement);

    //
    this.camera.aspect = window.innerWidth / window.innerHeight;
    //window.addEventListener( 'resize', this.onWindowResize );
    //
    this.animate();

  }
  onWindowResize() {
    console.log('%c THREE 002', 'color:rgb(255,0,0,1)');
    let self: ThreeJSTestComponent = this;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( window.innerWidth, window.innerHeight );

  }
  animate() {
    let self: ThreeJSTestComponent = this;

    (function render(){
      requestAnimationFrame( render );
      self.mesh.rotation.x += 0.005;
      self.mesh.rotation.y += 0.01;
  
      self.renderer.render( self.scene, self.camera );

    }());

    // requestAnimationFrame( this.animate );

    // this.mesh.rotation.x += 0.005;
    // this.mesh.rotation.y += 0.01;

    // this.renderer.render( this.scene, this.camera );

  }

}
