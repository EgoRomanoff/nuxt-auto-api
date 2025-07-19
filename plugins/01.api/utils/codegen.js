import * as path from "node:path";
import { generateApi } from 'swagger-typescript-api';

await generateApi({
    /**
     * Путь до локального файла спецификации (JSON или YAML).
     * Используется, если не передан url.
     */
    input: path.resolve(process.cwd(), './plugins/01.api/openapi/openapi.json'),

    /**
     * Папка, в которую будет сгенерирован код.
     * Если false, код не будет записываться в файловую систему
     * (можно использовать как in-memory генерацию).
     */
    output: path.resolve(process.cwd(), './plugins/01.api/model'),

    /**
     * URL к swagger-файлу (обычно openapi.json), если не используется input.
     */
    url: undefined,

    /**
     * Сам объект OpenAPI спецификации (можно прокинуть напрямую).
     * Переопределяет url и input, если задан.
     */
    // spec: undefined,

    /**
     * Имя выходного файла (если modular: false). Используется в немодульной генерации.
     */
    fileName: process.env.GENERATED_API_FILE ?? 'api.ts',

    /**
     * Пути к директориям с шаблонами, Используется для генерации файлов
     */
    // TODO: разобраться до конца
    // templatePaths: {
    //     /** `templates/base` базовые шаблоны */
    //     base: string;
    //     /** `templates/default` одиночный файл-клиент */
    //     default: string;
    //     /** `templates/modular` шаблоны для модульной генерации */
    //     modular: string;
    //     /** usage path if `--templates` option is not set путь по умолчанию */
    //     original: string;
    //     /** custom path to templates (`--templates`) путь к кастомным шаблонам */
    //     custom: string | null;
    // };

    /**
     * Токен для авторизации при загрузке спеки с url.
     * Автоматически пробрасывается в заголовок Authorization: Bearer ${token}.
     */
    // authorizationToken: undefined,

    /**
     * Генерировать типы ответов API
     */
    generateResponses: true,

    /**
     * Если у эндпоинта есть default ответ — считать его успешным (200-299), а не ошибкой
     */
    defaultResponseAsSuccess: false,

    /**
     * Генерация enum/типов с названием маршрутов (например, "GET_/users").
     * Полезно для type-safe роутинга
     */
    generateRouteTypes: true,

    /**
     * Генерировать клиент для работы с API
     * Если false, будут только типы и контракты.
     */
    generateClient: true,

    /**
     * Использовать объединённые enum-типы (`enum | string`)
     * Делает из enum-ов union-type ('A' \| 'B') вместо enum { A = 'A' }.
     */
    generateUnionEnums: true,

    /**
     * Спека OpenAPI после и до трансформации.
     * Используется внутри генератора для обработки.
     */
    // TODO: разобраться до конца
    // swaggerSchema: object;
    // originalSchema: object;

    /**
     * Карта всех components.schemas и их метаданных
     * (внутренняя структура генератора).
     */
    // componentsMap: Record<string, SchemaComponent>;

    // Был ли оригинальный документ в Swagger 2.0 и преобразован в OpenAPI 3.
    // convertedFromSwagger2: boolean;

    // Индекс тега, который использовать как имя модуля.
    // Например, если у endpoint-а несколько тегов.
    moduleNameIndex: 1,

    // Использовать только первый тег как имя модуля (вместо объединения нескольких тегов).
    // moduleNameFirstTag: boolean;

    // Список дополнительных шаблонов (например, можно генерировать хуки или константы).
    // Используется в связке с --extraTemplates.
    // extraTemplates: {
    //     name: string;
    //     path: string;
    // }[];

    // Вытаскивать параметры запроса (query, path, header) в отдельный объект.
    extractRequestParams: true,

    // Извлекать data из ответа (return T вместо return { data: T }).
    // unwrapResponseData: boolean;

    // Сортировать типы и маршруты в алфавитном порядке. Удобно для стабильных диффов и коммитов.
    sortTypes: true,
    sortRoutes: true,

    // Использовать единый HTTP-клиент для всех вызовов. Генерирует httpClient.ts.
    singleHttpClient: true,

    // Настройки нейминга:
    // например, IUser
    typePrefix: 'API',
    // например, UserDto
    // typeSuffix: string;
    // например, KEY_XXX = 'xxx'
    enumKeyPrefix: 'API',
    // enumKeySuffix: string;

    // Исправлять ошибки OpenAPI-спеки (если есть несовместимости)
    patch: true,

    // Удаляет все файлы из output перед генерацией.
    cleanOutput: true,

    // Включает debug-логи и больше информации в процессе генерации.
    // debug: true;

    // Использовать Array<T> вместо T[].
    anotherArrayType: false,

    // Выносить тело запроса (requestBody) в отдельную переменную.
    extractRequestBody: true,

    // Выбор HTTP-клиента (axios или fetch)
    httpClientType: 'fetch',

    // Добавляет readonly ко всем полям интерфейсов.
    // addReadonly: boolean;

    // Управляют выносом соответствующих сущностей (enum, responses, errors, body)
    // в отдельные файлы/секции.
    extractResponseBody: true,
    extractResponseError: true,
    extractEnums: true,
    extractResponses: true,

    // Префиксы, которые будут добавлены,
    // если сгенерированное имя некорректно (начинается с цифры и т.п.).
    // fixInvalidTypeNamePrefix: string;
    // fixInvalidEnumKeyPrefix: string;

    //  Тип, который будет использоваться по умолчанию для ответа (если тип не определён явно).
    // defaultResponseType: string;

    /**
     * Генерировать .js + .d.ts вместо .ts (для JS-проектов с типами).
     */
    toJS: false,

    // Не кидать ошибку, если при генерации что-то пошло не так.
    // disableThrowOnError: boolean;

    // Полное отключение логов.
    // silent: boolean;

    // Возможность встраивать свои хуки в генерацию (например, изменить типы до вывода на диск).
    // hooks: Partial<Hooks>;

    // Использовать enum SomeEnum { KEY = 'KEY' }, а не KEY = 'value'.
    // enumNamesAsValues: boolean;

    // Версия OpenAPI-документа.
    // version: string;

    // Настройки TypeScript-компилятора, которые будут использоваться для вывода.
    // compilerTsConfig: Record<string, unknown>;

    // Названия резолверов, если используется кастомная система генерации имен.
    // enumKeyResolverName: string;
    // typeNameResolverName: string;
    // specificArgNameResolverName: string;

    // Кастомный транслятор спецификаций в код. Можно расширить поведение генератора.
    // customTranslator?: new () => Translator;

    // Внутренняя опция, включающая генерацию вспомогательных типов для required полей (RequiredKeys<T>).
    // internalTemplateOptions: {
    //     addUtilRequiredKeysType: boolean;
    // };

    // Функция-резолвер, которая управляет неймингом схем из components.schemas.
    // componentTypeNameResolver: ComponentTypeNameResolver;

    // Кастомные имена выходных файлов.
    // fileNames: {
    //     dataContracts: string;
    //     routeTypes: string;
    //     httpClient: string;
    //     outOfModuleApi: string;
    // };

    // Какие шаблоны использовать и где их искать (переопределяется при кастоме).
    // templatesToRender: {
    //     api: string;
    //     dataContracts: string;
    //     httpClient: string;
    //     routeTypes: string;
    //     routeName: string;
    //     dataContractJsDoc: string;
    //     interfaceDataContract: string;
    //     typeDataContract: string;
    //     enumDataContract: string;
    //     objectFieldJsDoc: string;
    // };

    // Хранит информацию о маршрутах с одинаковыми именами. Используется для авто-уникализации.
    // routeNameDuplicatesMap: Map<string, string>;

    // Название главного API-класса. По умолчанию: Api.
    apiClassName: 'API',

    // Опции запроса к swagger-файлу, если используется url.
    // requestOptions?: RequestInit;

    // Продвинутая конфигурация для управления тем, какие сущности выносить (enums, schemas, responses, и т.д.).
    // extractingOptions: ExtractingOptions;
});
