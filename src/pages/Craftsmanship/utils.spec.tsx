import * as React from 'react';
import { filterByItemName, filterByItemTypes } from './utils';

describe('Craftsmanship', () => {
  const items = [
    {
      id: 3000,
      nombre: 'Lentes de cuero',
      ruta: 'armor/lentesCuero',
      tipo: 'casco',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 2,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 100,
      habilidad1: 'hola',
      habilidad2: 'hola',
    },
    {
      id: 3001,
      nombre: 'Cota de cuero',
      ruta: 'armor/cotaCuero',
      tipo: 'pechera',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 2,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 100,
      habilidad1: 'adios',
      habilidad2: '',
    },
    {
      id: 3002,
      nombre: 'Guantes de cuero',
      ruta: 'armor/guantesCuero',
      tipo: 'guantes',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 2,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 100,
      habilidad1: 'adios',
      habilidad2: '',
    },
    {
      id: 3003,
      nombre: 'Cinturón de cuero',
      ruta: 'armor/cinturonCuero',
      tipo: 'pantalon',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 2,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 100,
      habilidad1: 'adios',
      habilidad2: '',
    },
    {
      id: 3004,
      nombre: 'Pantalones de cuero',
      ruta: 'armor/pantalonesCuero',
      tipo: 'botas',
      rama: 'Cuero',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 2,
      agua: 0,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 100,
      habilidad1: 'adios',
      habilidad2: '',
    },
    {
      id: 3005,
      nombre: 'Cubrecabeza de malla',
      ruta: 'armor/cubrecabezaMalla',
      tipo: 'casco',
      rama: 'Malla',
      rango: 'bajo',
      nivel: 1,
      rareza: 1,
      defensa: 2,
      ranura01: '',
      ranura02: '',
      ranura03: '',
      fuego: 0,
      agua: 2,
      rayo: 0,
      hielo: 0,
      draco: 0,
      precio: 100,
      habilidad1: 'adios',
      habilidad2: '',
    },
    {
      id: 1,
      nombre: 'Cuchillo de cazador I',
      rama: 'hierro',
      rama_evo: 1,
      ruta: 'weapon/sas/cuchilloCazador',
      rareza: 1,
      evolucion: 'inicial',
      tipo: 'arma',
      tipo_arma: 'Espada y escudo',
      precio: 200,
      ataque: 112,
      danio_elemento01: 0,
      elemento_01: '',
      elemento01: '',
      danio_elemento02: 0,
      elemento_02: '',
      elemento02: '',
      afilado: '',
      afinidad: 0,
      defensa: 0,
      sello_ancianos: '',
      ranura01: '',
      ranura02: '',
      ranura03: '',
      tipo_vial: '',
      danio_vial: 0,
      elemento_vial: '',
      numero_disparos: 0,
      tipo_disparo: '',
      nota01: '',
      nota02: '',
      nota03: '',
      modificaciones: 0,
      desvio: '',
      tiro_especial: '',
      bonus_kinsecto: '',
      vial01: '',
      vial02: '',
      vial03: '',
      vial04: '',
      vial05: '',
    },
    {
      id: 2,
      nombre: 'Cuchillo de cazador II',
      rama: 'hierro',
      rama_evo: 2,
      ruta: 'weapon/sas/cuchilloCazador',
      rareza: 1,
      evolucion: 'inicial',
      tipo: 'arma',
      tipo_arma: 'Espada y escudo',
      precio: 200,
      ataque: 126,
      danio_elemento01: 0,
      elemento_01: '',
      elemento01: '',
      danio_elemento02: 0,
      elemento_02: '',
      elemento02: '',
      afilado: '',
      afinidad: 0,
      defensa: 0,
      sello_ancianos: '',
      ranura01: '',
      ranura02: '',
      ranura03: '',
      tipo_vial: '',
      danio_vial: 0,
      elemento_vial: '',
      numero_disparos: 0,
      tipo_disparo: '',
      nota01: '',
      nota02: '',
      nota03: '',
      modificaciones: 0,
      desvio: '',
      tiro_especial: '',
      bonus_kinsecto: '',
      vial01: '',
      vial02: '',
      vial03: '',
      vial04: '',
      vial05: '',
    },
    {
      id: 3,
      nombre: 'Cuchillo de cazador III',
      rama: 'hierro',
      rama_evo: 3,
      ruta: 'weapon/sas/cuchilloCazador',
      rareza: 2,
      evolucion: 'inicial',
      tipo: 'arma',
      tipo_arma: 'Espada y escudo',
      precio: 1000,
      ataque: 140,
      danio_elemento01: 0,
      elemento_01: '',
      elemento01: '',
      danio_elemento02: 0,
      elemento_02: '',
      elemento02: '',
      afilado: '',
      afinidad: 0,
      defensa: 0,
      sello_ancianos: '',
      ranura01: '',
      ranura02: '',
      ranura03: '',
      tipo_vial: '',
      danio_vial: 0,
      elemento_vial: '',
      numero_disparos: 0,
      tipo_disparo: '',
      nota01: '',
      nota02: '',
      nota03: '',
      modificaciones: 0,
      desvio: '',
      tiro_especial: '',
      bonus_kinsecto: '',
      vial01: '',
      vial02: '',
      vial03: '',
      vial04: '',
      vial05: '',
    },
  ];

  it('should return an array with the item "Cuchillo de cazador I"', () => {
    const irrelevantItemName = 'Cuchillo de cazador I';
    const byName = filterByItemName(irrelevantItemName);
    const itemsFiltered = items.filter(byName);
    const itemExpected = itemsFiltered[0].nombre;
    expect(itemExpected).toBe(irrelevantItemName);
  });

  it('should return an array with the items type', () => {
    const typesPressed = ['pechera', 'Espada y escudo'];
    const typesResults = [
      'Cota de cuero',
      'Cuchillo de cazador I',
      'Cuchillo de cazador II',
      'Cuchillo de cazador III',
    ];
    const byType = filterByItemTypes(typesPressed);
    const itemsFilteredByType = items.filter(byType);
    itemsFilteredByType.forEach((item, index) => {
      expect(item.nombre.toLowerCase()).toBe(typesResults[index].toLowerCase());
    });
  });
});
