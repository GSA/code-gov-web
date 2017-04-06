# reaver

> Minimal asset hashing CLI and API

Use as a CLI or programmatically.

## Install

```shell
npm install --save-dev reaver
```

## API

The API exposes a function.

### `reaver(files, options)`

Moves the specified file(s), appending to their paths a hash of their contents. Directories and missing files are ignored.

If a `manifest: true` option is passed, it returns a map of file paths to the resulting hashes. The manifest always uses absolute paths.

### `reaver.rev(file, data)`

This method will just return the hashed filename based on the provided data, without accessing the file system.

### Circular Dependencies

When you have circular dependencies, you can use `--consider <file>`. Suppose you have `app.js` and `service-worker.js`. `app.js` references the worker to install it, and the worker references `app.js` to download it for offline-first. You can `--consider service-worker.js` when hashing `app.js` so that the contents of service-worker are factored in the hashing of `app.js`, so that even though `app.js` itself hasn't changed, the hash will change if the contents of `service-worker.js` have changed.

Without this option, you would keep changing the hashes for each file as the reference to the other file changes in each other.

## CLI

Usage

```shell
reaver [options] [file] [file] [file]
```

Invokes the `reaver(files, options)` API method, using `minimist` for option parsing.


## Example

Usage example below

```shell
touch foo{,.js}
reaver *
ls
# foo.d41d8cd9    foo.d41d8cd9.js
```

# License

MIT
