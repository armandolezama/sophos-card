import { css } from 'lit';

export default css`
    :host {
    --sophos-card-host-width: 300px;
    --sophos-card-host-max-width: auto;
    --sophos-card-host-min-width: auto;
    --sophos-card-host-height: auto;
    --sophos-card-host-max-height: auto;
    --sophos-card-host-min-height: auto;
  }

  #main-container {
    cursor: var(--sophos-card-main-container-cursor, default);
    background-color: var(--sophos-card-main-container-background-color, #ffffff);
    display: var(--sophos-card-main-container-display, inline-flex);
    flex-direction: var(--sophos-card-main-container-flex-direction, column);
    width: var(--sophos-card-main-container-width, var(--sophos-card-host-width));
    max-width: var(--sophos-card-main-container-max-width, var(--sophos-card-host-max-width));
    min-width: var(--sophos-card-main-container-min-width, var(--sophos-card-host-min-width));
    height: var(--sophos-card-main-container-height, var(--sophos-card-host-height));
    max-height: var(--sophos-card-main-container-max-height, var(--sophos-card-host-max-height));
    min-height: var(--sophos-card-main-container-min-height, var(--sophos-card-host-min-height));
    justify-content: var(--sophos-card-main-container-justify-content, center);
    align-items: var(--sophos-card-main-container-align-items, center);
    border-style: var(--sophos-card-main-container-border-style, solid);
    border-radius: Var(--sophos-card-main-container-border-radius, 20px);
  }

  #picture-container {
    cursor: var(--sophos-card-picture-container-cursor, default);
    background-color: var(--sophos-card-picture-container-background-color, none);
    overflow: var(--sophos-card-picture-container-overflow, hidden);
    width: var(--sophos-card-picture-container-width, var(--sophos-card-host-width));
    max-width: var(--sophos-card-picture-container-max-width, var(--sophos-card-host-max-width));
    min-width: var(--sophos-card-picture-container-min-width, var(--sophos-card-host-min-width));
    height: var(--sophos-card-picture-container-height, var(--sophos-card-host-height));
    max-height: var(--sophos-card-picture-container-max-height, var(--sophos-card-host-max-height));
    min-height: var(--sophos-card-picture-container-min-height, var(--sophos-card-host-min-height));
    background-color: var(--sophos-card-picture-container-background-color, none);
  }

  #title-container {
    background-color: var(--sophos-card-title-container-background-color, none);
    cursor: var(--sophos-card-title-container-cursor, default);
  }

  #subtitle-container {
    background-color: var(--sophos-card-subtitle-container-background-color, none);
    cursor: var(--sophos-card-subtitle-container-cursor, default);
  }

  #description-container{
    background-color: var(--sophos-card-description-container-background-color, none);
    cursor: var(--sophos-card-description-container-cursor, default);
  }

  #picture {
    width: var(--sophos-card-picture-width, var(--sophos-card-host-width));
    max-width: var(--sophos-card-picture-max-width, var(--sophos-card-host-max-width));
    min-width: var(--sophos-card-picture-min-width, var(--sophos-card-host-min-width));
    height: var(--sophos-card-picture-height, var(--sophos-card-host-height));
    max-height: var(--sophos-card-picture-max-height, var(--sophos-card-host-max-height));
    min-height: var(--sophos-card-picture-min-height, var(--sophos-card-host-min-height));
    border-radius: var(--sophos-card-picture-border-radius, 50px);
  }

  #title {
    color: var(--sophos-card-title-color, #000000);
    text-align: var(--sophos-card-title-text-align, justify);
    margin-block-start: var(--sophos-card-title-margin-block-start, 5px);
  }

  #subtitle {
    color: var(--sophos-card-subtitle-color, #000000);
    text-align: var(--sophos-card-subtitle-text-align, justify);
  }

  #description {
    color: var(--sophos-card-description-color, #000000);
    text-align: var(--sophos-card-description-text-align, justify);
    margin: var(--sophos-card-description-margin, 10px);
  }
`;