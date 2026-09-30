const libros = [
  {
    id: 1,
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes',
    anio: 1605,
    genero: 'Novela',
    disponible: true
  },
  {
    id: 2,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    anio: 1967,
    genero: 'Realismo mágico',
    disponible: true
  },
  {
    id: 3,
    titulo: '1984',
    autor: 'George Orwell',
    anio: 1949,
    genero: 'Ciencia ficción',
    disponible: false
  }
];

function buscarLibro(id) {
  return libros.find(libro => libro.id === id);
}

function prestarLibro(id) {
  const libro = buscarLibro(id);

  if (!libro) {
    return 'Libro no encontrado';
  }

  if (!libro.disponible) {
    return `El libro "${libro.titulo}" no está disponible`;
  }

  libro.disponible = false;

  return `Libro "${libro.titulo}" prestado correctamente`;
}

function devolverLibro(id) {
  const libro = buscarLibro(id);

  if (!libro) {
    return 'Libro no encontrado';
  }

  if (libro.disponible) {
    return `El libro "${libro.titulo}" ya estaba disponible`;
  }

  libro.disponible = true;

  return `Libro "${libro.titulo}" devuelto correctamente`;
}

function buscarPorGenero(genero) {
  return libros.filter(libro => libro.genero === genero);
}

function obtenerLibrosDisponibles() {
  return libros.filter(libro => libro.disponible);
}

console.log(buscarLibro(2));
console.log(prestarLibro(2));
console.log(devolverLibro(3));
console.log(buscarPorGenero('Novela'));
console.log(obtenerLibrosDisponibles());


const nombre = "Ines";

console.log(nombre)