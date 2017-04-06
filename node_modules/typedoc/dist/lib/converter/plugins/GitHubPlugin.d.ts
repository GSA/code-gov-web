import { ConverterComponent } from "../components";
declare module "shelljs" {
    interface ExecOutputReturnValue {
        stdout: string;
        stderr: string;
    }
}
export declare class GitHubPlugin extends ConverterComponent {
    private repositories;
    private ignoredPaths;
    initialize(): void;
    private getRepository(fileName);
    private onEndResolve(context);
}
