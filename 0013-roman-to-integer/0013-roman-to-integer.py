class Solution:
    def romanToInt(self, s: str) -> int:
        # set condiotionals for each char in string as we iterate through the input string
        # add to a result int the values represented by the input chars
        
        roman = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000}
        
        result = 0
        
        for x in range(len(s)):
            if x + 1 < len(s) and roman[s[x]] < roman[s[x+1]]:
                result -= roman[s[x]]
            else:
                result += roman[s[x]]
                
        return result