export default function YouTubeVideo({ videoId }) {
    return (
      <div style={{maxWidth: '480px',height: '280px', position: 'relative', paddingBottom: '20%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          style={{
            width: '100%',
            height: '280px',
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
}
  
  