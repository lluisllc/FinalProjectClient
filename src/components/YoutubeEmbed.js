import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        {/* <video width="853" height="480" controls>
            <source src={embedId} type="video/ogg" />
        </video> */}
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;