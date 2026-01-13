
// Base path for assets
const ASSETS_BASE_PATH = '/assets';

// SVG Icons
export const SVG_ICONS = {
  arrowDown: `${ASSETS_BASE_PATH}/arrow-down.svg`,
  calendar: `${ASSETS_BASE_PATH}/calendar.svg`,
  logo: `${ASSETS_BASE_PATH}/logo.svg`,
  messageNotif: `${ASSETS_BASE_PATH}/message-notif.svg`,
  notification: `${ASSETS_BASE_PATH}/notification.svg`,
  profile2User: `${ASSETS_BASE_PATH}/profile-2user.svg`,
  searchNormal: `${ASSETS_BASE_PATH}/search-normal.svg`,
  task: `${ASSETS_BASE_PATH}/task.svg`,
  teacher: `${ASSETS_BASE_PATH}/teacher.svg`,
  book: `${ASSETS_BASE_PATH}/book.svg`,
  message: `${ASSETS_BASE_PATH}/message-text.svg`,
  boardmath: `${ASSETS_BASE_PATH}/board-math.svg`,
  book2: `${ASSETS_BASE_PATH}/book2.svg`,
  award: `${ASSETS_BASE_PATH}/award.svg`,
  avatar: `${ASSETS_BASE_PATH}/avatars.svg`,
  homehashtag: `${ASSETS_BASE_PATH}/home-hashtag.svg`,
  settings2: `${ASSETS_BASE_PATH}/setting-2.svg`,
  book1:`${ASSETS_BASE_PATH}/book (1).svg`,
  arrowleft:`${ASSETS_BASE_PATH}/arrow-left.svg`,
  trend:`${ASSETS_BASE_PATH}/trend.svg`
   } as const;

// Images (PNG/JPG)
export const IMAGES = {
  book: `${ASSETS_BASE_PATH}/book.png`,
  logoJpg: `${ASSETS_BASE_PATH}/logo.jpg`,
  sidenavMenu: `${ASSETS_BASE_PATH}/sidenav menu.png`,
  task: `${ASSETS_BASE_PATH}/task.png`,
  teacher: `${ASSETS_BASE_PATH}/teacher.png`,
  videoImage: `${ASSETS_BASE_PATH}/VideoImage.png`,
  profilephoto: `${ASSETS_BASE_PATH}/profilephoto.png`,
  sidenav2: `${ASSETS_BASE_PATH}/sidenav2.png`,
  sidenav3: `${ASSETS_BASE_PATH}/sidenav3.png`,
  sidenav4: `${ASSETS_BASE_PATH}/sidenav4.png`,
  sidenav5: `${ASSETS_BASE_PATH}/sidenav5.png`,
  sidenav6: `${ASSETS_BASE_PATH}/sidenav6.png`,
  avatar:`${ASSETS_BASE_PATH}/Avatars.png`,
  avatar2:`${ASSETS_BASE_PATH}/avatar2.png`,

} as const;

// Combined assets object
export const ASSETS = {
  ...SVG_ICONS,
  ...IMAGES,
} as const;

// Type exports
export type SvgIconKey = keyof typeof SVG_ICONS;
export type ImageKey = keyof typeof IMAGES;
export type AssetKey = keyof typeof ASSETS;

// Helper function to get asset path
export const getAssetPath = (key: AssetKey): string => {
  return ASSETS[key];
};

// Default export with all assets
export default ASSETS;
