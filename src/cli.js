/**
 * @flow
 */
import 'babel-polyfill';
import yargs from 'yargs';
import execute from './runCLI';

export type Path = string;
export type Argv = {};

const docs = 'Documentation: https://github.com/entria/graphql-find-breaking-changes-cli';

export function run(argv?: Argv, project?: Path) {
  argv = yargs(argv || process.argv.slice(2))
    .usage('Usage: $0 <oldSchema.graphql> <newSchema.graphql>')
    .demand(2)
    .epilogue(docs)
    .help()
    .argv;

  execute({
    oldSchemaPath: argv._[0],
    newSchemaPath: argv._[1],
  });
}

