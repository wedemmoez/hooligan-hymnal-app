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
export const PRIDERAISER_URL = 'https://www.prideraiser.org/campaigns/northern-guard-supporters-detroit-prideraiser-KPNjywj/';
export const GOFUNDME_URL = 'https://www.gofundme.com/chattahooligan-youth-soccer-investment';
  'https://twitter.com/LetsMakeRoots';
export const ESP_TWITTER_URL = 'https://twitter.com/Rouge_y_Oro';
export const ESP_INSTAGRAM_URL = '';
export const ESP_WEBSITE_URL = '';
export const EVENTS_URL = 'https://noonelikes.us/events/';
export const INSTRUMENTATION_URL ='https://drive.google.com/open?id=1dW9z4lh5924mXKtOyhc4dt8_OuAT9UXr';
export const ROOTS_URL = 'https://noonelikes.us/about-ngs/'
export const SMOKE_URL = 'https://noonelikes.us/donate/'

// Common Images
// like social media icons
export const PRIDERAISER_ICON = require('../../assets/prideraiser.png');
export const GOFUNDME_ICON = require('../../assets/gofundme.png');
export const GOFUNDME_BW_ICON = require('../../assets/gofundme_bw.png');
export const CLUB_LOGO = require('../../assets/dcfc_logo.png');
// used in SongView to link to sheet music
export const MUSICAL_SCORE_ICON = require('../../assets/musical-score.png');
export const PRIDERAISER_ACTIVE = false;

// icon: Iconicons name
export const websites = [
  { type: SocialPlatform.Twitter, icon: 'logo-twitter', url: TWITTER_URL },
  { type: SocialPlatform.Facebook, icon: 'logo-facebook', url: FACEBOOK_URL },
  { type: SocialPlatform.Instagram, icon: 'logo-instagram', url: INSTAGRAM_URL },  
  { type: SocialPlatform.Web, icon: 'md-cart', url: SHOP_URL },
  { type: SocialPlatform.Web, image: PRIDERAISER_ICON, url: PRIDERAISER_URL },
  { type: SocialPlatform.Web, image: GOFUNDME_BW_ICON, url: GOFUNDME_URL, tint: true }
];

export const esp_websites = [
  { type: SocialPlatform.Twitter, icon: 'logo-twitter', url: ESP_TWITTER_URL }
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
  Prideraiser: '#a55eea',
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
  ColorText: Palette.Navy,
  Secondary: Palette.Sky
}

export const Skin = {
  Home_SocialButtons: DefaultColors.ButtonBackground,
  Songbook_Background: Palette.White,
  Songbook_ToCButtonBackground: DefaultColors.ButtonBackground,
  SingleSong_Background: Palette.Rouge,
  Player_TopContainerBackground: DefaultColors.NavigationBarBackground,
  Player_Background: Palette.White,
  Roster_DefaultThumbnail: CLUB_LOGO,
  Roster_TabBackground: DefaultColors.ButtonBackground,
  Roster_ActiveTabIndicator: DefaultColors.ButtonText,
  Roster_ActiveTabLabel: DefaultColors.ButtonText,
  Roster_InactiveTabLabel: DefaultColors.Secondary,
  Roster_FriendsTabIcon: 'md-heart',
  Roster_FriendsTabLabel: 'Friends',
  Roster_FoesTabIcon: 'md-thumbs-down',
  Roster_FoesTabLabel: 'Foes',
  Player_DefaultImage: CLUB_LOGO,
};

/*
  App Feature Flags
*/
export const Settings = {
  Player_ShowSongs: true
}