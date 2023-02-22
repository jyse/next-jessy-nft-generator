// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// };

// module.exports = nextConfig;

//webpack4
// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
//       config.node = {
//         fs: "empty"
//       };
//     }

//     return config;
//   }
// };

// webpack5
module.exports = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false
      };
    }

    return config;
  }
};
