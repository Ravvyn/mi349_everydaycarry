
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("Footer", function(name, homeTitle) {
    return `<div class="footer">
      <p>${name}</p>
      <p><a href="/">${homeTitle}</a></p>
    </div>`
  });

};