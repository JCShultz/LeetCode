# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    string = x.to_s
    rString = string.reverse
    if string === rString 
        return true
    else
        return false
    end
end