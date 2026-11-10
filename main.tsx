import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container, Controls, ErrorDialog, FullscreenButton, Hotkey, MuteButton, PlayButton, StatusAnnouncer, Time, TimeSlider, VolumeSlider, createPlayer } from '@videojs/react';
import { Video, videoFeatures } from '@videojs/react/video';
import './style.css';

const { Player } = createPlayer({ features: videoFeatures });
const DEMO_VIDEO = 'https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/highest.mp4';
const DEMO_POSTER = 'https://image.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM/thumbnail.webp?time=6';

function Glyph({ name }: { name: 'play' | 'pause' | 'volume' | 'mute' | 'fullscreen' | 'minimize' }) {
  const paths: Record<string, React.ReactNode> = {
    play: <path d="m9 6 11 6-11 6V6Z" fill="currentColor" stroke="none" />,
    pause: <><rect x="7" y="5" width="3.7" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="3.7" height="14" rx="1" fill="currentColor" stroke="none"/></>,
    volume: <><path d="M4 10v4h4l5 4V6L8 10H4Z"/><path d="M16 9a5 5 0 0 1 0 6M18.5 6.5a8.5 8.5 0 0 1 0 11"/></>,
    mute: <><path d="M4 10v4h4l5 4V6L8 10H4Z"/><path d="m17 9 5 6m0-6-5 6"/></>,
    fullscreen: <path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4"/>,
    minimize: <path d="M4 8h4V4m12 4h-4V4M4 16h4v4m12-4h-4v4"/>
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function AuraSkin({ children }: {children: React.ReactNode}) {
  return <Container className="aura-player" data-theme="aura" data-preset="video">
    {children}
    <div className="aura-vignette" aria-hidden="true" />
    <div className="aura-corner-top" aria-hidden="true"><span className="aura-mark">◈</span><span>AURA</span><span className="aura-separator">/</span><small>THE CINEMATIC PLAYER</small></div>
    <Controls.Root>
      <Controls.Backdrop className="aura-backdrop" />
      <Controls.Content className="aura-controls">
        <div className="aura-kicker" aria-hidden="true"><span>01</span><span className="aura-kicker-line"/> <span>AN EXPERIENCE IN MOTION</span></div>
        <div className="aura-title">The art of seeing.</div>
        <div className="aura-control-panel">
          <TimeSlider.Root className="aura-timeline" aria-label="Seek through video">
            <TimeSlider.Track className="aura-timeline-track">
              <TimeSlider.Buffer className="aura-timeline-buffer" />
              <TimeSlider.Fill className="aura-timeline-fill" />
            </TimeSlider.Track>
            <TimeSlider.Thumb className="aura-timeline-thumb" />
          </TimeSlider.Root>
          <Controls.Group className="aura-toolbar" aria-label="Video playback controls">
            <PlayButton className="aura-main-play aura-icon-button" render={(props, state) => <button {...props} type="button" aria-label={state.paused ? 'Play video' : 'Pause video'}><Glyph name={state.paused ? 'play':'pause'}/></button>} />
            <Time.Group className="aura-time"><Time.Value type="current"/><Time.Separator> / </Time.Separator><Time.Value type="duration"/></Time.Group>
            <span className="aura-toolbar-space" />
            <MuteButton className="aura-icon-button" render={(props, state) => <button {...props} type="button" aria-label={state.muted ? 'Unmute audio' : 'Mute audio'}><Glyph name={state.muted ? 'mute':'volume'}/></button>} />
            <VolumeSlider.Root className="aura-volume" aria-label="Volume">
              <VolumeSlider.Track className="aura-volume-track"><VolumeSlider.Fill className="aura-volume-fill"/></VolumeSlider.Track>
              <VolumeSlider.Thumb className="aura-volume-thumb" />
            </VolumeSlider.Root>
            <span className="aura-divider" aria-hidden="true" />
            <FullscreenButton className="aura-icon-button" render={(props, state) => <button {...props} type="button" aria-label={state.fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}><Glyph name={state.fullscreen ? 'minimize':'fullscreen'}/></button>} />
          </Controls.Group>
        </div>
      </Controls.Content>
    </Controls.Root>
    <Hotkey keys="Space" action="togglePaused" />
    <Hotkey keys="m" action="toggleMuted" />
    <Hotkey keys="f" action="toggleFullscreen" />
    <Hotkey keys="ArrowLeft" action="seekStep" value={-5} />
    <Hotkey keys="ArrowRight" action="seekStep" value={5} />
    <StatusAnnouncer />
    <ErrorDialog.Root><ErrorDialog.Popup className="aura-error"><ErrorDialog.Title/><ErrorDialog.Description/><ErrorDialog.Close/></ErrorDialog.Popup></ErrorDialog.Root>
  </Container>;
}

function App() {
  return <main className="page">
    <header className="site-header"><a className="wordmark" href="#top" aria-label="AURA home"><span className="logo-glyph">◈</span><span>AURA<span className="wordmark-period">.</span></span></a><span className="edition">A VIDEO.JS V10 SKIN CONCEPT</span></header>
    <section className="intro" id="top"><div className="eyebrow"><span className="eyebrow-line"/> REIMAGINING THE PLAYBACK EXPERIENCE</div><h1>Every frame deserves<br/><em>an atmosphere.</em></h1><p>Meet AURA. An editorial player where cinematic restraint and thoughtful interaction create space for the story.</p></section>
    <section className="showcase" aria-label="AURA video player demonstration"><div className="showcase-topline"><span>01 — THE EXPERIENCE</span><span>PRESS PLAY TO EXPLORE</span></div><div className="player-shell"><Player><AuraSkin><Video src={DEMO_VIDEO} poster={DEMO_POSTER} playsInline preload="metadata" crossOrigin="anonymous" /></AuraSkin></Player></div><div className="showcase-caption"><span>DESIGNED TO DISAPPEAR. MADE TO BE FELT.</span><span className="caption-right">◈  AURA / 001</span></div></section>
    <section className="features" aria-label="Design philosophy"><div><span className="feature-number">01 / FORM</span><h2>Less interface.<br/>More immersion.</h2><p>Restrained typography, subtle translucency and an elegant champagne accent make every interaction feel intentional.</p></div><div><span className="feature-number">02 / FUNCTION</span><h2>Beautifully<br/>usable.</h2><p>Real Video.js controls, keyboard access, a responsive timeline and large touch targets bring function into focus.</p></div><div><span className="feature-number">03 / INCLUSION</span><h2>Made for<br/>everyone.</h2><p>Visible focus indicators, readable controls, state feedback and reduced-motion preferences are essential to the design.</p></div></section>
    <footer><span>◈ &nbsp; AURA — THE CINEMATIC PLAYER</span><span>ORIGINAL SKIN CONCEPT BY NICOLETTE LANGE</span></footer>
  </main>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
