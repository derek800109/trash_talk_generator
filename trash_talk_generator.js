const targetSample = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
}

const taskSample = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phraseSample = ['很簡單', '很容易', '很快', '很正常']
// global variable


function getTaskList( target) {
    if( target === 'engineer') {
        return getRandomElement(taskSample.engineer)
    }

    if( target === 'designer') {
        return getRandomElement(taskSample.designer)
    }

    if( target === 'entrepreneur') {
        return getRandomElement(taskSample.entrepreneur)
    }

    return null
}

function getTarget( target) {
    if( target === 'engineer') {
        return targetSample.engineer
    }

    if( target === 'designer') {
        return targetSample.designer
    }

    if( target === 'entrepreneur') {
        return targetSample.entrepreneur
    }

    return null
}

function getRandomElement( myArray) {
    const index = Math.floor( Math.random() * myArray.length)
    const element = myArray[index]

    return element
}

function trashTalkGenerator( options) {
    // const options = { target: 'engineer' }

    const target = options.target
    const targetName = getTarget(target)
    const task = getTaskList(target)
    const phrase = getRandomElement( phraseSample)
    
    let trashTalk = ''
    if( targetName && task) {
        trashTalk = `身為一個${targetName}，${task}，${phrase}吧！`
    } else {
        trashTalk = 'Please select a target to use this tool'
    }

    return trashTalk
}

module.exports = trashTalkGenerator