import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function test(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create("output/test.html", `<h1>Hello ${options.name} </h1>`);
    return tree;
  };
}
