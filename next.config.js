/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextconfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = withContentlayer(nextconfig);
