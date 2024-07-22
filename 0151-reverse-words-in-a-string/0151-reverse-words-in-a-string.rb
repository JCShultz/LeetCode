# @param {String} s
# @return {String}
def reverse_words(s)
    words = s.split(' ')
    reverseOrder = words.reverse
    joinedReverse = reverseOrder.join(' ')
    #return joinedReverse
    return s.split(' ').reverse.join(' ')
end