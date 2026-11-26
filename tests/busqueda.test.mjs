import {test} from 'node:test';
import assert from 'node:assert/strict';
import {buscarNotas} from '../src/notas.mjs';

const notas = [
  {id:'lisboa', titulo:'Viaje a Lisboa', cuerpo:'Antes de salir\n\nVolver a la librería de la Rua do Século.', archivada:false, fecha:'2026-06-08'},
  {id:'lisboa24', titulo:'Lisboa 2024', cuerpo:'Apuntes de la visita anterior. El itinerario ya se completó.', archivada:true, fecha:'2024-05-10'}
];

test('buscar «Lisboa» en notas devuelve solo la nota activa', () => {
  assert.deepEqual(buscarNotas(notas, 'notas', 'Lisboa').map(n => n.titulo), ['Viaje a Lisboa']);
});

test('buscar «Lisboa» en archivo devuelve solo la nota archivada', () => {
  assert.deepEqual(buscarNotas(notas, 'archivo', 'Lisboa').map(n => n.titulo), ['Lisboa 2024']);
});
