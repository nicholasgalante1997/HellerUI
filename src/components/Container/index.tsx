/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Properties } from 'csstype';
import React from 'react';
import type { ContainerProps } from './types';
import { GridProvider, useGridContext, defaultContext } from './GridContext';

const Container = (props: ContainerProps) => {
  const {
    children,
    radius = 'normal',
    padding = '4px',
    margin = '0px',
    background = null,
    image = null,
    gradient = null,
    asGridChild = false,
    asGridParent = false,
    colSpan = 12,
    height,
    width,
    opacity,
    customStyles = {},
    ariaLabel = 'Content Container',
    id = 'heller-container-id',
    className = 'heller-container-cl',
    onClick = null,
    onMouseEnter = null,
    onMouseLeave = null
  } = props;

  const backgroundStyles: Pick<
    Properties,
    | 'backgroundImage'
    | 'background'
    | 'backgroundColor'
    | 'objectFit'
    | 'objectPosition'
    | 'backgroundRepeat'
    | 'backgroundBlendMode'
    | 'backgroundSize'
  > = background
    ? {
        background
      }
    : {};

  if (image) {
    backgroundStyles.backgroundImage = `url(${image})`;
    backgroundStyles.backgroundRepeat = 'no-repeat';
    backgroundStyles.objectFit = 'cover';
    backgroundStyles.backgroundSize = 'cover';
  }

  if (gradient) {
    if (gradient.covenant)
      backgroundStyles.background =
        gradient.covenant.overrideAndDangerouslySetGradient;
    else
      backgroundStyles.background = `linear-gradient(${
        gradient.flow ?? 'to right'
      }, ${gradient?.from}, ${gradient?.to})`;
  }

  const nativeStyles: Properties = {
    // eslint-disable-next-line no-nested-ternary
    borderRadius:
      radius === 'rounded' ? '6px' : radius === 'normal' ? '2px' : '0px',
    overflow: 'hidden',
    padding,
    margin,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: asGridParent ? 'row' : 'column',
    ...backgroundStyles
  };

  if (opacity) {
    if (opacity > 100 || opacity < 0)
      console.warn(
        '<Container> Issue Present: Opacity must be between 0 and 100'
      );
    else nativeStyles.opacity = `${opacity}%`;
  }

  if (height)
    nativeStyles.height = typeof height === 'string' ? height : `${height}px`;

  if (width)
    nativeStyles.width = typeof width === 'string' ? width : `${width}px`;

  // container as grid
  if (asGridParent) {
    nativeStyles.width = '100%';
    nativeStyles.margin = '-4px 0px 0px -4px';
    nativeStyles.boxSizing = 'border-box';
    return (
      <GridProvider value={defaultContext}>
        <div
          style={{ ...nativeStyles, ...customStyles }}
          className={className}
          id={id}
          data-testid="grid container"
          aria-label={ariaLabel ?? undefined}
          onClick={onClick ?? undefined}
          onMouseEnter={onMouseEnter ?? undefined}
          onMouseLeave={onMouseLeave ?? undefined}
        >
          {children}
        </div>
      </GridProvider>
    );
  }

  if (asGridChild) {
    const { rows } = useGridContext();
    if (rows < 12 && colSpan > 6) {
      console.warn(
        '<Container/> Grid Child Issue: Grid Column Child has greater colspan than parent grid container. aborting grid schema.'
      );
    } else {
      nativeStyles.width = `${Math.floor((colSpan / rows) * 100).toString()}%`;
      nativeStyles.margin = '4px 0px 0px 4px';
      nativeStyles.boxSizing = 'border-box';
    }
  }

  return (
    <div
      style={{ ...nativeStyles, ...customStyles }}
      className={className}
      id={id}
      data-testid="container"
      aria-label={ariaLabel ?? undefined}
      onClick={onClick ?? undefined}
      onMouseEnter={onMouseEnter ?? undefined}
      onMouseLeave={onMouseLeave ?? undefined}
    >
      {children}
    </div>
  );
};

export default Container;
