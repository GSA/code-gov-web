export declare class AxisResolverFactory {
    constructor();
    create(vertical?: boolean): AxisResolver;
}
export declare class AxisResolver {
    private vertical;
    constructor(vertical?: boolean);
    clientHeightKey(): string;
    offsetHeightKey(): string;
    scrollHeightKey(): string;
    pageYOffsetKey(): string;
    offsetTopKey(): string;
    scrollTopKey(): string;
    topKey(): string;
}
