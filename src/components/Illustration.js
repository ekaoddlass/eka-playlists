import React, { Component } from 'react';
import styled, { css, keyframes } from "react-emotion";
import mq from "../utils/mq";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`
const Disc = styled('svg')`
  color: ${props => props.theme.primary.color};
  transition: all .2s ease-in-out;
  position: absolute;
  width: calc(50% - 2vw);
  height: 50vw;
  right: 0;
  top: -1px;
  margin-right: -27%;
  path {
    fill: currentColor !important;
  }
  circle {
    fill: ${props => props.theme.secondary.color};
    opacity: 0;
  }
  &.is-animated {
    top: -1rem;
    animation: ${spin} 2s .5s infinite linear;
  }
  /**
   *  MQ 
   */
  @media only screen and (max-width: 479px) {
    transform: rotate(0deg);
  }
  ${mq.small(css`
    width: calc(33% - 3vw);
    height: 33vw;
    margin-top: calc(33vw / -2);
    margin-right: 0;
  `)};
  ${mq.medium(css`
  `)};
  ${mq.large(css`
    position: fixed;
    .is-single & {
      z-index: 2;
      circle {
        opacity: 1;
      }
    }
  `)};
  ${mq.xl(css`
    width: calc(25% - 2vw);
    height: 25vw;
    margin-top: calc(25vw / -2);
  `)};
  @media only screen and (min-width: 1440px) {
    position: absolute;
    width: 22.5rem;
    height: 22.5rem;
    margin-top: -11.25rem;
  }
`

export default class Illustration extends Component {
  render() {
    return (
      <Disc className={'disc-illustration ' + (this.props.animate ? ' is-animated ' : '')}
        transform="rotate(180)" enable-background="new 0 0 32.009 32.009" viewBox="0 0 32.009 32.009" xmlns="http://www.w3.org/2000/svg"
      >
        <circle
           cx="16" cy="16.5" r="16"
        />
        <g>
          <path d="m21.951 1.151c-8.202-3.284-17.515.702-20.8 8.905-3.286 8.204.702 17.518 8.905 20.802 8.203 3.285 17.516-.702 20.801-8.905 3.286-8.204-.703-17.516-8.906-20.802zm-11.151 27.851c-7.166-2.87-10.662-11.034-7.793-18.201 2.87-7.166 11.035-10.663 18.202-7.792 7.166 2.869 10.662 11.034 7.793 18.2-2.871 7.167-11.035 10.662-18.202 7.793z"
          />
          <path d="m18.234 10.436c-3.076-1.232-6.568.264-7.8 3.339-1.232 3.076.264 6.568 3.339 7.8 3.076 1.232 6.568-.263 7.8-3.339s-.262-6.569-3.339-7.8zm-3.716 9.282c-2.048-.819-3.046-3.153-2.227-5.2.82-2.047 3.152-3.046 5.199-2.227 2.049.82 3.047 3.154 2.229 5.201-.821 2.047-3.154 3.047-5.201 2.226z"
          />
          <path className="line1" fillOpacity="0.25" d="m23.432 18.979c.102-.256-.023-.547-.279-.649-.256-.104-.547.021-.65.278v-.001c-.719 1.796-2.098 3.129-3.744 3.834-.252.108-.371.402-.262.655.109.255.402.372.656.264.01-.004.014-.012.021-.015 1.873-.81 3.439-2.327 4.256-4.366z"
          />
          <path className="line3" fillOpacity="0.75" d="m26.865 19.815c-.256-.103-.547.022-.65.278-1.129 2.82-3.295 4.915-5.883 6.023-.252.108-.371.402-.262.656.109.255.402.371.656.263.012-.006.021-.017.033-.022 2.809-1.213 5.16-3.49 6.385-6.548.102-.256-.023-.547-.279-.65z"
          />
          <path className="line2" fillOpacity="0.5" d="m25.008 19.072c-.256-.103-.547.021-.65.278-.922 2.308-2.693 4.021-4.812 4.928h.002c-.254.109-.373.403-.264.657s.402.371.656.263c.01-.005.016-.014.027-.02 2.34-1.011 4.299-2.907 5.32-5.456.102-.256-.023-.547-.279-.65z"
          />
          {/* <path className="line1" fillOpacity="0.25" d="m13.513 8.913c-.109-.255-.403-.371-.657-.262-.009.003-.014.011-.021.014-1.873.81-3.44 2.328-4.256 4.366h-.001c-.103.257.022.547.278.65.257.103.548-.022.65-.278h.001c.718-1.794 2.097-3.128 3.743-3.832.254-.11.372-.403.263-.658z"
          />
          <path className="line3" fillOpacity="0.75" d="m11.938 5.236c-.109-.254-.403-.371-.657-.263-.012.005-.021.016-.031.021-2.81 1.214-5.16 3.49-6.385 6.548-.104.258.021.549.278.651.256.103.547-.021.65-.278 1.13-2.819 3.295-4.914 5.883-6.022.253-.11.371-.403.262-.657z"
          />
          <path className="line2" fillOpacity="0.5" d="m12.463 7.73c.253-.108.372-.401.263-.656-.109-.253-.403-.371-.657-.262-.01.004-.016.014-.026.018-2.341 1.012-4.3 2.91-5.32 5.458-.104.257.022.547.277.651.256.102.547-.021.65-.278.923-2.308 2.695-4.022 4.812-4.928v-.003z"
          /> */}
        </g>
      </Disc>
    );
  }
} 
{/* <Disc role="presentation"
  version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 235.592 235.592" id="record_circular"
>
  <g><path d="M117.795,0.002C52.843,0.002,0,52.844,0,117.795C0,182.747,52.843,235.59,117.795,235.59 c64.953,0,117.797-52.843,117.797-117.795C235.592,52.844,182.748,0.002,117.795,0.002z M117.795,220.59 C61.113,220.59,15,174.477,15,117.795C15,61.114,61.113,15.002,117.795,15.002c56.683,0,102.797,46.112,102.797,102.793 C220.592,174.477,174.477,220.59,117.795,220.59z"></path> <path d="M117.795,64.04c-29.641,0-53.756,24.115-53.756,53.756s24.115,53.756,53.756,53.756c29.642,0,53.757-24.115,53.757-53.756 S147.436,64.04,117.795,64.04z M117.795,156.552c-21.37,0-38.756-17.386-38.756-38.756S96.425,79.04,117.795,79.04 s38.757,17.386,38.757,38.756S139.165,156.552,117.795,156.552z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
</Disc> */}