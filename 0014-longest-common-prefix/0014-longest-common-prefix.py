class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        
        result = ''
        
        for x in range(len(strs[0])):
            for s in strs:
                if x == len(s) or s[x] != strs[0][x]:
                    return result
            result += strs[0][x]
                        
        return result