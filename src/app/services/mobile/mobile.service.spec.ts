import { MobileService } from './';

describe('MobileService', () => {
  let service: MobileService;
  beforeEach(() => { service = new MobileService(); });

  describe('hideMenu', () => {
    it('should call the changeMenuStatus function', () => {
      spyOn(service, 'changeMenuStatus');

      service.hideMenu();
      expect(service.changeMenuStatus).toHaveBeenCalled();
    });

    it('should set active to false', () => {
      spyOn(service, 'changeMenuStatus');

      service.hideMenu();
      expect(service.active).toEqual(false);
    });
  });

  describe('toggleMenu', () => {
    it('should call the changeMenuStatus function', () => {
      spyOn(service, 'changeMenuStatus');

      service.toggleMenu();
      expect(service.changeMenuStatus).toHaveBeenCalled();
    });

    it('should set active to the inverse of it’s original value', () => {
      const originalActiveValue = service.active;
      service.toggleMenu();

      expect(service.active).not.toEqual(originalActiveValue);
    });
  });
});
