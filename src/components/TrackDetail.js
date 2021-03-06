import React, { Component } from 'react';
import styled, { css } from "react-emotion";
import mq from "../utils/mq";
import typography, { rhythm } from "../utils/typography";
import { CloseBtn } from './Button';
import MediaQuery from 'react-responsive';
//import LoadingIcon from './LoadingIcon';

/*  
  The `TrackDetail` component contains the following sub-components:
  TrackDetailWrapper
    |_ TrackMedia
    |_ TrackContent
        |_ Quote
        |_ HeadText
        |_ BodyText
        |_ Meta
    |_ MediaAction    = Track external link (all tracks in mobile, track with no embed in tablet up)
*/

/** Common variables */

const boxHeight = 12; // 12 * 1.5rem
const contentPadding = 4/3; // 2rem

/** Sub-components */

const TrackDetailWrapper = styled('article')`
  background: ${props => props.theme.primary.color};
  color: ${props => props.theme.secondary.color};
  margin-bottom: ${rhythm(1.5)};
  height: auto;
  overflow-y: auto;
  position: relative;
  box-shadow: .75rem .75rem #313886;

  //////////////
  // MQ
  //////////////
  @media only screen and (max-width: 479px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 8vh;
    margin-bottom: 8vh;
    margin-left: 1rem;
    margin-right: 2rem;
    z-index: 9;
  }
  ${mq.medium(css`
    height: ${rhythm(boxHeight)};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    &>* {
      position: relative;
      flex-grow: 1;
      width: 50%;
      max-width: 50%;
    }
  `)};
  ${mq.large(css`
    height: ${rhythm(boxHeight)};
  `)};
`
const TrackMedia = styled('div')`
  padding-left: ${rhythm(0.5)};
  text-align: center;
  &,
  &>* {
    height: calc(${rhythm(boxHeight)} - ${rhythm(0.5)});
    position: sticky !important;
    top: ${rhythm(0.5)};
  }
  iframe {
    border: 0;
    width: 100%;
    margin-bottom: -.5rem; /* gap bugfix */
    z-index: 1; /* over loading icon */
    &.bandcamp {
      width: calc(${rhythm(boxHeight)} - ${rhythm(0.5)});
    }
  }
  .track-media__action-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .media-action__text {
    transform: rotate(-90deg);
    transform-origin: top left;
    left: -2rem;
    margin-bottom: -2rem;
  }
`
const TrackContent = styled('div')`
  display: flex;
  flex-flow: column;
  padding-top: ${rhythm(2)};
  padding-bottom: ${rhythm(1)};
  .pattern-box.decorative {
    position: absolute;
    top: 0;
    width: 100%;
    height: ${rhythm(5)};
  }
  .track-detail__media-action { /* xs only */
    margin-top: ${rhythm(1)};
    margin-bottom: ${rhythm(1.5)};
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .media-action__icon {
      width: ${rhythm(2.5)};
      height: ${rhythm(2.5)};
      line-height: ${rhythm(2.5)};
      font-size: ${rhythm(1)};
    }
    .media-action__text {
      transform: rotate(90deg);
      left: -.75rem;
      bottom: .75rem;
      margin-right: -1.5rem;
    }
  }

  //////////////
  // MQ
  //////////////

  ${mq.medium(css`
    padding-top: ${rhythm(5)};
    padding-bottom: 0;
    .pattern-box.decorative {
      height: ${rhythm(6)};
    }
  `)};
`
const Quote = styled('blockquote')`
  position: relative;
  white-space: pre-line;
  padding-right: ${rhythm(contentPadding)};
  padding-left: calc(${rhythm(contentPadding / 2)} - ${rhythm(0.25)});
  margin-left: 0; // reset
  margin-right: 0; // reset
  margin-bottom: ${rhythm(1.5)};
  &>* {
    display: inline;
    font-weight: 700;
    box-decoration-break: clone;
    line-height: 1.33;
    padding: 0 ${rhythm(0.25)};
    color: ${props => props.theme.secondary.color};
    background: ${props => props.theme.primary.color};
    font-size: ${typography.toJSON().h5.fontSize};
  }

  //////////////
  // MQ
  //////////////

  ${mq.medium(css`
    margin-top: ${rhythm(-1.5)};
  `)};
  ${mq.large(css`
    padding-right: ${rhythm(contentPadding)};
    padding-left: calc(${rhythm(contentPadding)} - ${rhythm(0.25)});
    &>* {
      //font-size: ${typography.toJSON().h4.fontSize};
    }
  `)};
`
const HeadText = styled('header')`
  margin-bottom: ${rhythm(1)};
  padding-left: ${rhythm(contentPadding / 2)};
  padding-right: ${rhythm(contentPadding / 2)};
  * {
    color: ${props => props.theme.secondary.color};
  }
  h2 {
    margin-bottom: 0;
  }
`
const BodyText = styled('div')`
  position: relative;
  flex-grow: 1;
  font-size: ${typography.toJSON().h6.fontSize};
  margin-bottom: ${rhythm(1)};
  padding-left: ${rhythm(contentPadding / 2)};
  padding-right: ${rhythm(contentPadding / 2)};
  p {
    margin-bottom: ${rhythm(0.25)};
    background: ${props => props.theme.primary.color};
    &:first-child {
      &:before {
        content: "💭";
        margin-right: .3em;
      }
    }
  }

  //////////////
  // MQ
  //////////////

  @media only screen and (max-width: 767px) { }
  ${mq.medium(css`
    p {
      padding: .5rem;
      margin: -0.5rem;
      margin-bottom: ${rhythm(1/3)};
    }
  `)};
  ${mq.large(css`
    padding-left: ${rhythm(contentPadding)};
    padding-right: ${rhythm(contentPadding)};
  `)};
  ${mq.xl(css`
    padding-right: 25%;
    &.has-cols {
      padding-right: ${rhythm(contentPadding)};
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      margin-bottom: ${rhythm(2)};
      column-count: 2;
      column-gap: ${rhythm(1)};
      p {
        margin: 0;
      }
    }
  `)};
`
const Meta = styled('aside')`
  font-size: ${typography.toJSON().h6.fontSize};
  .track-detail__meta-item {
    span {
      background: ${props => props.theme.secondary.color};
      font-weight: 700;
      padding: 0 ${rhythm(0.25)} 0 ${rhythm(contentPadding / 2)};
      box-decoration-break: clone;
      &, a {
        color: ${props => props.theme.primary.color};
      }
      a:hover {
        box-shadow: 0 -0.25rem 0 #fff inset;
      }
    }
  }
  .tags {
    margin: initial;
    display: inline;
    &__tag {
      display: inline;
      &:not(:last-child) {
        &:after {
          content: ", ";
          margin-right: .25ch;
        }
      }
    }
  }

  //////////////
  // MQ
  //////////////

  @media only screen and (max-width: 767px) { }
  ${mq.medium(css`
    width: 100%;
    margin-bottom: ${rhythm(1)};
  `)}
  ${mq.large(css`
    //width: calc(100% + ${rhythm(contentPadding)});
    //margin-left: ${rhythm(contentPadding * -1)};
    font-size: 1rem;
    .track-detail__meta-item {
      span {
        padding: 0 ${rhythm(0.25)} 0 ${rhythm(contentPadding)};
      }
    }
  `)};
`
const MediaAction = styled('a')`
  .media-action__icon,
  .media-action__text {
    color: ${props => props.theme.secondary.color};
  }
  .media-action__icon {
    width: ${rhythm(4)};
    height: ${rhythm(4)};
    line-height: ${rhythm(4)};
    font-size: 3rem;
    text-align: center;
  }
  .media-action__text {
    font-size: ${typography.toJSON().h4.fontSize};
    font-weight: 700;
    position: relative;
  }
  &:hover .media-action__icon {
    color: ${props => props.theme.primary.color};
    background: ${props => props.theme.secondary.color};
  }
`

/** Imported components */

const StyledCloseBtn = styled(CloseBtn)`
  position: absolute;
  top: 0;
  right: 0;
  left: auto;
  color: ${props => props.theme.secondary.color};
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  line-height: ${rhythm(2)};
  font-size: ${rhythm(1.5)};

  //////////////
  // MQ
  //////////////
  ${mq.medium(css`
    z-index: 1; // under Disc illustration
  `)};
  ${mq.large(css`
    font-size: ${rhythm(2)};
  `)};
`

/** Exported component */

class TrackDetail extends Component {
  constructor(props) {
    super(props);
    this.getEmbedUrl = this.getEmbedUrl.bind(this);
    this.getEmbedClassName = this.getEmbedClassName.bind(this);
  }
  getEmbedUrl(url) {
    let embedUrl = false;

    // 1. Identify source site based on URL, and get ID from URL    

    const youtubeRegex = /youtube\.com\/watch\?v=(.*)/;
    const spotifyRegex = /spotify\.com\/track\/(.*)/;
    
    /*  
    // NOTE: Soundcloud & Bandcamp URLs do not contain track ID, so
    // embed URL has to be pasted in `songUrl` field. If this field 
    // does not contain embed URL, treat as regular link (ie. return false).

    // Embed URL examples:
    // https://bandcamp.com/EmbeddedPlayer/size=large/album=2526125338/track=3698007299/
    // https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/416439411&color=%23ff5500&visual=true
    */
    const bandcampRegex = /bandcamp\.com\/EmbeddedPlayer\/(.*)/;
    const soundcloudRegex = /w\.soundcloud\.com\/player\/(.*)/;

    // 2. Create embed URL based on ID and source

    if (url.match(youtubeRegex)) {
      const youtubeSongId = url.match(youtubeRegex)[1];
      embedUrl = 'https://www.youtube.com/embed/' + youtubeSongId;
    } 
    else if (url.match(spotifyRegex)) {
      const spotifySongId = url.match(spotifyRegex)[1];
      embedUrl = 'https://open.spotify.com/embed/track/' + spotifySongId;
    } 
    else if (url.match(bandcampRegex) || url.match(soundcloudRegex)) {
      embedUrl = url;
    }

    // 3. Return embed URL to put in iframe

    if (embedUrl) {
      return embedUrl
    }
  }
  getEmbedClassName(url) {
    let embedClass = false;
    const bandcampRegex = /bandcamp\.com\/EmbeddedPlayer\/(.*)/;
    if (url.match(bandcampRegex)) {
      embedClass = 'bandcamp';
      return embedClass;
    }
  }
  render() {
    let track = {}
    track = this.props.data;
    return (
      <TrackDetailWrapper className="track-detail" aria-labelledby={track.frontmatter.title.split(' ').join('_')}>
        <MediaQuery query="(min-device-width: 768px)">
          <TrackMedia>
            {track.frontmatter.songUrl && this.getEmbedUrl(track.frontmatter.songUrl) ? (
              <React.Fragment>
                <iframe src={this.getEmbedUrl(track.frontmatter.songUrl)} className={this.getEmbedClassName(track.frontmatter.songUrl)} frameBorder="0" allow="encrypted-media" allowFullScreen allowtransparency="true" title={track.frontmatter.title + ' by ' + track.frontmatter.artist}/>
                {/* <LoadingIcon/> */}
              </React.Fragment>
              ) : (
                track.frontmatter.songUrl ? (
                  <div className="track-media__action-container">
                    <MediaAction href={track.frontmatter.songUrl} 
                      target="_blank" 
                      title={'Listen to ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                    >
                      <div className="media-action__icon pattern-box">▶︎</div>
                      <div className="media-action__text">open</div>
                    </MediaAction>
                  </div>
                ) : (
                  <div className="track-media__action-container">
                    <MediaAction href={'https://www.youtube.com/results?search_query=' + track.frontmatter.artist.split(' ').join('+') + '+' + track.frontmatter.title.split(' ').join('+')} 
                      target="_blank"
                      title={'Search for ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                    >
                      <div className="media-action__icon pattern-box">⦿</div>
                      <div className="media-action__text">search</div>
                    </MediaAction>
                  </div>
                )
              )
            }
          </TrackMedia>
        </MediaQuery>
        <TrackContent>
          <div className="pattern-box decorative" aria-hidden="true" />
          <h2 className="sr-only" id={track.frontmatter.title.split(' ').join('_')}>{track.frontmatter.title}</h2>
          <StyledCloseBtn to="/" aria-label="Close">&#x2715;</StyledCloseBtn>
          {track.frontmatter.quote && <Quote><span>{track.frontmatter.quote}</span></Quote>}
          <MediaQuery query="(max-device-width: 767px)">
            <HeadText>
              <h2>{track.frontmatter.title}</h2>
              <h4>{track.frontmatter.artist}</h4>
            </HeadText>
            {track.frontmatter.songUrl ? (
              <MediaAction href={track.frontmatter.songUrl} 
                target="_blank" 
                title={'Listen to ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                className="track-detail__media-action"
              >
                <div className="media-action__icon pattern-box">▶︎</div>
                <div className="media-action__text">open</div>
              </MediaAction>
            ) : (
              <MediaAction href={'https://www.youtube.com/results?search_query=' + track.frontmatter.artist.split(' ').join('+') + '+' + track.frontmatter.title.split(' ').join('+')} 
                target="_blank"
                title={'Search for ' + track.frontmatter.title + ' by ' + track.frontmatter.artist}
                className="track-detail__media-action"
              >
                <div className="media-action__icon pattern-box">⦿</div>
                <div className="media-action__text">search</div>
              </MediaAction>
            )}
          </MediaQuery>
          {track.html ?
            <BodyText 
              className={((track.html.length > 420) && ' has-cols ') + ' invert-body-text '}
              dangerouslySetInnerHTML={{__html: track.html}}
            /> :
            <BodyText aria-hidden="true" />
          }
          <Meta>
            <h5 className="sr-only">Related to this track</h5>
            <div className="track-detail__meta-item">
              <span>
                <a href={'https://www.discogs.com/search/?q=' + track.frontmatter.artist.split(' ').join('+')} target="_blank">
                  more by {track.frontmatter.artist}
                </a>
                {/* <Link to="/under-construction" rel="tag">more by {track.frontmatter.artist}</Link> */}
              </span>
            </div>
            {track.frontmatter.tag && (
              <div className="track-detail__meta-item">
                <span>
                  {/* more in&nbsp; */}
                  tags:&nbsp;
                  <ul className="tags">
                    {track.frontmatter.tag.map((tag) => (
                      <li key={tag} className="tags__tag">
                        <em>{tag}</em>
                        {/* <Link key={tag} to="/under-construction" rel="tag"> <em>{tag}</em> </Link> */}
                      </li>
                    ))}
                  </ul>
                </span>
              </div> 
            )}
          </Meta>
        </TrackContent>
      </TrackDetailWrapper>
    );
  }
}

export default TrackDetail;