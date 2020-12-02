const {Command, flags} = require('@oclif/command')
var currfold = process.cwd()

class FolderCommand extends Command {
  async run() {
    const {flags} = this.parse(FolderCommand)
    this.log(currfold)
  }
}

FolderCommand.description = `PWDs the current folder`

FolderCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = FolderCommand
