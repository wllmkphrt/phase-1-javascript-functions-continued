function saturdayFun(action = 'roller-skate'){
    return `This Saturday, I want to ${action}!`
}
const mondayWork = function (action = 'go to the office'){
    return `This Monday, I will ${action}.`
}
function wrapAdjective(vf = '*'){
    return function (adj = 'special'){
        return `You are ${vf}${adj}${vf}!`
    }
}