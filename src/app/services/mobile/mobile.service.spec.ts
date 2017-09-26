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
      expect(service.menuActive).toEqual(false);
    });
  });

  describe('toggleMenu', () => {
    it('should call the changeMenuStatus function', () => {
      spyOn(service, 'changeMenuStatus');

      service.toggleMenu();
      expect(service.changeMenuStatus).toHaveBeenCalled();
    });

    it('should set active to the inverse of it’s original value', () => {
      const originalActiveValue = service.menuActive;
      service.toggleMenu();

      expect(service.menuActive).not.toEqual(originalActiveValue);
    });
  });
});
