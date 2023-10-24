interface Size {
  mobileOnlyMax: string;
  mobileTabletMin: string;
  mobileTabletMax: string;
  tabletMin: string;
  tabletMax: string;
  desktopMin: string;
}

export const deviceSize: Size = {
  mobileOnlyMax: '600px',
  mobileTabletMin: '601px',
  mobileTabletMax: '767px',
  tabletMin: '768px',
  tabletMax: '1000px',
  desktopMin: '1001px',
};

export const deviceQuery = {
  mobileOnlyMax: `max-width: ${deviceSize.mobileOnlyMax}`,
  mobileTabletMin: `min-width: ${deviceSize.mobileTabletMin}`,
  mobileTabletMax: `max-width: ${deviceSize.mobileTabletMax}`,
  tabletMin: `min-width: ${deviceSize.tabletMin}`,
  tabletMax: `max-width: ${deviceSize.tabletMax}`,
  desktopMin: `min-width: ${deviceSize.desktopMin}`,
};
