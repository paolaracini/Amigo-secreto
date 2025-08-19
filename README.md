<h1> 🎁 Amigo Secreto </h1>

Una aplicación web simple y divertida para organizar tu juego de Amigo Secreto ✨

<h2>Características:</h2>
<ul>
<li>✅ Agrega nombres de tus amigos a una lista.</li>
<li>✅ Visualiza los participantes en tiempo real.</li>
<li>✅ Sortea de manera aleatoria un amigo secreto.</li>
<li>✅ Validación de entradas vacías.</li>
<li>✅ Interfaz amigable y fácil de usar.</li>
</ul>

<section>
  <h3>🧠 Lógica principal</h3>
  <ul>
    <li>Los nombres se almacenan en un arreglo llamado <code>amigos[]</code>.</li>
    <li><strong>agregarAmigo()</strong> → añade un nuevo nombre validando que no esté vacío.</li>
    <li><strong>mostrarAmigos()</strong> → recorre el array y pinta la lista en el DOM.</li>
    <li><strong>sortearAmigo()</strong> → selecciona al azar un elemento del array usando:
      <pre><code>let indice = Math.floor(Math.random() * amigos.length);
let seleccionado = amigos[indice];</code></pre>
    </li>
  </ul>
</section>
👩‍💻 Autora
Andrea Paola Guzman Racini
