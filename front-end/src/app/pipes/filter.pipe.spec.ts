import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {

  const testData = [
    {
      "id": 14,
      "name": "Plan",
      "surname": "Pons",
      "surname2": "Calan",
      "sex": "M",
      "country_id": 3,
      "phone": "56663321",
      "datebirthday": new Date("1996-03-20T00:00:00"),
      "lastModification": new Date("2010-04-05T11:00:32"),
      "phonePrefix": "+(89) 56663321",
      "country": "France",
      "sexLarge": "Women",
  },
  {
      "id": 115,
      "name": "Cantona",
      "surname": "Sor",
      "surname2": "Garcia",
      "sex": "H",
      "country_id": 2,
      "phone": "5666233",
      "datebirthday": new Date("1997-03-10T00:00:00"),
      "lastModification": new Date("2000-02-05T09:00:00"),
      "phonePrefix": "+(55) 56663321",
      "country": "Germany",
      "sexLarge": "Men",
  },
  ];

  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('sholud be transform data successfully when has correct values', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(testData, "Plan").length).toEqual(1);
  });

  it('sholud be transform data successfully when has not correct values', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(testData, "xxxx").length).toEqual(0);
  });

  it('sholud be transform data successfully with name atribute', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el primer elemento del array de prueba
    expect(pipe.transform(testData, "Plan")).toEqual([testData[0]]);
  });

  it('sholud be transform data successfully with surname atribute', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el segundo elemento del array de prueba
    expect(pipe.transform(testData, "Sor")).toEqual([testData[1]]);
  });

  it('sholud be transform data successfully with surname2 atribute', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el primer elemento del array de prueba
    expect(pipe.transform(testData, "Calan")).toEqual([testData[0]]);
  });

  it('sholud be transform data successfully with surname surname2, name atributes', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el primer elemento del array de prueba
    expect(pipe.transform(testData, "Pons Calan, Plan")).toEqual([testData[0]]);
  });

  it('sholud be transform data successfully with id atribute', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el primer elemento del array de prueba
    expect(pipe.transform(testData, "14")).toEqual([testData[0]]);
  });

  it('sholud be transform data successfully with datebirthday atribute', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el segundo elemento del array de prueba
    expect(pipe.transform(testData, new Date("1997-03-10T00:00:00"))).toEqual([testData[1]]);
  });

  it('sholud be transform data successfully with sexLarge atribute', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el primer elemento del array de prueba
    expect(pipe.transform(testData, "Women")).toEqual([testData[0]]);
  });

  it('sholud be transform data successfully with phonePrefix atribute', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el segundo elemento del array de prueba
    expect(pipe.transform(testData, "+(55) 56663321")).toEqual([testData[1]]);
  });

  it('sholud be transform data successfully with phone atribute', () => {
    const pipe = new FilterPipe();
    // En este caso los dos usuarios tienen el mismo telefono, pero con diferente prefijo
    // Por lo tanto, se devuelven los 2 arrays
    expect(pipe.transform(testData, "56663321")).toEqual([testData[0], testData[1]]);
    expect(pipe.transform(testData, "56663321").length).toEqual(2);
  });

  it('sholud be transform data successfully with country atribute', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el primer elemento del array de prueba
    expect(pipe.transform(testData, "France")).toEqual([testData[0]]);
  });

  it('sholud be transform data successfully with lastModification atribute', () => {
    const pipe = new FilterPipe();
    // Solo devuelve el segundo elemento del array de prueba
    expect(pipe.transform(testData, new Date("2000-02-05T09:00:00"))).toEqual([testData[1]]);
  });

});
