// custom-image-loader.js
const { parse } = require("url");

module.exports = ({ src }: { src: string }) => {
  const { pathname, hostname, protocol } = parse(src, true);

  // Check if the protocol is 'https' and the hostname is any
  if (protocol === "https" && hostname === null) {
    // Add any customization logic here
    // You might want to add resizing parameters, quality settings, etc.
    return `${src}`;
  }

  // For other cases, return the original source
  return src;
};
