import { MoralStatusService, Status } from './moral-status.service';

describe('MoralStatusService', () => {
    let moralStatusService: MoralStatusService;

    beforeEach(() => {
        moralStatusService = new MoralStatusService();
    });

    it('moralStatusService should be defined', () => {
        expect(moralStatusService).toBeDefined();
    });

    it('setMoralStatus should set the moralStatus attribute as GOOD', () => {
        moralStatusService.setMoralStatus(Status.GOOD);
        expect(moralStatusService.moralStatus).toBe(Status.GOOD);
    });

    it('setMoralStatus should set the moralStatus attribute as BAD', () => {
        moralStatusService.setMoralStatus(Status.BAD);
        expect(moralStatusService.moralStatus).toBe(Status.BAD);
    });

    it('getMoralStatus should return the moralStatus', () => {
        moralStatusService.moralStatus = Status.GOOD;
        expect(moralStatusService.getMoralStatus()).toBe(Status.GOOD);
    });
});
