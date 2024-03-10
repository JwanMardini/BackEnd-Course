import crypto from 'node:crypto'

export default (req, res, next) => {
    const aKey = req.query.API_KEY 
      || req.header('Authorization')
      || req.body.authorization
      || null

    if(!verifyKey(aKey)){
        return res.status(403).json({
            type: 'forbidden',
            message: 'You have not supplied a valid API key!'
          })
        }
    
    next() 
}

export const theApiKeys = [
    {
      description: 'Master key with unlimited usage',
      key: crypto.createHash('md5').update('moped').digest('hex'),
      rate: null,
      usage: 0
    },
    {
      description: 'Trial key with limited usage',
      key: crypto.createHash('md5').update('mumin').digest('hex'),
      rate: 3,
      usage: 0
    }
  ]
  
function verifyKey(aKey){
    for (let obj of theApiKeys) {
        if (obj.key == aKey) {
          return true
        }
      }
      return false
}