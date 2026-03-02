const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({
        enabled: true,
      })
    : config => config;

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['page.js', 'api.js'],
  turbopack: {
    rules: {
      // Import `svg` files as React components
      '*.svg': {
        loaders: [{ loader: '@svgr/webpack', options: { svgo: false } }],
        as: '*.js',
      },
      // Import `.glsl` shaders as raw strings
      '*.glsl': {
        loaders: [{ loader: require.resolve('./scripts/raw-loader.js') }],
        as: '*.js',
      },
      // Import `.glb` and `.mp4` binary assets as static URLs
      '*.glb': {
        loaders: [{ loader: require.resolve('./scripts/static-url-loader.js') }],
        as: '*.js',
      },
      '*.mp4': {
        loaders: [{ loader: require.resolve('./scripts/static-url-loader.js') }],
        as: '*.js',
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/jobs/:slug',
        destination: '/careers/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]

  }
});
