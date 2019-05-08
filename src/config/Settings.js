/*
    Supporter Group Info
*/

// Web presence config
// "Follow Us" on Home screen

// TODO: Build home screen dynamically based on this websites object

// enum
export const SocialPlatform = {
  Twitter: 'Twitter',
  Facebook: 'Facebook',
  Instagram: 'Instagram',
  Web: 'web',
  YouTube: 'YouTube'
};

export const TWITTER_URL = 'https://twitter.com/NGSDetroit';
export const FACEBOOK_URL = 'https://www.facebook.com/NGSDetroit';
export const INSTAGRAM_URL = 'https://instagram.com/northernguard';
export const WEBSITE_URL = 'https://noonelikes.us';
export const YOUTUBE_URL = 'https://www.youtube.com/user/NorthernGuardDCFC';
export const SHOP_URL = 'https://noonelikes.us/shop/';
export const PRIDERAISER_URL =
  'https://www.prideraiser.org/campaigns/northern-guard-supporters-detroit-prideraiser-KPNjywj/';
export const GOFUNDME_URL =
  'https://twitter.com/LetsMakeRoots';
export const ESP_TWITTER_URL = 'https://twitter.com/Rouge_y_Oro';
export const ESP_INSTAGRAM_URL = '';
export const ESP_WEBSITE_URL = '';
export const EVENTS_URL = 'https://m.facebook.com/NGSDetroit/events/';

export const PRIDERAISER_ICON = require('../../assets/prideraiser.png');
export const GOFUNDME_ICON = require('../../assets/gofundme.png');

export const CLUB_LOGO = require('../../assets/dcfc_logo.png');

// icon: Iconicons name
export const websites = [
  { type: SocialPlatform.Twitter, icon: 'logo-twitter', url: TWITTER_URL },
  { type: SocialPlatform.Facebook, icon: 'logo-facebook', url: FACEBOOK_URL },
  { type: SocialPlatform.Instagram, icon: 'logo-instagram', url: INSTAGRAM_URL },  
  { type: SocialPlatform.Web, icon: 'md-cart', url: SHOP_URL },
  { type: SocialPlatform.Web, image: GOFUNDME_ICON, url: GOFUNDME_URL }
];

export const esp_websites = [
  { type: SocialPlatform.Twitter, icon: 'logo-twitter', url: ESP_TWITTER_URL },
  { type: SocialPlatform.Instagram, icon: 'logo-instagram', url: ESP_INSTAGRAM_URL },
  { type: SocialPlatform.Web, icon: 'md-browsers', url: ESP_WEBSITE_URL }
];

// { type: SocialPlatform.Web, icon: 'md-browsers', url: WEBSITE_URL },
// { type: SocialPlatform.Web, image: PRIDERAISER_ICON, url: PRIDERAISER_URL },
// { type: SocialPlatform.Web, image: GOFUNDME_ICON, url: GOFUNDME_URL }

/*
    App Skin
*/

// Chattahooligans + NGS palette
export const Palette = {
  Navy: '#002D56',
  Sky: '#A3D8F7',
  White: '#FFFFFF',
  Black: '#000000',
  Gold: '#c7990b',
  Rouge: '#5a0204'
};

export const DefaultColors = {
  NavigationBarBackground: Palette.Rouge,
  Background: Palette.White,
  ButtonBackground: Palette.Rouge,
  ButtonText: Palette.White,
  HeaderBackground: Palette.Rouge,
  HeaderText: Palette.White,
  Text: Palette.Black,
  ColorText: Palette.Navy
}

export const Skin = {
  Home_SocialButtons: DefaultColors.ButtonBackground,
  Songbook_Background: Palette.Gold,
  Songbook_ToCButtonBackground: DefaultColors.ButtonBackground,
  SingleSong_Background: Palette.Rouge,
  Player_TopContainerBackground: DefaultColors.NavigationBarBackground,
  Player_Background: Palette.Gold,
  Roster_DefaultThumbnail: CLUB_LOGO,
  Player_DefaultImage: CLUB_LOGO,
};