import { css } from 'lit-element';

export default css`
  #main-container {
    display: var(--sophos-card-main-container-display, inline-flex);
    flex-direction: var(--sophos-card-main-container-flex-direction, column);
    width: var(--sophos-card-main-container-width, 300px);
    height: var(--sophos-card-main-container-height, 800ox);
    justify-content: var(--sophos-card-main-container-justify-content, center);
    align-items: var(--sophos-card-main-container-align-items, center);
    border-style: var(--sophos-card-main-container-border-style, solid);
    border-radius: Var(--sophos-card-main-container-border-radius, 20px);
  }

  #picture-container {
    overflow: var(--sophos-card-picture-container-overflow, hidden);
    width: var(--sophos-card-picture-container-width, 300px);
    height: var(--sophos-card-picture-container-height, 300px);
    background-color: var(--sophos-card-picture-container-background-color, none);
  }

  #picture {
    width: var(--sophos-card-picture-width, 300px);
    height: var(--sophos-card-picture-height, 300px);
    max-width: var(--sophos-card-picture-max-width, 300px);
    max-height: var(--sophos-card-picture-max-height, 300px);
    min-width: var(--sophos-card-picture-min-width, 300px);
    min-height: var(--sophos-card-picture-min-height, 300px);
    border-radius: var(--sophos-card-picture-border-radius, 50px);
  }

  #title {
    text-align: var(--sophos-card-title-text-align, justify);
    margin-block-start: var(--sophos-card-title-margin-block-start, 5px);
  }

  #subtitle {
    text-align: var(--sophos-card-subtitle-text-align, justify);
  }

  #description {
    text-align: var(--sophos-card-description-text-align, justify);
    margin: var(--sophos-card-description-margin, 10px);
  }
`;