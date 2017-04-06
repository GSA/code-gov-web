import { Angulartics2 } from '../../core/angulartics2';
export declare class Angulartics2GoogleTagManager {
    private angulartics2;
    constructor(angulartics2: Angulartics2);
    pageTrack(path: string): void;
    eventTrack(action: string, properties: any): void;
    exceptionTrack(properties: any): void;
    setUsername(userId: string): void;
}
