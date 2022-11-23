import smallHero from "./mobile/image-manage-hero.jpg";
import smallHero2x from "./mobile/image-manage-hero@2x.jpg";
import smallPrevTop from "./mobile/image-manage-preview-1.jpg";
import smallPrevTop2x from "./mobile/image-manage-preview-1@2x.jpg";
import smallPrevBottom from "./mobile/image-manage-preview-2.jpg";
import smallPrevBottom2x from "./mobile/image-manage-preview-2@2x.jpg";
import medHero from "./tablet/image-manage-hero.jpg";
import medHero2x from "./tablet/image-manage-hero@2x.jpg";
import medPrevTop from "./tablet/image-manage-preview-1.jpg";
import medPrevTop2x from "./tablet/image-manage-preview-1@2x.jpg";
import medPrevBottom from "./tablet/image-manage-preview-2.jpg";
import medPrevBottom2x from "./tablet/image-manage-preview-2@2x.jpg";
import largeHero from "./desktop/image-manage-hero.jpg";
import largeHero2x from "./desktop/image-manage-hero@2x.jpg";
import largePrevTop from "./desktop/image-manage-preview-1.jpg";
import largePrevTop2x from "./desktop/image-manage-preview-1@2x.jpg";
import largePrevBottom from "./desktop/image-manage-preview-2.jpg";
import largePrevBottom2x from "./desktop/image-manage-preview-2@2x.jpg";

const image = {
  hero: {
    small: smallHero,
    small2x: smallHero2x,
    medium: medHero,
    medium2x: medHero2x,
    large: largeHero,
    large2x: largeHero2x,

    smallWidthInPx: 311,
    mediumWidthInPx: 689,
    largeWidthInPx: 1110,
  },

  previewTop: {
    small: smallPrevTop,
    small2x: smallPrevTop2x,
    medium: medPrevTop,
    medium2x: medPrevTop2x,
    large: largePrevTop,
    large2x: largePrevTop2x,

    smallWidthInPx: 311,
    mediumWidthInPx: 689,
    largeWidthInPx: 635,
  },

  previewBottom: {
    small: smallPrevBottom,
    small2x: smallPrevBottom2x,
    medium: medPrevBottom,
    medium2x: medPrevBottom2x,
    large: largePrevBottom,
    large2x: largePrevBottom2x,

    smallWidthInPx: 311,
    mediumWidthInPx: 689,
    largeWidthInPx: 635,
  },
};

export default image;
