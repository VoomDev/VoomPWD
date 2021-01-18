voompwd
=======

Voom version of famous mac command pwd

[![Version](https://img.shields.io/npm/v/voompwd.svg)](https://npmjs.org/package/voompwd)
[![Downloads/week](https://img.shields.io/npm/dw/voompwd.svg)](https://npmjs.org/package/voompwd)
[![License](https://img.shields.io/npm/l/voompwd.svg)](https://github.com/voomteam/voompwd/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @bit/voom.voomcli.voom
$ voompwd COMMAND
running command...
$ voompwd (-v|--version|version)
voompwd/1.0.0 darwin-x64 node-v14.9.0
$ voompwd --help [COMMAND]
USAGE
  $ voompwd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`voompwd folder`](#voompwd-folder)
* [`voompwd hello`](#voompwd-hello)
* [`voompwd help [COMMAND]`](#voompwd-help-command)

## `voompwd folder`

PWDs the current folder

```
USAGE
  $ voompwd folder

OPTIONS
  -n, --name=name  name to print
```

_See code: [src/commands/folder.js](https://github.com/voomteam/voompwd/blob/v1.0.0/src/commands/folder.js)_

## `voompwd hello`

Says hello and tells you the command to pwd.

```
USAGE
  $ voompwd hello

OPTIONS
  -n, --name=name  name to print
```

_See code: [src/commands/hello.js](https://github.com/voomteam/voompwd/blob/v1.0.0/src/commands/hello.js)_

## `voompwd help [COMMAND]`

display help for voompwd

```
USAGE
  $ voompwd help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
