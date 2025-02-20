/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        myfont1:[
          "Sigmar", "serif"
        ],
        GrechenFuemen:[
          "Grechen Fuemen", "serif"]
      },
      textColor:{
        pinker:[
          "#FF91A4"
        ],
        reder:[
          "#FC1012"
        ]
      },
      backgroundColor:{
        pinker:[
          "#FF91A4"
        ]
      },
    },
  },
  plugins: [],
}
