steps to create a rest api with node js and typescript

1. npm init -y
2. instalar modulos:
    produccion: npm i express lowdb@1.0.0 morgan nanoid swagger-jsdoc swagger-ui-express cors 
    desarrollo: npm i -D typescript ts-node nodemon @types/cors @types/express @types/lowdb @types/morgan @types/swagger-jsdoc @types/swagger-ui-express

3. configurar los modulos
    ejecutar comando: 
        npx tsc --init

    crear una carpeta 
        /src/index.ts
    
    crear/modificar comando en el package.json para generar 
        "script":   { 
                        "build":"tsc" 
                    }