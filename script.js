// 1. Sahna (Scene) yaratish
const scene = new THREE.Scene();

// 2. Kamera sozlash
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Ob'ekt (Masalan, shar)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Oq material
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// 4. Yorug'lik (Soya beruvchi asosiy qism)
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5); // Nur yo'nalishi
scene.add(light);

// 5. Render (Ekran ko'rsatish)
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
