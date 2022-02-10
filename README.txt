configurar typescript
    1
    npm i -D typescript ts-node @types/node
    npx tsc --init
    
configurar eslint
    2
    instalar la extension eslint en vscode
    npm i -D eslint
    npx eslint --init
    .eslintignore >>> node_modules, build, .env ... etc
    
    configurar prettier
    3
    instalar extension de prettier en vscode
    npm i -D prettier pretty-quick

    touch .prettierrc >>
    {
        "tabWidth": 2,
        "printWidth": 120,
        "singleQuote": true,
        "trailingComma": "es5",
        "arrowParens": "always",
        "semi": true
    }

        testing with command: npx pretty-quick --> cuidado esto solo funciona con files agregados posteriores a prettier y pretty-quick

    4
    Hacer esto despues de instalar prettier!!!
    npm i -D eslint-plugin-prettier eslint-config-prettier
    
    configuraciones extras (opcional)
    5
    imports absolutes (extra)
    npm i -D eslint-import-resolver-typescript tsconfig-paths
    
    6
    modificar el eslintrc.js -> como el que esta en el codigo

    7
    modificar el tsconfig -> como el que esta en el codigo
    

configurar husky

    8
    npm i -D husky lint-staged
    npx husky-init

    9
    agregar esto a al package.json

    "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
        "npx pretty-quick --staged ng lint ng test",
        "npx eslint",
        "npx prettier --write"
        ]
    }

    10 
    agregar esto al pre-commit

        npm run build
        npx lint-staged

