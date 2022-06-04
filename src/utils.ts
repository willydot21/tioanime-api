
function handlerParseQuery(elem:any): string[] {
  if( (typeof elem === 'string') || Array.isArray(elem) ){
    return (typeof elem === 'string')? [elem] : elem;
  } else {
    return [];
  }
}

const genres: string[] = [
  'accion', 'artes-marciales', 'aventuras', 'carreras',
  'ciencia-ficcion', 'comedia', 'demencia', 'demonios',
  'deportes', 'drama', 'ecchi', 'escolares', 'espacial',
  'fantasia', 'harem', 'historico', 'infantil', 'josei',
  'juegos', 'magia', 'mecha', 'militar', 'misterio', 'musica',
  'parodia', 'policia', 'psicologico', 'recuentos-de-la-vida',
  'romance', 'samurai', 'seinen', 'shoujo', 'shounen', 'sobrenatural',
  'superpoderes', 'suspenso', 'terror', 'vampiros', 'yaoi', 'yuri'
];

const types: string[] = ['tv', 'ova', 'special', 'movie'];

export {
  types, genres,
  handlerParseQuery
}