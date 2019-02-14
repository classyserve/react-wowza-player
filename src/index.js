import React from "react";

class WowzaReactPlayer extends React.Component {

  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    function loadScript(url, callback)
    {
        const script = document.createElement("script");
        script.type="text/javascript";
        script.src=url;
        script.onreadystatechange=callback;
        script.onload=callback; 
        script.async = false;
        document.body.appendChild(script);
    }

    const Wowza=()=> window.WowzaPlayer.create('playerElement',
		{
		    "license":this.props.license,
        "sourceURL":this.props.sourceURL,
        "sources":this.props.sources,
        "title":this.props.title,
        "description":this.props.description,
        "audioOnly":this.props.audioOnly,  
        "autoPlay":this.props.autoPlay,
        "endPosterFrameURL":this.props.endPosterFrameURL,
        "abrAutoSwitching":this.props.abrAutoSwitching,
        "abrStartingBitrate":this.props.abrStartingBitrate,
		    "volume":this.props.volume,
		    "mute":this.props.mute,
		    "loop":this.props.loop,
        "audioOnly":this.props.audioOnly,
        "debugLevel":this.props.debugLevel,
        "startAtLivePoint":this.props.startAtLivePoint,
        "posterFrameURL":this.props.posterFrameURL, 
        "startTime":this.props.startTime,
        "endTime":this.props.endTime,
        "uiBackgroundColor":this.props.uiBackgroundColor,
        "uiPosterFrameFillMode":this.props.uiPosterFrameFillMode,
        "uiShowBitrateSelector":this.props.uiShowBitrateSelector,
        "uiShowDurationVsTimeRemaining":this.props.uiShowDurationVsTimeRemaining,
        "uiShowFullscreen":this.props.uiShowFullscreen,
        "uiShowPlaybackControls":this.props.uiShowPlaybackControls,
        "uiShowQuickRewind":this.props.uiShowQuickRewind,
        "uiShowSeekBar":this.props.uiShowSeekBar,
        "uiShowVolumeControl":this.props.uiShowVolumeControl,
        "uiQuickRewindSeconds":this.props.uiQuickRewindSeconds,
        "withCredentials":this.props.withCredentials,
		}
  );
  
  loadScript('https://player.wowza.com/player/latest/wowzaplayer.min.js',Wowza)


  }

  componentWillUnmount() {
    loadScript('https://player.wowza.com/player/latest/wowzaplayer.min.js',Wowza)


  }

  render() {
    return (
      
            <div id="playerElement" style={{width:this.props.width || '100%',
             height:this.props.height || 0, 
             paddingBottom:this.props.paddingBottom || '54.25%',
             paddingLeft:this.props.paddingLeft || 0,
             paddingRight:this.props.paddingRight || 0,
             paddingTop:this.props.paddingTop || 0}}></div>
      

    )
  }
}

export default WowzaReactPlayer;