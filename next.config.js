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
  // Webpack-specific configuration: mirror the Turbopack rules for projects
  // that run using the webpack builder. We keep the existing `turbopack`
  // entry above so Turbopack stays configured, but also provide a `webpack`
  // handler so the same asset imports work under webpack-based builds.
  webpack: (config, { dev, isServer }) => {
    // SVGs -> React components via @svgr/webpack (match Turbopack behavior)
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|mjs|cjs|jsx|ts|tsx)$/,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: { svgo: false },
        },
      ],
    });

    // .glsl shaders as raw strings (custom loader used by Turbopack)
    config.module.rules.push({
      test: /\.glsl$/i,
      use: [{ loader: require.resolve('./scripts/raw-loader.js') }],
    });

    // .glb and .mp4 binary assets handled by the project's static-url loader
    config.module.rules.push({
      test: /\.(glb|mp4)$/i,
      use: [{ loader: require.resolve('./scripts/static-url-loader.js') }],
    });

    // Fonts (woff, woff2, ttf, eot, otf) - use webpack 5 asset modules so
    // binary font imports work the same as with Turbopack.
    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name].[hash][ext]'
      }
    });

    return config;
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
