# @dance2die/promise-to-resource

This JavaScript library exposes a default method, which turns a promise into a resource for React's Suspense.

## Installation

```bash
npm i @dance2die/promise-to-resource
# or
yarn add @dance2die/promise-to-resource
```

## Example

```jsx
import wrapPromise from '@dance2die/promise-to-resource';

const fetchUser = async () => ({ name: 'dance2die' });
const fetchPosts = () =>
  new Promise(resolve => setTimeout(() => resolve(['post1', 'post2']), 3000));

export default {
  user: wrapPromise(fetchUser()),
  posts: wrapPromise(fetchPosts()),
};
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/dance2die"><img src="https://avatars1.githubusercontent.com/u/8465237?v=4" width="100px;" alt="Sung M. Kim"/><br /><sub><b>Sung M. Kim</b></sub></a><br /><a href="https://github.com/dance2die/promise-to-resource/commits?author=dance2die" title="Code">💻</a> <a href="#ideas-dance2die" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/MinimumViablePerson"><img src="https://avatars3.githubusercontent.com/u/16916098?v=4" width="100px;" alt="Nicolas Marcora"/><br /><sub><b>Nicolas Marcora</b></sub></a><br /><a href="https://github.com/dance2die/promise-to-resource/commits?author=MinimumViablePerson" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
