# CLI Loader

Installation
------------

Install the package using NPM or any other package manager of your choice.

```bash
npm install @formidablejs/cli-loader @formidablejs/console
npm install --save-dev ts-node typescript
```

Usage
-----

Import the `loader` function from `@formidablejs/cli-loader` and `Application` class from `@formidablejs/console`. Pass the `Application` class to the `loader` function and call the `run` method on the returned instance.

### Initialize the application

Create a script named `run` under the `bin` directory:

```js
#!/usr/bin/env node
const { loader } = require('@formidablejs/cli-loader')
const { Application } = require('@formidablejs/console')
const path = require('path')

const project = path.join(__dirname, '..', 'tsconfig.json')

require('ts-node').register({project})

loader(Application, {
    development: true,
    root: path.join(__dirname, '...')
}).run()
```

### Example command

Create a class named `HelloCommand.ts` under the `src/Commands` directory:

```ts
const { Command } = from '@formidablejs/console'

export default class HelloCommand extends Command {
    get signature(): string {
        return 'hello'
    }

    get description(): string {
        return 'Say hello to the world'
    }

    async handle(): Promise<void> {
        this.info('Hello world!')
    }
}
```

### Run the command

```bash
chmod +x ./bin/run
./bin/run hello
```

Todo
----

- [ ] Add tests

Security
-------

If you discover any security related issues, please email donaldpakkies@gmail.com instead of using the issue tracker.

License
-------

The MIT License (MIT). Please see [License File](LICENSE) for more information.