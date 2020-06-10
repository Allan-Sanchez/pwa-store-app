/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    minWidth: {
         '0': '0',
         '1/4': '25%',
         '1/2': '50%',
         '3/5': '60%',
         '3/4': '75%',
         'full': '100%',
    },
  
    extend:{
      width: {
        '14':'50px'
      },
      borderRadius:{
        'rounded-0':'0',
        'rounded-1':'10px',
        
        'rounded-3':'30px',
        'rounded-4':'40px',
        'rounded-5':'50px',
        'rounded-6':'60px',
        'rounded-7':'70px',
        'rounded-8':'80px',
        'rounded-9':'90px',
        'rounded-10':'100px',
      },
      
    }
  },
  variants: {},
  plugins: []
}
