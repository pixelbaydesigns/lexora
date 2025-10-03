const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flagcdn.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/**',
          },
      ],
    },
    experimental: {
      allowedDevOrigins: [
        'https://3000-idx-lexora-1746331604745.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev',
      ],
    },
  };
  
  export default nextConfig;
  