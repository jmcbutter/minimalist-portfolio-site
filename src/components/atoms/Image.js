import { Image as ChakraImage, Box } from "@chakra-ui/react";

import { useBreakpointValue } from "@chakra-ui/react";

export default function Image({ image, ...restProps }) {
  const { small, small2x, medium, medium2x, large, large2x } = image;
  const { smallWidthInPx, mediumWidthInPx, largeWidthInPx } = image;

  const widthW = {
    small: `${smallWidthInPx}w`,
    small2x: `${smallWidthInPx * 2}w`,
    medium: `${mediumWidthInPx}w`,
    medium2x: `${mediumWidthInPx * 2}w`,
    large: `${largeWidthInPx}w`,
    large2x: `${largeWidthInPx * 2}w`,
  };

  const widthPx = {
    small: `${smallWidthInPx}px`,
    small2x: `${smallWidthInPx * 2}px`,
    medium: `${mediumWidthInPx}px`,
    medium2x: `${mediumWidthInPx * 2}px`,
    large: `${largeWidthInPx}px`,
    large2x: `${largeWidthInPx * 2}px`,
  };

  const srcSets = useBreakpointValue({
    base: `${small} ${widthW.small}, ${small2x} ${widthW.small2x}`,
    md: `${medium} ${widthW.medium}, ${medium2x} ${widthW.medium2x}`,
    lg: `${large} ${widthW.large}, ${large2x} ${widthW.large2x}`,
  });

  const sizes = useBreakpointValue({
    base: `(max-width:${widthPx.small}) ${widthPx.small}, ${widthPx.small2x}`,
    md: `(max-width:${widthPx.medium2x}) ${widthPx.medium}, ${widthPx.medium2x}`,
    lg: `(max-width:${widthPx.large2x}) ${widthPx.large}, ${widthPx.large2x}`,
  });

  return (
    <Box {...restProps}>
      <picture>
        <source srcSet={srcSets} />
        <ChakraImage
          mx="auto"
          w="100%"
          h="100%"
          sizes={sizes}
          objectFit="cover"
          src={small}
        />
      </picture>
    </Box>
  );
}
