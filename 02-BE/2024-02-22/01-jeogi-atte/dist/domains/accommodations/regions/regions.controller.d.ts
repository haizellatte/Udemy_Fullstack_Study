import { RegionsService } from './regions.service';
export declare class RegionsController {
    private readonly regionsService;
    constructor(regionsService: RegionsService);
    getRegions(): Promise<{
        id: number;
        name: string;
        label: string;
        createAt: Date;
        updatedAt: Date;
    }[]>;
}
