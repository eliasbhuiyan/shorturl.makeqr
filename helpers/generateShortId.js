const generateShortId = (characters) => {
    let shortId = '';
    
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortId += characters[randomIndex];
      }
    
      return shortId;
};    

module.exports = generateShortId;