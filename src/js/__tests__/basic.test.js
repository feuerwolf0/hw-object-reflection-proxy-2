import extractSpecials from "../functions";

test.each([
  ['С доступным описанием',
    {
      name: "Мечник", special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        },
      ]
    },
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }],
  ['С недоступным описанием',
    {
      name: "Мечник 2", special: [
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...'
          // <- обратите внимание, описание "засекречено"
        },
      ]
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }],
])('check my extract function %s', (name, params, result) => {
  const obj = params;
  const testResult = extractSpecials(obj);
    expect(testResult[0].id).toBe(result.id);
    expect(testResult[0].name).toBe(result.name);
    expect(testResult[0].icon).toBe(result.icon);
    expect(testResult[0].description).toBe(result.description);
});