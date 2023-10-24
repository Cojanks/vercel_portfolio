interface SizeNum {
  mobileOnlyMax: number;
  mobileTabletMin: number;
  mobileTabletMax: number;
  tabletMin: number;
  tabletMax: number;
  desktopMin: number;
}

export const deviceSizeNum: SizeNum = {
  mobileOnlyMax: 600,
  mobileTabletMin: 601,
  mobileTabletMax: 767,
  tabletMin: 768,
  tabletMax: 1000,
  desktopMin: 1001,
};

interface SizeStr {
  mobileOnlyMax: string;
  mobileTabletMin: string;
  mobileTabletMax: string;
  tabletMin: string;
  tabletMax: string;
  desktopMin: string;
}

const deviceSizeString: SizeStr = {
  mobileOnlyMax: '600px',
  mobileTabletMin: '601px',
  mobileTabletMax: '767px',
  tabletMin: '768px',
  tabletMax: '1000px',
  desktopMin: '1001px',
};

export const deviceQuery = {
  mobileOnlyMax: `max-width: ${deviceSizeString.mobileOnlyMax}`,
  mobileTabletMin: `min-width: ${deviceSizeString.mobileTabletMin}`,
  mobileTabletMax: `max-width: ${deviceSizeString.mobileTabletMax}`,
  tabletMin: `min-width: ${deviceSizeString.tabletMin}`,
  tabletMax: `max-width: ${deviceSizeString.tabletMax}`,
  desktopMin: `min-width: ${deviceSizeString.desktopMin}`,
};
