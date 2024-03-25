import crypto from 'node:crypto'
import dotenv from 'dotenv'
dotenv.config()

export default (req, res, next) => {
const aKey = req.query.API_KEY 
  || req.header('Authorization')
  || req.body.authorization
  || null
if(!verifyKey(aKey)){
return res.status(403).json({
  type: 'forbidden',
  message: 'not supplied a valid API key!'
})}
next() 
}
export const theApiKeys = [
{
description: 'Master key with unlimited usage',
key: crypto.createHash('md5')
.update(process.env.HASH || "").digest('hex'),
rate: null,
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