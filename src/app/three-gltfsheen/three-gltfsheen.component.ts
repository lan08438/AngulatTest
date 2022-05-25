import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

@Component({
  selector: 'app-three-gltfsheen',
  templateUrl: './three-gltfsheen.component.html',
  styleUrls: ['./three-gltfsheen.component.css']
})
export class ThreeGltfsheenComponent implements OnInit {
  @ViewChild('sheenChair') elementRef: ElementRef;
  ChairContainer:HTMLElement;

  constructor() { }
  camera:any;
  scene:any;
  renderer:any;
  mesh:any;
  controls:any;

  ngOnInit() {
    this.ChairContainer = this.elementRef.nativeElement;
    //------------------------------------------
    
    // const container = document.createElement( 'div' );
    // document.body.appendChild( container );

    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 20 );
    this.camera.position.set( - 0.75, 0.7, 1.25 );

    this.scene = new THREE.Scene();

    // model
    // let loader = new GLTFLoader();
    // let _this = this;
    // loader.load('image/3DTextures/gltf/SheenChair.glb',function(gltf){
    //   console.log('%c THREE SheenChair.glb', 'color:rgb(255,0,0,1)');
    //   _this.scene.add( gltf.scene );

    //   const object = gltf.scene.getObjectByName( 'SheenChair_fabric' );

    //   const gui = new GUI();

    //   gui.add( object.material, 'sheen', 0, 1 );
    //   gui.open();

    //   //console.log('%c THREE SheenChair2', 'color:rgb(255,0,0,1)');
    // });

    let _this = this;
    new GLTFLoader()
      .setPath( 'image/3DTextures/gltf/' )
      .load( 'SheenChair.glb', function ( gltf ) {

        _this.scene.add( gltf.scene );

        const object = gltf.scene.getObjectByName( 'SheenChair_fabric' );

        const gui = new GUI();

        gui.add( object.material, 'sheen', 0, 1 );
        gui.open();

      } );

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.ChairContainer.appendChild( this.renderer.domElement );

    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator( this.renderer );

    this.scene.background = new THREE.Color( 0xbbbbbb );
    this.scene.environment = pmremGenerator.fromScene( environment ).texture;

    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.controls.enableDamping = true;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 10;
    this.controls.target.set( 0, 0.35, 0 );
    this.controls.update();


    window.addEventListener( 'resize', this.onWindowResize );
    this.animate();
  }
  onWindowResize() {
    console.log('%c THREE 002', 'color:rgb(255,0,0,1)');

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( window.innerWidth, window.innerHeight );

  }

  animate() {
    let self: ThreeGltfsheenComponent = this;
    (function animate(){
      requestAnimationFrame( animate );
  
      //self.renderer.render( self.scene, self.camera );
      self.controls.update(); // required if damping enabled
  
      self.render();

      }());

    // requestAnimationFrame( this.animate );

    // this.controls.update(); // required if damping enabled

    // this.render();

  }

  render() {
    //this.controls.update(); // required if damping enabled

    this.renderer.render( this.scene, this.camera );

  }

}
