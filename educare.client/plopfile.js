module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create a component with a structured folder',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Component name:',
        }],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'plop-templates/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}Container.tsx',
                templateFile: 'plop-templates/ComponentContainer.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
                templateFile: 'plop-templates/Component.types.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
                templateFile: 'plop-templates/Component.styles.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/sub-components/SubComponent.tsx',
                templateFile: 'plop-templates/SubComponent.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.ts',
                templateFile: 'plop-templates/index.ts.hbs',
            }
        ],
    });
};