import React from 'react';

const VideoDetail = ({video}) => {
	
	if(!video){
		return <div id="loading">Nenhum resultado para este viídeo </div>;
	}

	const videoId = video.id.videoId;
	
	const url = 'https://www.youtube.com/embed/'+videoId;
	console.log(url);
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div><span id="videoTitle">{video.snippet.title}</span></div>
			</div>
			<div className="details">
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;