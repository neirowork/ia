const japanese = require('../lib/japanese')
const friendly = require('./friendly')
const serifs = require('./serifs')

module.exports = msg => {
  const message = japanese.kanaToHira(msg.content)
  console.log(message)

  friendly.addFriendly(msg.author)
  const userFriendly = friendly.friendly(msg.author)

  if(message.match(/おは/)) {
    msg.channel.send(
      `<@!${msg.author.id}> ${
      userFriendly <= -5 ? serifs.greet.helloMorning.hate :
      userFriendly <= 10 ? serifs.greet.helloMorning.normal :
      serifs.greet.helloMorning.love}`
    )
    return true
  }

  if(message.match(/こんにち[はわ]/)) {
    msg.channel.send(
      `<@!${msg.author.id}> ${
      userFriendly <= -5 ? serifs.greet.hello.hate :
      userFriendly <= 10 ? serifs.greet.hello.normal :
      serifs.greet.hello.love}`
    )
    return true
  }
  
  if(message.match(/こんばん[はわ]/)) {
    msg.channel.send(
      `<@!${msg.author.id}> ${
      userFriendly <= -5 ? serifs.greet.helloNight.hate :
      userFriendly <= 10 ? serifs.greet.helloNight.normal :
      serifs.greet.helloNight.love}`
    )
    return true
  }
  
  if(message.match(/[好す]き/)) {
    msg.channel.send(
      `<@!${msg.author.id}> ${
      userFriendly < -5 ? serifs.love.love.hate :
      userFriendly <= 10 ? serifs.love.love.normal :
      serifs.love.love.normal}`
    )
    return true
  }
  
  if(message.match(/かわいい|可愛い/)) {
    msg.channel.send(
      `<@!${msg.author.id}> ${
      userFriendly < -5 ? serifs.love.kawaii.hate2 :
      userFriendly <= -3 ? serifs.love.kawaii.hate1 :
      userFriendly <= 10 ? serifs.love.kawaii.normal :
      serifs.love.kawaii.love}`
    )
    return true
  }

  if(message.match(/あほ|ばか|くそ|死ね|しね|はげ|はげ|ぶす/)) {
    msg.channel.send(
      `<@!${msg.author.id}> ${
      userFriendly < -5 ? serifs.vl.hate :
      userFriendly <= 10 ? serifs.vl.normal :
      serifs.vl.love}`
    )
    return true
  }

  if(message.match(/ごめん|す[みい]ません|許して|ゆるして/)) {
    msg.channel.send(
      `<@!${msg.author.id}> ${
      userFriendly < -5 ? serifs.apology.hate3 :
      userFriendly <= -3 ? serifs.apology.hate2 :
      userFriendly <= -1 ? serifs.apology.hate1 :
      userFriendly <= 5 ? serifs.apology.normal :
      userFriendly <= 10 ? serifs.apology.love1 :
      serifs.apology.love2}`
    )
    return true
  }

}