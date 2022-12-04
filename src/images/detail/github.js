import hero from "./desktop/image-github-hero.jpg";
import hero2x from "./desktop/image-github-hero@2x.jpg";
import prevTop from "./desktop/image-github-preview-1.jpg";
import prevTop2x from "./desktop/image-github-preview-1@2x.jpg";
import prevBottom from "./desktop/image-github-preview-2.jpg";
import prevBottom2x from "./desktop/image-github-preview-2@2x.jpg";

const image = {
  hero: {
    small: hero,
    small2x: hero2x,
    medium: hero,
    medium2x: hero2x,
    large: hero,
    large2x: hero2x,

    smallWidthInPx: 311,
    mediumWidthInPx: 689,
    largeWidthInPx: 1110,
  },

  previewTop: {
    small: prevTop,
    small2x: prevTop2x,
    medium: prevTop,
    medium2x: prevTop2x,
    large: prevTop,
    large2x: prevTop2x,

    smallWidthInPx: 311,
    mediumWidthInPx: 689,
    largeWidthInPx: 635,
  },

  previewBottom: {
    small: prevBottom,
    small2x: prevBottom2x,
    medium: prevBottom,
    medium2x: prevBottom2x,
    large: prevBottom,
    large2x: prevBottom2x,

    smallWidthInPx: 311,
    mediumWidthInPx: 689,
    largeWidthInPx: 635,
  },
};

export default image;
