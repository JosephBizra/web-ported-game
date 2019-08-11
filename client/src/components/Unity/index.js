import React from "react";

function Unity(props) {
  return(
    <div>
        <div className="webgl-content">
        <div id="unityContainer" style="width: 960px; height: 600px"></div>
        <div class="footer">
            <div className="fullscreen" onclick="unityInstance.SetFullscreen(1)"></div>
            <div className="title">PresidentialRaces</div>
        </div>
        <link rel="shortcut icon" href="../MyGame/TemplateData/favicon.ico"></link>
        <link rel="stylesheet" href="../MyGame/TemplateData/style.css"></link>
        <script src="../MyGame/TemplateData/UnityProgress.js"></script>
        <script src="../MyGame/Build/UnityLoader.js"></script>

        </div>
    </div>
  );
}

export default Unity;