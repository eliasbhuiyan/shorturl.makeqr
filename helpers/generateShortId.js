const generateShortId = () => {
  const patternCharecter = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"
    let shortId = '';
    
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * patternCharecter.length);
        shortId += patternCharecter[randomIndex];
      }
    
      return shortId;
};    

module.exports = generateShortId;