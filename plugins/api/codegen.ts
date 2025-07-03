import * as path from "node:path";
import { generateApi } from 'swagger-typescript-api';

// Генерация API-клиента на основе OpenAPI-спецификации
generateApi({
    // Имя выходного файла (если modular: false)
    name: 'api.ts',

    // Использовать единый HTTP-клиент (axios)
    singleHttpClient: true,

    // Выбор HTTP-клиента (axios или fetch)
    httpClientType: 'axios',

    // Разбить API-клиент на модули (файлы)
    modular: true,

    // Выносить тело запроса в отдельный параметр
    extractRequestBody: true,

    // Выносить query и path параметры в отдельный параметр
    extractRequestParams: true,

    // Выносить тело ответа в отдельный параметр
    extractResponseBody: true,

    // Выносить ошибки API в отдельный параметр
    extractResponseError: true,

    // Генерировать типы ответов API
    generateResponses: true,

    // Использовать объединённые enum-типы (`enum | string`)
    generateUnionEnums: true,

    // Исправлять ошибки OpenAPI-спеки (если есть несовместимости)
    patch: true,

    // Генерировать клиент для работы с API
    generateClient: true,

    // Индекс для именования модулей API
    moduleNameIndex: 1,

    // Путь к OpenAPI-файлу
    input: path.resolve(process.cwd(), './api/openapi.json'),

    // Папка для сохранения сгенерированного кода
    output: path.resolve(process.cwd(), './api'),
});
