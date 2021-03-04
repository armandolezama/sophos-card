import { css } from 'lit-element';

export default css`
  #main-container {
    display: var(--sophos-card-main-container-display, flex);
    flex-direction: var(--sophos-card-main-container-flex-direction, column);
    width: var(--sophos-card-main-container-width, 300px);
    height: var(--sophos-card-main-container-height, 800ox);
  }

  #picture-container {
    overflow: var(--sophos-card-picture-container-overflow, hidden)
  }
`;