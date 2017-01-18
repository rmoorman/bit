/** @flow */
import { Scope } from '../../../scope';

export default function init(path: string, name: string, groupName: string): Promise<Scope> {
  return Scope.create(path, name, groupName).then(scope => scope.ensureDir());
}
