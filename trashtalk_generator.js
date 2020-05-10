function sample(array) {
  let radomIndex = Math.floor(Math.random() * array.length)
  return array[radomIndex]
}

function generateTrashTalk(options) {
  // define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點code'],
    designer: ['畫一張圖', '改個logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個business model', '找VC募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const role = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  // create a collection to store things user picked up
  let roleOption = role[options.role]
  let taskOption = task[options.role]
  let taskAction = sample(taskOption)
  let phraseOption = sample(phrase)

  let trashTalk = `${roleOption} ${taskAction} ${phraseOption}。`

  return trashTalk
}

module.exports = generateTrashTalk

