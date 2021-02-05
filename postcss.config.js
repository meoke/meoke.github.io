module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      [
        "postcss-preset-env",
        {
          // Options
        },
      ],
    ]
  }