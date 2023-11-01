1. A project titled, “Alex’s Kitchen” from team "Remote Kitchen" uses Git for version control. Several developers are contributing, with each working on their own branch. The team follows certain conventions. Suppose you need to submit a hotfix. How would you name your branch? After finalizing your work in your designated branch, detail the steps you would take to create a PR and merge it with the production branch.

## Answer:

2. In a Digital Kitchen, we have an array of Menu collections. Each collection is an object of Menu. And contains two properties alongside with various properties of Menu. Which are, menuItems (which is an array of objects. Each object has a unique identifier) and, categories. Categories itself is an array of objects. In each object inside categories, there is one property (an array of int’s) called, menuItemsIds.

Find out the specific items that belongs to each category.
Take a reference from below code snippet,
const dummyArr = [
{
type: "Vegetarian",
menuItems: [
{id: 1, name: "Salad"},
{id: 2, name: "Veg Burger"},
{id: 3, name: "Pasta"}
],
category: [{
name: "Starters",
menuItems:[1,2]
}]
},
{
type: "Non-Vegetarian",
menuItems: [
{id: 4, name: "Chicken Wings"},
{id: 5, name: "Beef Burger"},
{id: 6, name: "Shrimp Pasta"}
],
category: [{
name: "Main Course",
menuItems:[4,5]
}]
}
]

Discuss the conceptual approach. Explain, how you will resolve this or get the data based on the conditions where id’s are being matched, keeping aside the specifics of coding.

## Answer:
