# React Wowza Player Component

### Description
*Wowza Media Systems™* offers player software called [Wowza™ Player](https://www.wowza.com/products/player), a lightweight HTML5 player that plays Apple HLS streams or ultra low latency streams on any device—including mobile phones and desktop computers. Wowza Player supports the latest version of most modern web browsers such as Google Chrome, Firefox, Safari, and Microsoft Edge. It also supports Flash playback on older browsers that don't support HTML5. The player comes with an easy-to-use, web-based Player Builder for fast, simplified Wowza Player setup, customization, and configuration.

### Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install 'React Wowza Player Component'.
```bash
npm install react-wowza-player
```
### How To Use
First import this component where you want to use it.
```bash
import WowzaReactPlayer from 'react-wowza-player';
```

Then just renders it
``` 
<WowzaReactPlayer/> 
```
### Props

**Configuration properties** <br/> 
<br/>

|Property|Type|Description|
|--------|----|-----------|
|width|number|Specifies the element width, default value is 100%|
|height|number|Specifies the element height, default value is 0|
paddingBottom|number|Specifies the element padding-bottom, default value is 56.25%|
|paddingLeft|number| Specifies the element padding-left, default value is 0|
|paddingRight|number| Specifies the element padding-right, default value is 0|
|paddingTop|number|Specifies the element padding-top, default value is 0|
|license|string|**(Required)** Sets your Wowza Player license key (with dashes) to authorize player use.|
|sourceURL|string|**(Required)** Sets the full Apple HLS URL of your live or on-demand stream or the full WebSocket URL for your ultra low latency stream.|
|sources|array|(Required if using multiple **sourceURL** values) Sets an array of **sourceURL** values for fallback purposes. If Wowza Player is unable to connect to the first **sourceURL** value after three tries, it falls back to the second **sourceURL** value.<br/><br/>**Note:** You must set a source using either a single **sourceURL** or a **sources** array with multiple **sourceURLs**.|
|abrAutoSwitching|Boolean|Toggles between manual and automatic adaptive bitrate switching. The default value is **true**, which makes Wowza Player select the highest quality bitrate that works best with your viewers' connections.|
|abrStartingBitrate|string|Determines how the player dynamically selects a bitrate when the stream begins (**first, lowest,** or **highest**). The default value is **first**.|
|audioOnly|Boolean|Specifies whether to use the audio-only version of Wowza Player. Set to **true** to use the audio-only version.|
|autoPlay|Boolean|Specifies whether a source plays automatically. Depending on the browser policy and user settings,**mute** must be set to **true** for autoplay to work as expected. If a browser doesn't support autoplay, Wowza Player falls back to manual playback.|
|endPosterFrameURL|string|Specifies a URL for a static poster image to display in the player after the video plays. Use a JPG or PNG images that is close to the size of the player. Poster images can't be added to the audio-only player.|
|endTime|integer|Sets the time, in milliseconds, to end clip playback. A value of **-1** specifies no clip end time.|
|debugLevel|string|Specifies the error message type to display in the browser console. **OFF, ERROR, WARN, INFO, DEBUG**. The default value is **INFO**.|
|description|string|Sets the description that appears when the viewer clicks on the video **Title**. Not available in audio-only mode.|
|loop|Boolean|Specifies whether to loop a VOD video. Set to **true** to replay the video after it ends.|
|mute|Boolean|Specifies whether to mute the video. Set to **true** to start playback with muted audio.|
|posterFrameURL|string|Specifies a URL for a static poster image to display in the player before the video plays. Use a JPG or PNG image that is close to the size of the player. Poster images can't be added to the audio-only player.|
|startAtLivePoint|Boolean|Specifies whether to start playback at the live point. Set to **true**, the default, to start playback of a live nDVR stream at the live point. Set to **false** to start playback of a live nDVR stream from the beginning of the broadcast. Use this property for Wowza Streaming Engine live nDVR streams or live streams with recording enabled in Wowza Streaming Cloud.|
|startTime|integer|Sets the time, in milliseconds, to begin clip playback. Set to **0** to play for the original start of the clip.|
|title|string|Sets the title that displays in the top-left corner of the player Action bar on mouse hover.|
|uiBackgroundColor|string|Sets the RGB background color of the player using a hexidecimal color value with the format **0x000000**. Default value is **#000000** (black). This color is seen if the player applies letterboxing (spacing) to the video or if no poster images are selected.|
|uiPosterFrameFillMode|string|Specifies how to format poster images. The aspect ratio of the image is maintained in both settings.<br/><br/>Enter **fit** to resize the poster image so the larger side of the image matches the size of the player, ensuring the entire image fits within the player. Black bars may appear to fill extra space.<br/><br/> Enter **fill** to resize the poster image so the shorter side of the image matches the size of the player, ensuring the image fills the entire player.|
|uiShowBitrateSelector|Boolean|Includes the **Bitrate Selector** button in the player interface if set to the default, **true**. This allows the viewer to select the desired video bitrate. Set to **false** to hide the **Bitrate Selector** button.<br/><br/>Bitrate names are displayed based on the NAME values from your stream's SMIL file or calculated from the source media if you aren't using a SMIL file. By default, the player selects the highest quality bitrate that works best with the viewer's connection. This behavior is set with the **abrStartingBitrate** property. |
|uiShowDurationVsTimeRemaining|Boolean|Specifies where to display the elapsed time. Set to **true** to display the elapsed time of the video in the player on the left side of the Seek bar. Set to **false** to display the time remaining in the video on the left side of the Seek bar in the player interface.|
|uiShowFullscreen|Boolean|Includes the **Full Screen** icon in the player interface when set to the default, **true**. Set to **false** to hide the Full Screen icon.|
|uiShowPlaybackControls|Boolean|Includes the playback controls in the player interface when set to the default, **true**. Set to **false** to hide the **play** and **pause** buttons, the **LIVE** icon for live streams, and the elapsed time / total time indicator for VOD streams.|
|uiShowQuickRewind|Boolean|Includes the **Quick Rewind** button in the player interface when set to the default, **true**.  By default, clicking **Quick Rewind** rewinds video playback by 30 seconds. To set a custom value, use **uiQuickRewindSeconds**.|
|uiShowSeekBar|Boolean|Includes the seek bar in the player interface when set to the default, **true**. Set to **false** to hide the seek bar.| 
|uiShowVolumeControl|Boolean|Includes the volume controls in the player interface when set to the default, **true**. Set to **false** to hide the volume controls.|
|uiQuickRewindSeconds|integer|Sets the number of seconds that the player rewinds when a viewer clicks the **Quick Rewind** button. The default is **30**.|
|volume|integer|Sets the starting volume of the video, although the viewer may also adjust the volume in the embedded player. The default value is 75 percent of maximum volume. Values range from 0 to 100.|
|withCredentials|Boolean|Specifies whether Wowza Player is enabled to make cross-site Access-Control requests using credentials such as cookies. Set to **true** to enable this functionality.<br/><br/>This enables Wowza Player to play streams secured with Wowza Streaming Engine SecureToken, Wowza Streaming Cloud token authorization, or Akamai CDN token authentication.|

### Sample Code
**Note:** sourceURL & license should be specified by the user, below mentioned license and sourceURL are just sample format.
<br/><br/>
```bash
import React, { Component } from 'react';
import  WowzaReactPlayer from 'react-wowza-player';

class App extends Component {
  render() {
    return (
     <WowzaReactPlayer 
      width ='100%' 
      paddingBottom='45%' 
      paddingLeft='25px' 
      license="XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX" 
      title="Hello wowza its my video" 
      description="This is a test video"
      sourceURL="http://IP:1935/vod/sample.mp4/playlist.m3u8"
      volume= '75'
      autoPlay='true'
      mute= 'true'
      loop='false'
      audioOnly= 'false'
      uiShowQuickRewind='true'
      uiShowPlaybackControls='true'
      uiShowVolumeControl='true'/>
    );
  }
}


export default App;

```
If you are using **sources** *property* instead of **sourceURL** follow the below sample code.
```bash
import React, { Component } from 'react';
import  WowzaReactPlayer from 'react-wowza-player';

const urls=[
        {"sourceURL":"http://IP:1935/vod/doesnotexist.mp4/playlist.m3u8"},
        {"sourceURL":"http://IP:1935/vod/sample.mp4/playlist.m3u8"}
      ]

class App extends Component {
  render() {
    return (
     <WowzaReactPlayer 
      width ='100%' 
      paddingBottom='45%' 
      paddingLeft='25px' 
      license="XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX" 
      title="Hello wowza its my video" 
      description="This is a test video"
      sources={urls}
      volume= '75'
      autoPlay='true'
      mute= 'true'
      loop='false'
      audioOnly= 'false'
      uiShowQuickRewind='true'
      uiShowPlaybackControls='true'
      uiShowVolumeControl='true'/>
    );
  }
}


export default App;
```


 





















