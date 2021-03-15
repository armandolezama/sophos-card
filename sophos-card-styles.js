import { css } from 'lit-element';

export default css`
    :host {
    --sophos-card-host-card-width: 300px;
    --sophos-card-host-card-max-width: auto;
    --sophos-card-host-card-min-width: auto;
    --sophos-card-host-card-height: auto;
    --sophos-card-host-card-max-height: auto;
    --sophos-card-host-card-min-height: auto;
  }

  #main-container {
    display: var(--sophos-card-main-container-display, inline-flex);
    flex-direction: var(--sophos-card-main-container-flex-direction, column);
    width: var(--sophos-card-main-container-width, var(--sophos-card-host-card-width));
    max-width: var(--sophos-card-main-container-max-width, var(--sophos-card-host-card-max-width));
    min-width: var(--sophos-card-main-container-min-width, var(--sophos-card-host-card-min-width));
    height: var(--sophos-card-main-container-height, var(--sophos-card-host-card-height));
    max-height: var(--sophos-card-main-container-max-height, var(--sophos-card-host-card-max-height));
    min-height: var(--sophos-card-main-container-min-height, var(--sophos-card-host-card-min-height));
    justify-content: var(--sophos-card-main-container-justify-content, center);
    align-items: var(--sophos-card-main-container-align-items, center);
    border-style: var(--sophos-card-main-container-border-style, solid);
    border-radius: Var(--sophos-card-main-container-border-radius, 20px);
  }

  #picture-container {
    overflow: var(--sophos-card-picture-container-overflow, hidden);
    width: var(--sophos-card-picture-container-width, var(--sophos-card-host-card-width));
    max-width: var(--sophos-card-picture-container-max-width, var(--sophos-card-host-card-max-width));
    min-width: var(--sophos-card-picture-container-min-width, var(--sophos-card-host-card-min-width));
    height: var(--sophos-card-picture-container-height, var(--sophos-card-host-card-height));
    max-height: var(--sophos-card-picture-container-max-height, var(--sophos-card-host-card-max-height));
    min-height: var(--sophos-card-picture-container-min-height, var(--sophos-card-host-card-min-height));
    background-color: var(--sophos-card-picture-container-background-color, none);
  }

  #picture {
    width: var(--sophos-card-picture-width, var(--sophos-card-host-card-width));
    max-width: var(--sophos-card-picture-max-width, var(--sophos-card-host-card-max-width));
    min-width: var(--sophos-card-picture-min-width, var(--sophos-card-host-card-min-width));
    height: var(--sophos-card-picture-height, var(--sophos-card-host-card-height));
    max-height: var(--sophos-card-picture-max-height, var(--sophos-card-host-card-max-height));
    min-height: var(--sophos-card-picture-min-height, var(--sophos-card-host-card-min-height));
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