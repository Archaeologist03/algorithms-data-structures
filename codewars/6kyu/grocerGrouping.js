// Group items by category
// Fruit, Meat, Other, Vegetable
function solution(input) {
  // Return only stuff after _ in a str
  const removedCategoryPrefix = (arr) =>
    arr.map((item) => item.split('_').pop()).sort();
  // Find specific category, removes categorey from found str and sorts it out.
  const findByCategory = (arr, checker) => {
    const categoryArr = arr.filter((item, i) => {
      if (item.includes(checker)) {
        arr.splice(i, 1);
        return true;
      }
    });

    return removedCategoryPrefix(categoryArr);
  };

  const splited = input.split(',');

  const fruit = findByCategory(splited, 'fruit_');
  const meat = findByCategory(splited, 'meat_');
  const vegetable = findByCategory(splited, 'vegetable_');
  const other = removedCategoryPrefix(splited);

  const separator = '\n';

  return `fruit:${fruit}${separator}meat:${meat}${separator}other:${other}${separator}vegetable:${vegetable}`;
}

solution(
  'fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange',
); // "fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot");
