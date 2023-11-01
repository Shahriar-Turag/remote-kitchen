## Answer 1:

First I need to check that the production branch is up to date with the master branch. I do this by running `git checkout production` and then `git merge master`. If there are any conflicts, I will need to resolve them before continuing.

Next, I create a new branch called "hotfix" off of the production branch. I do this by running `git checkout -b hotfix production`.

I then make the necessary changes to the code in the hotfix branch and commit them with `git commit -m "Fix bug in production code"`.

Finally, I push the hotfix branch to the remote repository with `git push origin hotfix` and create a pull request to merge the hotfix branch into the production branch. Once the PR is approved and merged, the hotfix will be deployed to production.

It's good practice that once the hotfix is deployed, I need to delete the hotfix branch both locally and remotely with `git branch -d hotfix` and `git push origin --delete hotfix`.
By doing this, The repository will be clean and tidy.

## Answer 2:

Let's start with the dummy array. We have two objects in the array. Each object has a type, menuItems and categories. The menuItems is an array of objects. Each object has a unique identifier. The categories is an array of objects. Each object has a name and menuItemsIds. The menuItemsIds is an array of int's.

I need to find out the specific items that belongs to each category. I can do this by using the reduce method. The reduce method takes two parameters. The first parameter is the accumulator. The second parameter is the current value. The reduce method returns a single value. The reduce method is used to reduce an array to a single value.

<code>const categoryItems = dummyArr.reduce((result, menu) => {...})</code>

Next I iterate through `category` property of the `menu` object using the `forEach` method.

<code>menu.category.forEach((category) => {...})</code>

For each category, I extract the category name and the list of `menuItems`.

Then in the `items` array, I use the `map` method to transform the `menuItems` IDs into their actual menu items.

<code>const items = category.menuItemsIds.map((id) => {...})</code>

Then I check if the `categoryName` is already in the `result` object. If it is, I add the `items` to the `result` object. If not, I create a new entry in the `result` object with the `categoryName` as the key and the `items` as the value.

Finally, I return the `result` object.
