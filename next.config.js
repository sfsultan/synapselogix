/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextconfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: 'server',
};
module.exports = withContentlayer(nextconfig);
