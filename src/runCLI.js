/**
 * @flow
 */
import fs from 'fs';
import { findBreakingChanges, buildSchema } from 'graphql';

type CliOptions = {
  oldSchemaPath: string,
  newSchemaPath: string,
}
export default function execute({
  oldSchemaPath,
  newSchemaPath,
}: CliOptions) {
  const oldSchema = buildSchema(fs.readFileSync(oldSchemaPath, 'utf8'));
  const newSchema = buildSchema(fs.readFileSync(newSchemaPath, 'utf8'));

  const breaking = findBreakingChanges(oldSchema, newSchema);

  if (breaking.length === 0) {
    console.log('Congratulations! NO BREAKING CHANGES');
    return;
  }

  console.log('BREAKING CHANGES');
  breaking.map((breaking) => console.log(breaking));
}
